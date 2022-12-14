"use strict";
exports.__esModule = true;
var grammy_1 = require("grammy");
var BOT_TOKEN = process.env["BOT_TOKEN"] || "";
var WEBHOOK_URL = process.env["WEBHOOK"] || "http://localhost:3000";
var bot = new grammy_1.Bot(BOT_TOKEN); // <-- Set your token in the vercel environment variable
bot.api.setWebhook(WEBHOOK_URL);
