"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const i18n_1 = require("@grammyjs/i18n");
const languages_1 = require("./constants/languages");
const localization_1 = require("./utils/localization");
const storage_1 = require("./utils/storage");
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
    await ctx.reply(ctx.t("language.language-set-success", {
        language: languages_1.FULL_LANGUAGE_NAMES[ctx.callbackQuery.data],
    }));
    await ctx.answerCallbackQuery();
});
bot.catch((err) => {
    console.log("Error", err);
});
// The free version of vercel has restrictions on quotas, which we need to enable in the configuration file vercel.json
// webhookCallback will make sure that the correct middleware(listener) function is called
exports.default = (0, grammy_1.webhookCallback)(bot, "http");
