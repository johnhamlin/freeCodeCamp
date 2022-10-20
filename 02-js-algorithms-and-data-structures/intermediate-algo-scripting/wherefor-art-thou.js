'use strict';

function whatIsInAName(collection, source) {
  // filter through each object in collection
  return collection.filter(obj =>
    // testing for every key in source
    Object.keys(source).every(
      // verifying that obj has every key and the corresponding value as source
      key => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
}

// tests
console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' },
    ],
    { last: 'Capulet' }
  )
);

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);
