import { supermansChickenRescue } from "../src/supermansChickenRescue";

describe("supermansChickenRescue", () => {
  describe("Example test cases", () => {
    it("should return 2 for input '5 5' with positions [2, 5, 10, 12, 15]", () => {
      expect(supermansChickenRescue(5, 5, [2, 5, 10, 12, 15])).toBe(2);
    });
    it("should return 4 for input '6 10' with positions [1, 11, 30, 34, 35, 37]", () => {
      expect(supermansChickenRescue(6, 10, [1, 11, 30, 34, 35, 37])).toBe(4);
    });
  });

  describe("Additional test cases", () => {
    it("should return 1 for single position at the upper limit [1,000,000,000]", () => {
      expect(supermansChickenRescue(1, 1, [1_000_000_000])).toBe(1);
    });
    it("should return 3 for input '5 3' with positions [1, 2, 3, 4, 5]", () => {
      expect(supermansChickenRescue(5, 3, [1, 2, 3, 4, 5])).toBe(3);
    });
    it("should return 1 for input '10 1' with positions [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
      expect(
        supermansChickenRescue(10, 5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      ).toBe(5);
    });
    it("should return 1 for the smallest possible n and k", () => {
      expect(supermansChickenRescue(1, 1, [1])).toBe(1);
    });
    it("should return n when k is large enough to cover all positions", () => {
      expect(supermansChickenRescue(5, 1_000_000, [1, 2, 3, 4, 5])).toBe(5);
    });
    it("should return 1 for input '5 1' with positions [1, 2, 3, 4, 5]", () => {
      expect(supermansChickenRescue(5, 1, [1, 2, 3, 4, 5])).toBe(1);
    });
    it("should return n when all positions are the same", () => {
      expect(supermansChickenRescue(5, 1, [1, 1, 1, 1, 1])).toBe(5);
    });
  });
});
