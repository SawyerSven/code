let nums = [5, 7, 11, 15];

let target = 10;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   let diff = null;
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     diff = target - nums[i];
//     if (nums.indexOf(diff) > -1 && nums.indexOf(diff) !== i) {
//       result.push(i);
//       result.push(nums.indexOf(diff));
//       break;
//     }
//   }
//   if (result.length) {
//     return result;
//   }
// };

var twoSum = function(nums, target) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hashMap[diff] !== undefined) {
      return [i, hashMap[diff]];
    } else {
      hashMap[nums[i]] = i;
    }
  }
};

console.log(twoSum(nums, target));
