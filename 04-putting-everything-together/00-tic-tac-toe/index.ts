import * as prompts from "prompts";
import * as chalk from "chalk";

const start = async (game: () => Promise<void>) => {
  // prompts is blocking ctrl+c event, so let's listen for it manually
  process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") {
      console.log(chalk.yellow("Bye!"));
      process.exit();
    }
  });
  await game();
};

interface Coordinates {
  x: number;
  y: number;
}

start(async () => {
  let coordinates: Coordinates | undefined;

  while (true) {
    console.clear();
    console.log(`x=${coordinates?.x} & y=${coordinates?.y}`);
    console.log("· · ·\n· x ·\n· o ·\n");

    const response = await prompts([
      {
        type: "number",
        name: "x",
        message: "Enter coordinate on x axys",
      },
      {
        type: "number",
        name: "y",
        message: "Enter coordinate on y axys",
      },
    ]);

    // ... is spread syntax, read more here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    coordinates = { ...response };
  }
});
