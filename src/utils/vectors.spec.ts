import { magnitude } from "./vectors";

describe("magnitude", () => {
  it("returns the magnitude of a vector", () => {
    expect(magnitude({ x: 3, y: 4 })).toEqual(5);
  });
  it("correctly handles negative values", () => {
    expect(magnitude({ x: -3, y: -4 })).toEqual(5);
  });
  it("correctly handles a zero vector", () => {
    expect(magnitude({ x: 0, y: 0 })).toEqual(0);
  });
});
