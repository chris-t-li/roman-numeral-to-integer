function romanNumeral(string) {
  const key = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }
  let integerResult = 0;
  // if the next character is greater than current character, integer result -= value, otherwise += value
  for (let i = 0; i < string.length; i++) {
    const isNextCharHigher = key[string.charAt(i)] < key[string.charAt(i + 1)] ? -1 : 1;
    switch (string.charAt(i)) {
      case "I": integerResult += 1 * isNextCharHigher;
        break
      case "V": integerResult += 5 * isNextCharHigher
        break
      case "X": integerResult += 10 * isNextCharHigher;
        break
      case "L": integerResult += 50 * isNextCharHigher;
        break
      case "C": integerResult += 100 * isNextCharHigher;
        break
      case "D": integerResult += 500 * isNextCharHigher;
        break
      case "M": integerResult += 1000;
        break
    }
  }
  return integerResult
}

if (require.main === module) {
  // add your own tests in here
  // console.log("Expecting: 1");
  // console.log(romanNumeral('I'));

  // console.log("");

  // console.log("Expecting: 3000");
  // console.log(romanNumeral('MMM'));

  // console.log("Expecting: 768");
  // console.log(romanNumeral('DCCLXVIII'));

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("Expecting: 49");
  console.log(romanNumeral('XLIX'))

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
