//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2349034499018";
global.sudo = process.env.SUDO || "2349034499018";
global.owner = process.env.OWNER_NUMBER || "2348086541281";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0o4QTRhdmEyR3IzSWxyNkhjNUFHQ3V2bS9uUXZnZ204alptQ0EzOHVuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEp1NTcxc3hqamFjMzRoRm43Y3BQamxSNW5heTBVVk1ZVitUK2UyYVR3WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtS2lEayt5VGtjTXhIQlZUMFNJUHZRbW5PTTJvbVdwdmFYaHFjZm1SOGt3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXaDdEOXdLK3NZMGszSkt0ZE03c2xtSGpXR3QxbkcyYWFRZ0ljeWpUL0NNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFBdlJDVXBNODNBR1B4ejZsSFV3NFV1Q0ZFeTR0VjJzSDBYM2xZeWV6Mlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN5TWVlaFVDRFVQYzl1bDFMVklpSTBCdG44dnFFaUVsdmZFb0tkTGpWbVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0Q0T2hUYnFaZi9ZODZqWkpUV3dPVThNVFdsVmxVSlVjOHhjNkRzQm1VST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmZwTFVzTitNSXlHWWV6cVY5WU9XNVdqdWh1N1l2WEl0bmpFSUZCdERGOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlUvWUZBRFJteHhvZmdTNFM5c1YxZUc0L1RrdGFsaWVwMmliS2wrMzdMV2N2RHVKMXNKb3JXNTVMVDMzWDY2Y0lUN2NJczBnZmpyY3lCcmhVVVVMVURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzIsImFkdlNlY3JldEtleSI6IjhjdlZqa2pWSWMxU2hiTThubGN6U0hIclFVeWpSNGMwd3NBWnpydW11cXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkdRVDFMWGYwUTh1cTl5N2FDQ3RCSHciLCJwaG9uZUlkIjoiM2ZiY2RhMDgtNjY5MS00NmQxLWI1YmQtNzg3MTU3MDY4ZDM5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZZUFFHTG1JcUJML1V6bzNvMG5iRU5BVDRNND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRXNZaFQ3Q2tNd0xodHI3dlV0VGlrdWpUV009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSDNRWDlOV1QiLCJtZSI6eyJpZCI6IjIzNDkwMzQ0OTkwMTg6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTdGFyYm95In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKdUl5T1FFRUoycTlya0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvMTlLdHdrekJDRS9VTm1HdUduMWFQUVlhUVErR1U1RVZDbHg0cUpWYXd3PSIsImFjY291bnRTaWduYXR1cmUiOiJnQUxaUEpnTEI3NmJIclhoK2t0UVlpa3gyK1ljamJTaEM0eTVKdkE1RjBMVDlxYmpCc3Zxam1uZHhWbDV3UFBEMUhjcENOaThDZCsrWnEydkZYck9Edz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSjMxblVyVEJZalU3emlLaGl1SlJRZnBpQlVJRVZ6dG1vdGp6RUQrajNtcnhrZGs2OHRmL3E4UGpUOW5zSXE3VEtwempId2lkNkVBRXdiYThaRXI2QkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDM0NDk5MDE4OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYU5mU3JjSk13UWhQMURaaHJocDlXajBHR2tFUGhsT1JGUXBjZUtpVldzTSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjA4OTEzMX0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
