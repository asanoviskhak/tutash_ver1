"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const storage_supabase_1 = require("@grammyjs/storage-supabase");
const supabase_js_1 = require("@supabase/supabase-js");
const languages_1 = require("../constants/languages");
const i18n_1 = require("@grammyjs/i18n");
const directory_tree_1 = __importDefault(require("directory-tree"));
const BOT_TOKEN = (_a = process.env["BOT_TOKEN"]) !== null && _a !== void 0 ? _a : "";
const tree3 = (0, directory_tree_1.default)("/var/runtime");
console.log("runtime directory", tree3);
const tree2 = (0, directory_tree_1.default)("/var/spool");
console.log("spool directory", tree2);
const lib = (0, directory_tree_1.default)("/var/lib");
console.log("lib directory", lib);
const rapid = (0, directory_tree_1.default)("/var/rapid");
console.log("rapid directory", rapid);
const i18n = new i18n_1.I18n({
    defaultLocale: "en",
    useSession: true,
    directory: "/vercel/path0/locales", // Load all translation files from locales/.
});
const URL = (_b = process.env["SUPABASE_URL"]) !== null && _b !== void 0 ? _b : "https://zrzbwyqoeptuszgqmnin.supabase.co";
const KEY = (_c = process.env["SUPABASE_API_KEY"]) !== null && _c !== void 0 ? _c : "anon-key";
// supabase instance
const supabase = (0, supabase_js_1.createClient)(URL, KEY);
//create storage
const storage = (0, storage_supabase_1.supabaseAdapter)({
    supabase,
    table: "Session", // the defined table name you want to use to store your session
});
const bot = new grammy_1.Bot(BOT_TOKEN);
bot.use((0, grammy_1.session)({
    initial: () => ({}),
    storage,
}));
bot.use(i18n);
const inlineKeyboard = new grammy_1.InlineKeyboard();
const ENUM_LANGUAGES = Object.values(languages_1.LANGUAGES)
    .filter((language) => languages_1.ALLOWED_LANGUAGES.includes(language))
    .map((language) => {
    return {
        type: "text",
        text: `${languages_1.LANGUAGES_TO_FLAG[language]} ${languages_1.FULL_LANGUAGE_NAMES[language]}`,
        callback_data: language,
        design: "row",
    };
});
ENUM_LANGUAGES.forEach((button) => {
    inlineKeyboard[button.type](button.text, button.callback_data)[button.design]();
});
// Send a keyboard along with a message.
bot.command("start", async (ctx) => {
    await ctx.reply("Please choose your language", {
        reply_markup: inlineKeyboard,
    });
});
bot.on("callback_query:data", async (ctx) => {
    await ctx.i18n.setLocale(ctx.callbackQuery.data);
    console.log(ctx.t("language.language-set-success", {
        language: languages_1.FULL_LANGUAGE_NAMES[ctx.callbackQuery.data],
    }), ctx.callbackQuery.data);
    await ctx.reply(ctx.t("language.language-set"));
    await ctx.answerCallbackQuery({
        text: ctx.t("language.language-set-success", {
            language: languages_1.FULL_LANGUAGE_NAMES[ctx.callbackQuery.data],
        }),
    }); // remove loading animation
});
// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.
bot.catch((err) => {
    console.log("Error", err);
});
// The free version of vercel has restrictions on quotas, which we need to enable in the configuration file vercel.json
// webhookCallback will make sure that the correct middleware(listener) function is called
exports.default = (0, grammy_1.webhookCallback)(bot, "http");
