const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");
const app = express();
const socket = require("socket.io");
const User = require("./models/userModel");
const Messages = require("./models/messageModel");
require("dotenv").config();

app.use(cors());
app.use(express.json());

// ✅ DB CONNECTION
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

// ✅ ROUTES
app.get("/ping", (_req, res) => {
  return res.json({ msg: "Ping Successful" });
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// ✅ SERVER
const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);

// ✅ SOCKET SETUP
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // ✅ USER CONNECT
  socket.on("add-user", (userId) => {
    socket.userId = userId;

    // Add to map
    onlineUsers.set(userId, socket.id);

    // 🔥 SEND UPDATED LIST TO ALL USERS
    io.emit("online-users", Array.from(onlineUsers.keys()));
  });

  // ✅ SEND MESSAGE
  socket.on("send-msg", async (data) => {
  const sendUserSocket = onlineUsers.get(data.to);

  if (sendUserSocket) {
    // ✅ deliver message
    socket.to(sendUserSocket).emit("msg-recieve", data.msg);

    // ✅ notify delivered
    socket.emit("message-delivered");
  }
});
  // ✅ TYPING
  socket.on("typing", (receiverId) => {
    const sendUserSocket = onlineUsers.get(receiverId);

    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("typing");
    }
  });
  socket.on("seen", async (userId) => {
  await Messages.updateMany(
    { sender: userId },
    { $set: { seen: true } }
  );
});

  // ✅ DISCONNECT
  socket.on("disconnect", () => {
    if (socket.userId) {
      onlineUsers.delete(socket.userId);

      // 🔥 BROADCAST AGAIN
      io.emit("online-users", Array.from(onlineUsers.keys()));
    }
  });
});