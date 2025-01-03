import { Problem } from "../types";

export const problems: Problem[] = [
	{
		id: "two-sum",
		title: "Two Sum",
		difficulty: "Easy",
		category: "Arrays & Hashing",
		dataset: ["blind75"],
		description:
			"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
		leetcodeUrl: "https://leetcode.com/problems/two-sum/",
		youtubeUrl: "https://youtu.be/UXDSeD9mN-k?si=KHZeqtNj5jwTUF1G",
		solutions: [
			{
				title: "Brute Force Approach",
				explanation:
					"The simplest approach is to use nested loops to check every possible pair of numbers. For each number, we iterate through the rest of the array to find its complement.",
				timeComplexity: "O(n²)",
				spaceComplexity: "O(1)",
				implementations: {
					JavaScript: `function twoSum(nums, target) {
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}`,
					Python: `def twoSum(nums: List[int], target: int) -> List[int]:
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []`,
					Java: `public int[] twoSum(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) {
        for (int j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return new int[] { i, j };
            }
        }
    }
    return new int[0];
}`,
				},
			},
			{
				title: "Hash Map Approach",
				explanation:
					"We can use a hash map to store the numbers we've seen so far. For each number, we check if its complement exists in the map. This gives us a more efficient solution.",
				timeComplexity: "O(n)",
				spaceComplexity: "O(n)",
				implementations: {
					JavaScript: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
					Python: `def twoSum(nums: List[int], target: int) -> List[int]:
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
					Java: `public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
    }
    return new int[0];
}`,
				},
			},
		],
	},

	{
		id: "valid-parentheses",
		title: "Valid Parentheses",
		difficulty: "Easy",
		category: "Stacks",
		dataset: ["blind75"],
		description:
			"Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: 1) Open brackets must be closed by the same type of brackets. 2) Open brackets must be closed in the correct order.",
		leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/",
		youtubeUrl: "https://youtu.be/QhPdNS143Qg?si=uJGE91BApAtrtSff",
		solutions: [
			{
				title: "Stack Approach",
				explanation:
					"Use a stack to match opening brackets with their corresponding closing brackets. Push opening brackets onto the stack and pop them when encountering a matching closing bracket.",
				timeComplexity: "O(n)",
				spaceComplexity: "O(n)",
				implementations: {
					JavaScript: `function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for (const char of s) {
        if (char in map) {
            if (stack.pop() !== map[char]) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}`,
					Python: `def isValid(s: str) -> bool:
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)
    return not stack`,
					Java: `public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    Map<Character, Character> map = Map.of(')', '(', '}', '{', ']', '[');
    for (char c : s.toCharArray()) {
        if (map.containsKey(c)) {
            char top = stack.isEmpty() ? '#' : stack.pop();
            if (top != map.get(c)) return false;
        } else {
            stack.push(c);
        }
    }
    return stack.isEmpty();
}`,
				},
			},
		],
	},
];
