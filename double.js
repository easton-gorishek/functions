function double(number) {
  return number * 2;
}

function doubleArray(arr) {
  let result = arr;
  for(let i = 0; i < arr.length; i++) {
    const num = arr[i];
    arr[i] = double(num);
  }
  return result;

  // map function
  // arr.map(n => double(n));

  // map shortcut 
  // arr.map(double);
}

module.exports = { 
  double,
  doubleArray
};
