function numberManipulator(n, callback) {
  return callback(n);
}

function repeater(n, callback) {
  for(let i = 0; i < n; i ++) {
    callback();
  }
}

function map(arr, callback) {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    const num = arr[i];
    result.push(callback(num));
  }
  return result;
}

module.exports = {
  repeater,
  numberManipulator,
  map
};
