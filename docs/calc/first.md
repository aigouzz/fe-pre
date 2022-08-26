### 算法1-3

- 第一题：两数之和
  + 描述
    给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。   
  + 难度
    简单
  + 实例：  
  ```
  nums = [2, 7, 11, 155],target = 9
  因为nums[0] + nums[1] = 2 + 7 = 9
  return [0, 1]
  ```
  + 解决方法  
  暴力破解法：  
  ```
  function sumPlus(arr, target) {
    for(let i=0;i < arr.length;i ++) {
        let res = target - arr[i];
        for(let j = i + 1;j < arr.length;j ++) {
            if(arr[j] == res) {
                return [i, j];
            }
        }
    }
    return [];
  }
  ```
  取巧法：
  ```
  function sumPlus(arr, target) {
    for(let i=0;i < arr.length;i ++) {
        let res = target - arr[i];
        if(arr.includes(res)) {
            return [i, arr.indexOf(res)];
        }
    };
    return [];
  }
  ```

- 第二题：回文数  
  + 描述  
    判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数  
  + 实例  
    12321  true
    123431  false
    -12321  false
  + 解决方法
  ```
  function isPalintrome(num) {
    let arr = num.toString().split('');
    let arrTo = num.toString().split('').reverse();
    let res = arr.every((item, index) => {
        return item == arrTo[index];
    });
    return res;
  }
  ```
- 无重复字符的最长子串  
  + 描述  
    给定一个字符串，找出其中不含有重复字符的 最长子串 和 长度
  + 实例
    > 输入: "abcabcbb"  
    > 输出: 3  
    > 解释: 无重复字符的最长子串是 "abc"，其长度为 3。  
    > 输入: "pwwkew"  
    > 输出: 3  
    > 解释: 无重复字符的最长子串是 "wke"，其长度为 3。
      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串    
    + 解决方法  
    ```
    function findMaxSon(str) {

    }
    ```