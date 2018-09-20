Array.prototype.uniq = function() {
  let array = [];
  this.forEach(function(el) {
    if (!array.includes(el)) { array.push(el); }
  });
  return array;
};

Array.prototype.twoSum = function() {
  let array = [];
  for (let i = 0; i < this.length-1; i++) {
    for (let j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        array.push([i, j]);
      }
    }
  }
  return array;
};

Array.prototype.transpose = function() {
  let array = [];

  for (let i = 0; i < this[0].length; i++){
    let sub_array = [];
    for (let j = 0; j < this.length; j++){
      sub_array.push(this[j][i]);
    }
    array.push(sub_array);
  }
  return array;
};
// a = [[1,2,3,4],[5,6,7,8]].transpose();
// console.log(a);
