const Messages = require("../models/messageModel");

// ✅ GET MESSAGES
module.exports.getMessages = async (req, res, next) => {
  try {
    const { from, to } = req.body;

    const messages = await Messages.find({
      users: {
        $all: [from, to],
      },
    }).sort({ createdAt: 1 });

    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,

        // ✅ NEW
        createdAt: msg.createdAt,
        delivered: msg.delivered,
        seen: msg.seen,
      };
    });

    res.json(projectedMessages);
  } catch (ex) {
    next(ex);
  }
};

// ✅ ADD MESSAGE
module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;

    const data = await Messages.create({
      message: { text: message },
      users: [from, to],
      sender: from,

      // ✅ NEW FIELDS
      delivered: false,
      seen: false,
    });

    if (data) {
      return res.json({
        msg: "Message added successfully.",
        createdAt: data.createdAt, // ✅ send time
      });
    } else {
      return res.json({
        msg: "Failed to add message to the database",
      });
    }
  } catch (ex) {
    next(ex);
  }
};