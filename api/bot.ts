import { Bot, InlineKeyboard, session } from "grammy";
import { I18n } from "@grammyjs/i18n";
import { MyContext } from "./types";
import {
  ALLOWED_LANGUAGES,
  LANGUAGES_TO_FLAG,
  LANGUAGES,
  FULL_LANGUAGE_NAMES,
} from "./constants/languages";
import { loadLocalizations } from "./utils/localization";
import { supabaseStorage } from "./utils/storage";
import { rateLimiter } from "./utils/rate-limiter";
import { COMMANDS } from "./constants/commands";

const BOT_TOKEN: string = process.env["BOT_TOKEN"] ?? "";

const i18n = new I18n<MyContext>({
  defaultLocale: "en",
  useSession: true, // whether to store user language in session
});

loadLocalizations(i18n);

const bot = new Bot<MyContext>(BOT_TOKEN);

bot.use(
  session({
    initial: () => ({}),
    storage: supabaseStorage,
  })
);

bot.use(i18n);
rateLimiter(bot);

const inlineKeyboard = new InlineKeyboard();
const ENUM_LANGUAGES = Object.values(LANGUAGES)
  .filter((language) => ALLOWED_LANGUAGES.includes(language))
  .map((language) => {
    return {
      type: "text",
      text: `${LANGUAGES_TO_FLAG[language]} ${FULL_LANGUAGE_NAMES[language]}`,
      callback_data: COMMANDS.SET_LANGUAGE + ":" + language,
      design: "row",
    };
  });

ENUM_LANGUAGES.forEach((button) => {
  inlineKeyboard[button.type](button.text, button.callback_data)[
    button.design
  ]();
});

// Send a keyboard along with a message.
bot.command(COMMANDS.START, async (ctx: MyContext) => {
  await ctx.reply("Please choose your language", {
    reply_markup: inlineKeyboard,
  });
});

bot.on("callback_query:data", async (ctx: MyContext) => {
  const command = ctx.callbackQuery.data.split(":")[0];
  if (command === COMMANDS.SET_LANGUAGE) {
    const locale = ctx.callbackQuery.data.split(":")[1];
    await ctx.i18n.setLocale(locale);
    await ctx.reply(
      ctx.t("language.language-set-success", {
        language:
          FULL_LANGUAGE_NAMES[locale as keyof typeof FULL_LANGUAGE_NAMES],
      })
    );
  }
  await ctx.answerCallbackQuery();
});

bot.catch((err) => {
  console.log("Error", err);
});

// Start the bot.
bot.start();
