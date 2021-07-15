import type { Response } from "./types";

export function printInput(input: string): Response {
  return { output: `input: ${input}` };
}
