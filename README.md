# 💬 Real-Time Chat Application (MERN)

A full-stack real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application enables users to communicate instantly with features like live messaging, online status tracking, typing indicators, and message delivery status.

---

## 🚀 Features

* 🔐 User Authentication (Register / Login / Logout)
* 💬 Real-time Messaging using Socket.IO
* 🟢 Online / ⚫ Offline User Status
* ✔ Message Sent, Delivered, and Seen Indicators
* ⌨️ Typing Indicator (Live)
* 📜 Persistent Chat History (MongoDB)
* 🎨 Responsive & Modern UI
* 🔄 Auto Scroll to Latest Message

---

## 🛠️ Tech Stack

### 💻 Frontend

* React.js
* Styled Components
* Axios
* React Router DOM

### ⚙️ Backend

* Node.js
* Express.js

### 🗄️ Database

* MongoDB (MongoDB Compass / Atlas)

### 🔗 Real-Time Communication

* Socket.IO

---

## 📂 Project Structure

```
chat-app/
│
├── client/                # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Chat UI Components
│   │   ├── pages/         # Login, Register, Chat Pages
│   │   ├── utils/         # API Routes
│   │   └── App.js
│
├── server/                # Backend (Node + Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── socket.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create `.env` file inside **server/** folder:

```
PORT=5000
MONGO_URL=your_mongodb_connection_string
```

Start backend server:

```bash
npm start
```

---

### 3️⃣ Setup Frontend

Open new terminal:

```bash
cd client
npm install
npm start
```

---

## 🔌 API Endpoints

### 👤 Auth

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login user
* `GET /api/auth/logout/:id` → Logout user

### 💬 Messages

* `POST /api/messages/addmsg` → Send message
* `POST /api/messages/getmsg` → Get messages

---

## 🔄 Real-Time Events (Socket.IO)

* `add-user` → Add user to online list
* `send-msg` → Send message
* `msg-recieve` → Receive message
* `typing` → Show typing indicator
* `seen` → Mark messages as seen
* `message-delivered` → Delivery confirmation

---

## 🧠 Learnings

* Built real-time chat using WebSockets (Socket.IO)
* Implemented full authentication flow
* Managed API integration with React
* Designed responsive UI with Styled Components
* Handled live updates like typing & delivery status

---

## 📸 Screenshots

*Add screenshots here (Chat UI, Login Page, etc.)*

---

## 📌 Future Improvements

* 📎 File & Image Sharing
* 🔔 Push Notifications
* 🌐 Deployment (Render / Vercel / MongoDB Atlas)
* 👥 Group Chat Feature
* 🔍 Search Messages

---

## 🐞 Common Issues & Fixes

### ❌ MongoDB not connecting

✔ Make sure MongoDB service is running
✔ Check connection string in `.env`

### ❌ Socket not working

✔ Check backend server is running
✔ Verify socket connection URL

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

---

## 📧 Contact

**Hamsavarthiny Ponnaiah**
📩 [your-email@example.com](mailto:your-email@example.com)
🔗 LinkedIn: your-linkedin-profile
💻 GitHub: your-github-profile

---

## ⭐ Support

If you like this project, please ⭐ the repository!

---
