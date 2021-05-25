import * as readline from "readline";
import * as chalk from "chalk";
import { Direction, FRAMES_PER_SECOND, draw } from "./game";

process.stdin.setRawMode(true);
readline.emitKeypressEvents(process.stdin);

const start = (draw: (direction: Direction) => void) => {
  // prompts is blocking ctrl+c event, so let's listen for it manually
  process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") {
      console.log(chalk.yellow("Bye!"));
      process.exit();
    }
  });

  let direction: Direction = "Right";

  process.stdin.on("keypress", function (ch, key) {
    switch (key.name) {
      case "up":
        direction = "Up";
        break;
      case "right":
        direction = "Right";
        break;
      case "left":
        direction = "Left";
        break;
      case "down":
        direction = "Down";
        break;
      default:
        break;
    }
  });

  setInterval(() => draw(direction), 1000 / FRAMES_PER_SECOND);
};

start(draw);
