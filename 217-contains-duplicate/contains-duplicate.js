/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let arr = Array.from(new Set(nums));
    return arr.length !== nums.length


    let isDuplicate = false;
    nums.sort();
    nums.forEach((num, index) => {
        if (num === nums[index+1]) {
            isDuplicate = true;
        }
    })
    return isDuplicate;
};