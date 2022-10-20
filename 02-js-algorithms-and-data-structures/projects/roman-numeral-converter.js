function convertToRoman(num) {
  const keys = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];

  const output = [];

  keys.forEach(([roman, arabic]) => {
    while (num - arabic >= 0) {
      num -= arabic;
      output.push(roman);
    }
  });

  return output.join('');
}

convertToRoman(36);
