module.exports.config = {
    name: "console",
    version: "1.0.0",
    permission: 3,
    credits: "sakibin",
    prefix: true,
    premium: false,
    description: "",
    category: "system",
    usages: "",
    cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
  let { messageID, threadID, senderID, mentions } = event;
  const chalk = require('chalk');
  const moment = require("moment-timezone");
  var time= moment.tz("Asia/Dhaka").format("LLLL");   
  const thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
  if (event.senderID == global.data.botID) return;
  let nameBox;
  let userorgroup;
  let threadid;
  let sakibin;
  let sakibin1;
  try {
    const isGroup = await global.data.threadInfo.get(event.threadID).threadName || "name does not exist";
    nameBox = `${isGroup}\n`;
    threadid = `${threadID}\n`;
    sakibin = chalk.blue('group name : ');
    sakibin1 = chalk.blue('group id : ');
    userorgroup = `GROUP CHAT MESSAGE`;
  } catch (error) {
    sakibin = "";
    sakibin1 = "";
    threadid = "";
    nameBox = "";
    userorgroup = `PRIVATE CHAT MESSAGE`;
  }
  var nameUser = await Users.getNameUser(event.senderID)
  var msg = event.body||"photos, videos or special characters";

  console.log(`\n` + chalk.blue(`\n${userorgroup}\n`) + `\n` + sakibin + nameBox + sakibin1 + threadid + chalk.blue(`[name]: ${chalk.white(nameUser)}`) + "-" + chalk.blue(`[user]: ${chalk.white(senderID)}`) + '-' + chalk.blue(`[message]: ${chalk.blueBright(msg)}`) + `\n` + chalk.blue(` ${time}`) + `-` + chalk.blue(`>`) + `\n`);
}

module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {
  
}