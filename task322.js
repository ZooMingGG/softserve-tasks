const findNum = () => {
  let currentSum = 0;
  let maxSum = 0;
  let num = 0;

  for (let i = 1; i <= 10000; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        currentSum += j;
      }
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      num = i;
    }

    currentSum = 0;
  }

  return num;
};

console.log(findNum());
