import * as dotenv from "dotenv";
import { Bot } from "grammy";
dotenv.config();

const BOT_TOKEN = process.env["BOT_TOKEN"] || "";
const WEBHOOK_URL = process.env["WEBHOOK"] || "http://localhost:3000";

const bot = new Bot(BOT_TOKEN); // <-- Set your token in the vercel environment variable

bot.api.setWebhook(WEBHOOK_URL);
