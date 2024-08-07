const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_55_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDI3LFxuICAgICAgICAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEwLFxuICAgICAgICA3MixcbiAgICAgICAgODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUzLFxuICAgICAgICA5NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDg0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDg2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDY3LFxuICAgICAgICAzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMTY3LFxuICAgICAgICA3MixcbiAgICAgICAgMTM1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2OCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDU4LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDg3LFxuICAgICAgICA4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDU2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMyLFxuICAgICAgICA5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9zajFJRXpaMzcxSi93SHFXc3RXTzlHN2hXMUFJbEtnNCs1ZDd3OFN0d1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzMTAyMTkyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E4OUQzN0ZFMEZGNzdGMzFBRDdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMDY0MTQ2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzMTAyMTkyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0ExRTAxQ0UyODQzQzA1NUQyNkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMDY0MTQ5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjU4WXM2RkJxUnZ1WkhTLWlNdk1Ta2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTRlZGUyMWYtZjczOS00NzQzLThmY2YtNzQ3NmQyNzdhNzI1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NSxcbiAgICAgIDMwLFxuICAgICAgMjE1LFxuICAgICAgMjYsXG4gICAgICAyNDEsXG4gICAgICAyMTQsXG4gICAgICAyMTYsXG4gICAgICA1OSxcbiAgICAgIDcwLFxuICAgICAgMTYyLFxuICAgICAgMTQyLFxuICAgICAgMTY0LFxuICAgICAgMTc3LFxuICAgICAgNzgsXG4gICAgICA1MSxcbiAgICAgIDQ4LFxuICAgICAgMTg4LFxuICAgICAgMTE0LFxuICAgICAgNTcsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDIzOSxcbiAgICAgIDI1NCxcbiAgICAgIDIwNixcbiAgICAgIDE5NixcbiAgICAgIDExMSxcbiAgICAgIDYwLFxuICAgICAgMjI1LFxuICAgICAgNzUsXG4gICAgICAyMjMsXG4gICAgICA4OSxcbiAgICAgIDIyMCxcbiAgICAgIDEwNCxcbiAgICAgIDE1MixcbiAgICAgIDEwMCxcbiAgICAgIDIwMCxcbiAgICAgIDE3NCxcbiAgICAgIDE3MCxcbiAgICAgIDE2OSxcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09HTW1LZ1BFTXkrejdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaXpNaTNJU3k5cE1UMDNvNDhEbGp2YlFNcndpdFdPVUJSRDhMM2wyeUZDST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDK1RJK1pJeFUveVp0d0wzWHdaWkNhbGlGT3ExdzQ0S3ZmQlJ4bHgxaUQzVTZqa2NXS3U2aTBaWE5IVWRhR091NnFGNzhTOW11NHNJbWIzQ3hSNHJCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4aVpsYTUxTjZOUlE0TmkzRktwbUg1dm9rZE9iZVJZNjRnQ1lISEZEL2x3em91STdxMVRab1lKSW5xcXNnRlcrMnNjb3RxUTF1YzRvczZsQkpZMFppQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzEwMjE5Mjg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk0ODAzMDczNTU2NDg2OjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRE9OV0laXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMxMDIxOTI4OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzA2NDE0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNwQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3BBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaHBSYTJzZ0lTclBYemRCSUJmS1dJdkdSZ1oxdCtoOWppdWtEWXVKSWwyaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MTEwODEyNzY5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMwNjQxNDUwMzVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
