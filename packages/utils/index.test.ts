import { MEANING_OF_LIFE } from "./index";

describe("utils module", () => {
  it("should assign meaning of life correctly", () => {
    expect(MEANING_OF_LIFE).toBe(42);
  });
});
