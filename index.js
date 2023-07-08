function translatePigLatin(word) {
 
  if (!word || word.length < 2) {
    return `The input cannot be translated.`;
  }

  let firstLetter = word[0];

  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(firstLetter)) {
    return `${word}way`;
  }

  return `${word.slice(1)}${firstLetter}ay`;
}

let input = prompt("Enter a word or phrase:");

let pigLatin = translatePigLatin(input);

console.log(pigLatin);

