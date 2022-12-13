import { Bot, webhookCallback } from "grammy";

const BOT_TOKEN: string = process.env["BOT_TOKEN"] || "";

const bot = new Bot(BOT_TOKEN);

// attach all middleware
bot.on("message", async (ctx) => {
  await ctx.reply("Hi there!");
  await ctx.reply("Hi there! 2");
});

// The free version of vercel has restrictions on quotas, which we need to enable in the configuration file vercel.json
// webhookCallback will make sure that the correct middleware(listener) function is called
export default webhookCallback(bot, "http");
