Array.prototype.bubblesort = function () {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length; i++) {
      if (this[i] > this[i+1]) {
        [this[i], this[i+1]] = [this[i+1], this[i]];
        sorted = false;
      }
    }
  }

  return this;
};

// console.log([4,3,1,5,7,9,2].bubblesort());

String.prototype.substrings = function() {
  let substr = [];
  let temp = " ";
  for (var i = 0; i < this.length; i++) {
    for (var j = i+1; j <= this.length; j++) {
      temp = this.substring(i,j);
      if (!substr.includes(temp)){
        substr.push(temp);
      }
    }
  }
  return substr;
};

// console.log("abc".substrings());
