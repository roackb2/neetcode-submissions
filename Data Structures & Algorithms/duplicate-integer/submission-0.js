class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {}
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            map[num] = (map[num] ?? 0) + 1
        }
        for (const val of Object.values(map)) {
            if (val > 1) {
                return true
            }
        }
        return false
    }
}
