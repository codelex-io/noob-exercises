import * as chalk from "chalk";

export type Direction = "Up" | "Right" | "Left" | "Down";
export const FRAMES_PER_SECOND = 2;

// define needed variables here so that they are available between redraws

// function will be called every (1000 / FRAMES_PER_SECOND) seconds
export const draw = (direction: Direction) => {
  console.clear();
  console.log(
    `Current direction: ${chalk.blue(direction)} (${chalk.gray(
      "try pressing arrows"
    )})`
  );
  console.log(chalk.red(`Score: ${Math.floor(Math.random() * 100)}`));
};
