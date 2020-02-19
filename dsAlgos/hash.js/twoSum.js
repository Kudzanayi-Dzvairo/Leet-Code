var twoSum = function(nums, target) {
	let hash = {};
	
	for(let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if(hash[target - n] !== undefined) {
			return [hash[target - n], i];
		}
		hash[n] = i;
	}
	return [];
}

const twoSum = (nums, target) => {
    const m = new Map();
    for (const [i, v] of nums.entries()) {
      const k = target - v;
      if (m.has(k)) {
        return [m.get(k), i];
      }
      m.set(v, i);
    }
  };