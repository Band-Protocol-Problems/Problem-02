import { createInterface } from "readline";
import { supermansChickenRescue } from "./supermansChickenRescue";

function main() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter input: ", (firstLine) => {
    const [nStr, kStr] = firstLine.split(" ");
    const n = Number(nStr);
    const k = Number(kStr);

    rl.question("", (secondLine) => {
      const positions = secondLine.split(" ").map(Number);
      const result = supermansChickenRescue(n, k, positions);
      console.log("Result:", result);

      rl.close();
    });
  });
}

main();
