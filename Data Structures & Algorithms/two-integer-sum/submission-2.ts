class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // counter map, reverse indexed
        const reverseMap: Record<number, number[]> = {}
        for (const [i, val] of Object.entries(nums)) {
            const index = parseInt(i)
            const remaining = target - val;
            // what we need is reverse indexing,
            // index the original index by its value,
            // so that we can look up what index of that remaining value.
            reverseMap[val] = [...(reverseMap[val] ?? []), index];
            const remainingIndexes = reverseMap[remaining] ?? []
            const coutnerpartIndex = remainingIndexes.find((ri) => ri !== index)
            if (Number.isFinite(coutnerpartIndex)) {
                return [coutnerpartIndex, index]
            }
        }
        return [];
    }
}
