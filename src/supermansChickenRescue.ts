export function supermansChickenRescue(
  n: number,
  k: number,
  positions: number[]
): number {
  if (n < 1) {
    throw new Error(
      "The number of chickens (n) must be between 1 and 1,000,000."
    );
  }
  if (k < 0 || k > 1_000_000) {
    throw new Error(
      "The length of the roof (k) must be between 1 and 1,000,000."
    );
  }
  if (positions.length !== n) {
    throw new Error(
      "The number of positions provided must match the number of chickens (n)."
    );
  }
  if (positions.some((p) => p < 1 || p > 1_000_000_000)) {
    throw new Error(
      "Each chicken's position (x) must be between 1 and 1,000,000,000."
    );
  }

  let max = 0,
    right = 0,
    roofLen = 0,
    left = 0;

  while (right < n) {
    while (right < n && roofLen <= k) {
      right++; // Expand sliding window to the right which means expanding the roof length.
      roofLen = positions[right] - positions[left] + 1; // Keep track of the roof length after expansion.
    }

    const count = right - left; // Number of chickens within the current window
    max = Math.max(max, count); // Compare the current count with the max count and keep the bigger one.
    left++; // Shrink sliding window from the left which means reducing the roof length.
    roofLen = positions[right] - positions[left] + 1; // Keep track of the roof length after shrinkage.
  }

  return max;
}
