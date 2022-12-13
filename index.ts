import { Bot } from "grammy";

const BOT_TOKEN: string = process.env["BOT_TOKEN"] || "";
const WEBHOOK_URL: string = process.env["WEBHOOK"] || "";

const bot = new Bot(BOT_TOKEN); // <-- Set your token in the vercel environment variable

bot.api.setWebhook(WEBHOOK_URL);
