import { printInput } from "./main";

describe("printInput", () => {
  it("returns the input", () => {
    const response = printInput("abcde");
    expect(response).toEqual("input: abcde");
  });
});
