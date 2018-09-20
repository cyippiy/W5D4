Array.prototype.myEach = function(callback){
  for (let i = 0; i < this.length; i++){
  callback(this[i]);
  }
};

// let ar = [1,2,3];

// function output(el){
//   console.log(el);
// }
//
// function addOne(el){
//   return el+1;
// }

// [1,2,3].myEach(output);
Array.prototype.myMap = function(callback){
  let arr = [];

  this.myEach(function (el){
    arr.push(callback(el));
  });
  return arr;
};
// console.log(ar.myMap(addOne));

Array.prototype.myReduce = function(callback,initialValue){
  let total = 0;
  if (Number.isInteger(initialValue)){
    total += initialValue;
  }
  this.myEach(function (el){
    total = callback(total,el);
  });
  return total;
};
// console.log(ar.myReduce(function(acc, el) {
//   return acc + el; },25));
