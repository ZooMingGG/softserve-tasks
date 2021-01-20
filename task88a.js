const includes = num => {
  return `${num ** 2}`.includes('3');
};

console.log(includes(7));
console.log(includes(6));
