const axios = require('axios');

module.exports.config = {
  name: "react_unsend",
  version: "1.0",
  hasPermission: 0,
  credits: "Credit",
  description: "React to unsend link",
  commandCategory: "system",
  usages: "",
  cooldowns: 0
};

module.exports.run = async function({ api, event }) {
  if (event.type == "message_reaction" && event.reaction == "👍") {
    const messageId = event.messageId;
    const message = await api.getMessage(messageId);
    const messageText = message.body;

    // Check if the message contains a link
    if (messageText.includes("http")) {
      api.unsendMessage(messageId);
    }
  }
};
