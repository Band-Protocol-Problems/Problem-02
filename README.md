# Superman's Chicken Rescue

## Table of Contents

- [Problem Description](#problem-description)
  - [Input](#input)
  - [Output](#output)
  - [Note](#note)
  - [Examples](#examples)
- [Solution](#solution)
  - [Ideation](#ideation)
  - [Chosen Approach](#chosen-approach)
    - [How It Works](#how-it-works)
    - [Complexity](#complexity)
- [Running the Code](#running-the-code)
- [Testing](#testing)

## Problem Description

In a one-dimensional world, Superman needs to protect chickens from a heavy rainstorm using a roof of limited length. Given the positions of chickens and the length of the roof Superman can carry, determine the maximum number of chickens Superman can protect.

### Input

The input consists of two integers `n` and `k` (`1 <= n`,`k <= 1,000,000`), where `n` represents the number of chickens and `k` denotes the length of the roof Superman can carry. The next line contains `n` integers (`1 <= x <= 1,000,000,000`) representing the positions of the chickens on the one-dimensional axis.

### Output

Output a single integer, denoting the maximum number of chickens Superman can protect with the given roof length.

### Note

- Superman can position the roof starting at any point on the axis.
- The roof can cover chickens whose positions are within `k` units from its starting point. `[p, p+k)`
- It's not required to cover all chickens, but to maximize the number of chickens protected.
- It’s guaranteed that the given positions of the chickens will be sorted from lowest to highest.

### Examples

| **Input**                | **Output** |
| ------------------------ | ---------- |
| 5 5<br>2 5 10 12 15      | 2          |
| 6 10<br>1 11 30 34 35 37 | 4          |

### Explanation

In the first example, superman can position the roof starting at position 2 (roof at 2 - 6), covering chickens at positions 2 and 5. Thus, he can protect a maximum of 2 chickens.

In the second example, superman can position the roof starting at position 30 (roof at 30 - 39), covering
chickens at positions 30, 34, 35, and 37. Thus, he can protect a maximum of 4 chickens.

## Solution

### Ideation

For this problem, initially, a brute-force approach came to mind as it could go through each combination,but it would be inefficient. Instead, the Sliding Window technique is employed. By expanding the window to the right and tracking the number of chickens within the roof length, and then shrinking from the left when the roof length exceeds the limit, the maximum number of chickens protected could be determined.

### Chosen Approach

The chosen approach utilizes the Sliding Window technique, which is ideal for problems involving subarrays or contiguous segments. This method allows us to efficiently find the maximum number of chickens Superman can protect without having to examine every possible subarray explicitly.

#### How It Works

1. Initialize Pointers:

   - Set up two pointers, `left` and `right`, both starting at the beginning of the positions array. These pointers will define the sliding window for tracking the chickens under the roof.

2. Expand the Sliding Window:

   - Increment `right` pointer to expand the sliding window. For each step, calculate the current roof length from the given information: `[p, p + k)`, which could be written as `[left position, left position + roof length)`, making `right position = left position + roof length - 1` (right-edge not included), therefore, `roof length = right position - left position + 1`.

3. Count and Compare:

   - Continue expanding the window until the roof length exceeds `k`. At this point, the roof covers more chickens than allowed, so the number of chickens within the current window needs to be counted and compared to `max` to see if it’s the largest number of protected chickens found so far.

4. Shrink the Window:

   - When the roof length exceeds `k`, increment `left` pointer to shrink the sliding window until the roof length is within the allowed limit again. This adjustment ensures that the window size is always valid while trying to maximize the count of protected chickens.
   - Update the roof length using the formula mentioned earlier.

5. Update and Return Result:

   - After adjusting the window, update the maximum number of chickens protected if the current window size is larger than previously recorded. Continue this process until `right` pointer has traversed the entire array. Finally, return the `max` value, which represents the maximum number of chickens that can be protected under the given roof length.

### Complexity

- **Time Complexity:** `O(n)` - (Only `right` and `left` pointers move from the beginning to the end of the positions array, each position in the `positions` array is processed a constant number of times.)
- **Space Complexity:** `O(1)` (`max`, `right`, `left`, and `roofLen`)

## Running the Code

To run the code:

1. Ensure you have packages installed.
   ```bash
   npm install
   ```
2. Compile and run the _TypeScript_ code using `ts-node`:
   ```bash
   npm run main
   ```

## Testing

1. Run the `test` script.
   ```bash
   npm run test
   ```
