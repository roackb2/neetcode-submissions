class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // Counter map pattern
        const sCountMap = {}
        const tCountMap = {}
        if (s.length !== t.length) {
            return false;
        }
        for (let i = 0; i <s.length; i++) {
            const sChar = s[i]
            const tChar = t[i]
            sCountMap[sChar] = (sCountMap[sChar] ? sCountMap[sChar] : 0) + 1
            tCountMap[tChar] = (tCountMap[tChar] ? tCountMap[tChar] : 0) + 1
        }
        for (const key in sCountMap) {
            if (sCountMap[key] !== tCountMap[key]) {
                return false;
            }
        }
        return true;
    }
}
