"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const grammy_1 = require("grammy");
const i18n_1 = require("@grammyjs/i18n");
const languages_1 = require("./constants/languages");
const localization_1 = require("./utils/localization");
const storage_1 = require("./utils/storage");
const rate_limiter_1 = require("./utils/rate-limiter");
const commands_1 = require("./constants/commands");
dotenv.config();
const BOT_TOKEN = (_a = process.env["BOT_TOKEN"]) !== null && _a !== void 0 ? _a : "";
const i18n = new i18n_1.I18n({
    defaultLocale: "en",
    useSession: true, // whether to store user language in session
});
(0, localization_1.loadLocalizations)(i18n);
const bot = new grammy_1.Bot(BOT_TOKEN);
bot.use((0, grammy_1.session)({
    initial: () => ({}),
    storage: storage_1.supabaseStorage,
}));
bot.use(i18n);
(0, rate_limiter_1.rateLimiter)(bot);
const inlineKeyboard = new grammy_1.InlineKeyboard();
const ENUM_LANGUAGES = Object.values(languages_1.LANGUAGES)
    .filter((language) => languages_1.ALLOWED_LANGUAGES.includes(language))
    .map((language) => {
    return {
        type: "text",
        text: `${languages_1.LANGUAGES_TO_FLAG[language]} ${languages_1.FULL_LANGUAGE_NAMES[language]}`,
        callback_data: commands_1.COMMANDS.SET_LANGUAGE + ":" + language,
        design: "row",
    };
});
ENUM_LANGUAGES.forEach((button) => {
    inlineKeyboard[button.type](button.text, button.callback_data)[button.design]();
});
// Send a keyboard along with a message.
bot.command(commands_1.COMMANDS.START, async (ctx) => {
    await ctx.reply("Please choose your language bot", {
        reply_markup: inlineKeyboard,
    });
});
bot.on("callback_query:data", async (ctx) => {
    const command = ctx.callbackQuery.data.split(":")[0];
    if (command === commands_1.COMMANDS.SET_LANGUAGE) {
        const locale = ctx.callbackQuery.data.split(":")[1];
        await ctx.i18n.setLocale(locale);
        await ctx.reply(ctx.t("language.language-set-success", {
            language: languages_1.FULL_LANGUAGE_NAMES[locale],
        }));
    }
    await ctx.answerCallbackQuery();
});
bot.catch((err) => {
    console.log("Error", err);
});
// Start the bot.
bot.start();
