import {
  Bot,
  InlineKeyboard,
  Context,
  session,
  SessionFlavor,
  webhookCallback,
} from "grammy";
import { supabaseAdapter } from "@grammyjs/storage-supabase";
import { createClient } from "@supabase/supabase-js";
import {
  ALLOWED_LANGUAGES,
  LANGUAGES_TO_FLAG,
  LANGUAGES,
  FULL_LANGUAGE_NAMES,
} from "./constants/languages";
import { I18n, I18nFlavor } from "@grammyjs/i18n";

const BOT_TOKEN: string = process.env["BOT_TOKEN"] ?? "";

interface SessionData {
  __language_code?: string;
}
type MyContext = Context & SessionFlavor<SessionData> & I18nFlavor;

const i18n = new I18n<MyContext>({
  defaultLocale: "en",
  useSession: true, // whether to store user language in session
  directory: "locales/", // Load all translation files from locales/.
});

const URL =
  process.env["SUPABASE_URL"] ?? "https://zrzbwyqoeptuszgqmnin.supabase.co";
const KEY = process.env["SUPABASE_API_KEY"] ?? "anon-key";

// supabase instance
const supabase = createClient(URL, KEY);

//create storage
const storage = supabaseAdapter({
  supabase,
  table: "Session", // the defined table name you want to use to store your session
});

const bot = new Bot<MyContext>(BOT_TOKEN);
bot.use(
  session({
    initial: () => ({}),
    storage,
  })
);
bot.use(i18n);

const inlineKeyboard = new InlineKeyboard();
const ENUM_LANGUAGES = Object.values(LANGUAGES)
  .filter((language) => ALLOWED_LANGUAGES.includes(language))
  .map((language) => {
    return {
      type: "text",
      text: `${LANGUAGES_TO_FLAG[language]} ${FULL_LANGUAGE_NAMES[language]}`,
      callback_data: language,
      design: "row",
    };
  });

ENUM_LANGUAGES.forEach((button) => {
  inlineKeyboard[button.type](button.text, button.callback_data)[
    button.design
  ]();
});
// Send a keyboard along with a message.
bot.command("start", async (ctx) => {
  await ctx.reply("Please choose your language", {
    reply_markup: inlineKeyboard,
  });
});

bot.on("callback_query:data", async (ctx) => {
  await ctx.i18n.setLocale(ctx.callbackQuery.data);
  console.log(
    ctx.t("language.language-set-success", {
      language:
        FULL_LANGUAGE_NAMES[
          ctx.callbackQuery.data as keyof typeof FULL_LANGUAGE_NAMES
        ],
    }),
    ctx.callbackQuery.data
  );
  await ctx.reply(ctx.t("language.language-set"));
  await ctx.answerCallbackQuery({
    text: ctx.t("language.language-set-success", {
      language:
        FULL_LANGUAGE_NAMES[
          ctx.callbackQuery.data as keyof typeof FULL_LANGUAGE_NAMES
        ],
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
export default webhookCallback(bot, "http");
