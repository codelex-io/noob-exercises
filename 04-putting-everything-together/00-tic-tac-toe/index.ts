import * as chalk from "chalk";
import { game } from "./game";

const start = async (game: (end: () => void) => Promise<void>) => {
  const end = () => {
    console.log(chalk.yellow("Bye!"));
    process.exit();
  };
  // prompts is blocking ctrl+c event, so let's listen for it manually
  process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") {
      end();
    }
  });
  while (true) {
    await game(() => end());
  }
};

start(game);
