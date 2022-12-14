import { Bot, webhookCallback } from "grammy";

const BOT_TOKEN: string = process.env["BOT_TOKEN"] || "";

const bot = new Bot(BOT_TOKEN);

bot.on("message", async (ctx) => {
  await ctx.reply(ctx.message?.text ?? "No text");
});

// The free version of vercel has restrictions on quotas, which we need to enable in the configuration file vercel.json
// webhookCallback will make sure that the correct middleware(listener) function is called
export default webhookCallback(bot, "http");
