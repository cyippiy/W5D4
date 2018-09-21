function range(start,end){
  if (end === start) {
    return [];
  }

  let r = range(start, end-1);
  r.push(end-1);
  return r;
}

// console.log(range(1,5));

function sumRec(arr) {
  let total = 0;

  if (arr.length === 0) {
    return 0;
  }

  total += arr[0] + sumRec(arr.slice(1));
  return total;
}

// console.log(sumRec([3,3,3]));

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * exponent(base, exp-1);
  }
}

// console.log(exponent(3, 3));

function fibonacci(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2)  {
    return [1,1];
  } else {
    let a = fibonacci(n-1);
    let b = fibonacci(n-2);
    return fibonacci(n-1).concat([fibonacci(n-1)[a.length-1] + fibonacci(n-2)[b.length-1]]);
  }

}

// console.log(fibonacci(5));

// [1,1,2,3,5.....]

function deepDup(arr) {
  let results = [];
  for (var i = 0; i < arr.length; i++) {
    if (Object.prototype.toString.call(arr[i]) === "[object Array]" ) {
      results.push(deepDup(arr[i]));
    }else {
      results.push(arr[i]);
    }
  }
  return results;
}

function bsearch(arr,target) {
  if (arr.length < 1) {
    return -1;
  }
  let mid = Math.round(arr.length/2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid);

  if (arr[mid] === target) {
    return mid;
  }else if (arr[mid] > target) {
    return bsearch(left,target);
  }
  else{
    return bsearch(right,target) + mid;
  }
}

// console.log(deepDup([1,2,[3,4],5]));
// console.log(bsearch([1,2,3,4,5,6],1));
//
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let mid = Math.round(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left,right);
}

function merge(left,right){
  let results = [];
  while (left.length !== 0 && right.length !== 0){
    if (left[0] < right[0]) {
      results.push(left.shift());
    }
    else{
      results.push(right.shift());
    }
  }
  return results.concat(left.concat(right));
}
// console.log(mergeSort([4,2,3,5,1]));

function subsets(arr) {
  debugger;
  if (arr.length === 0) {
    return arr;
  }
  let a = subsets(arr.slice(1)).forEach(function(el){
    el.push(arr[0]);
  });
  
  return a.concat(subsets(arr.slice(1)));
}
console.log(subsets([1,2,3]));
