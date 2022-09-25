import { whatsTheMeaningOfLife } from "./index";

describe("core module", () => {
  it("should give meaning of life", () => {
    expect(whatsTheMeaningOfLife()).toBe(42);
  });
});
