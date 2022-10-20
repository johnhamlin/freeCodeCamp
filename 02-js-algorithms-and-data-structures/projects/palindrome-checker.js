function palindrome(str) {
  // strip out all non-alphanumeric characters, including _, and convert to lowercase
  str = str.replaceAll(/\W|[_]/g, '').toLowerCase();

  // V2... recursive
  function recurse(str, isPal = true) {
    if (str.length === 0) return isPal;
    if (str.at(0) !== str.at(-1)) isPal = false;
    return recurse(str.slice(1, -1), isPal);
  }

  return recurse(str);

  // V1...
  // // adjust the middle of the string depending on if it's odd or even. The middle character of an odd length string can be ignored because it always equals itself.
  // let middleAdjuster = 0;
  // if (str.length % 2) middleAdjuster = 1;

  // // split the string into two equal halves and reverse the second half
  // const [front, back] = [
  //   str.slice(0, str.length / 2).split(''),
  //   str.slice(str.length / 2 + middleAdjuster).split('').reverse()
  //   ];

  // return front.every((ltr, index) => ltr === back[index]);
}

palindrome('eye');
palindrome('_eye'); // should return true.
// palindrome("race car") // should return true.
// console.log(palindrome("not a palindrome")) //should return false.
// palindrome("A man, a plan, a canal. Panama") //should return true.
// palindrome("never odd or even") //should return true.
// palindrome("nope") //should return false.
// palindrome("almostomla") //should return false.
// palindrome("My age is 0, 0 si ega ym.") //should return true.
// palindrome("1 eye for of 1 eye.") //should return false.
// palindrome("0_0 (: /-\ :) 0-0") //should return true.
// palindrome("five|\_/|four") // should return false.
