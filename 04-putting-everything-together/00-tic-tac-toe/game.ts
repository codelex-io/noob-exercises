import * as prompts from "prompts";

interface Coordinates {
  x: number;
  y: number;
}

let coordinates: Coordinates | undefined;

// end() can be called if you want to end the game and exit
export const game = async (end: () => void) => {
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
};
