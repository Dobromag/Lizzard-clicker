import { Markup, Telegraf } from "telegraf";

const token = "8021212176:AAHyXV7hcowLxWw81m7AdMabuPrJ97hmajs";
const webAppUrl = "https://lizzard-clicker-pro-a1b9c.web.app/";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Hello! Press to start the app",
    Markup.inlineKeyboard([
      Markup.button.webApp("Open mini app", `${webAppUrl}?ref=${ctx.payload}`),
    ])
  );
});

bot.launch();
