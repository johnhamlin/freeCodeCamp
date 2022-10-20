function telephoneCheck(str) {
  let digits = str.replace(/\D/g, '');
  
  // ensure no more than 11 digits
  if (digits.length > 11) return false;
  // check country code, if present (check str for 1, not digits, to catch -1)
  if (digits.length > 10 && str.at(0) !== '1') return false;
  // check for garbage on the ends
  if (/\D$/.test(str)) return false;
  // check for parentheses
  if (/\(|\)/.test(str)) return /\(\d{3}\) ?\d{3}[-| ]?\d{4}/.test(str);



  return /1? ?\d{3}[-| ]?\d{3}[-| ]?\d{4}/.test(str);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
// console.log(telephoneCheck("(6054756961)")); // should return false.
// console.log(telephoneCheck("2 (757) 622-7382")); //  should return false.
// console.log(telephoneCheck("0 (757) 622-7382")); //  should return false.
// console.log(telephoneCheck("-1 (757) 622-7382")); //   should return false.
// console.log(telephoneCheck("2 757 622-7382")); //   should return false.
// console.log(telephoneCheck("10 (757) 622-7382")); //   should return false.
// console.log(telephoneCheck("27576227382")); //   should return false.
// console.log(telephoneCheck("(275)76227382")); //   should return false.
// console.log(telephoneCheck("2(757)6227382")); //   should return false.
// console.log(telephoneCheck("2(757)622-7382")); //   should return false.