'use strict';

function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;

  // // V1
  // while (arr.find(Array.isArray)) {
  //   arr = arr.reduce((acc, array) => {
  //     if (Array.isArray(array)) {
  //       return [...acc, ...array];
  //     }
  //     return [...acc,  array];
  //   }, []
  //   );
  // }
  // return arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
