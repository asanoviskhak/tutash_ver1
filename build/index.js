"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const BOT_TOKEN = process.env["BOT_TOKEN"] || "";
const bot = new grammy_1.Bot(BOT_TOKEN);
bot.on("message", async (ctx) => {
    var _a, _b;
    await ctx.reply((_b = (_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : "No text");
});
// The free version of vercel has restrictions on quotas, which we need to enable in the configuration file vercel.json
// webhookCallback will make sure that the correct middleware(listener) function is called
exports.default = (0, grammy_1.webhookCallback)(bot, "http");
