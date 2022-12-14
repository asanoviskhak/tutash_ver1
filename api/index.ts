import { Bot, webhookCallback } from "grammy";

const BOT_TOKEN: string = process.env["BOT_TOKEN"] || "";

const bot = new Bot(BOT_TOKEN);

bot.on("message", async (ctx) => {
  console.log(ctx);
  await ctx.reply("Hello World!");
});

// The free version of vercel has restrictions on quotas, which we need to enable in the configuration file vercel.json
// webhookCallback will make sure that the correct middleware(listener) function is called
export default webhookCallback(bot, "http");
