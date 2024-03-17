/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    nums.forEach((num, index) => {
        obj[num] = index
    })
    let arr =[];

    for (let i =0; i < nums.length; i++) {
        if (obj.hasOwnProperty(target - nums[i]) && i !== obj[target - nums[i]]) {
            arr.push(i);
            arr.push(obj[target - nums[i]]);
            break;
        }
    }
    return arr;
};