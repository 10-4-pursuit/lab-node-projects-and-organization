const words = require("./words.json");

function allWords() {
  console.log(words);
}

allWords();

function firstTenWords() {
  const wordHolder = [];
  for (let i = 0; i < 10; i++) {
    wordHolder.push(words[i]);
  }
  console.log(wordHolder);
}

firstTenWords();

function nextTenWords() {
  const nextTenWordHolder = [];
  for (let i = 10; i <= 19; i++) {
    nextTenWordHolder.push(words[i]);
  }
  console.log(nextTenWordHolder);
}

nextTenWords();

function firstXWords(x) {
  console.log(words.slice(0, x));
}

firstXWords(13);

function subsetOfWords(x, y) {
  console.log(words.slice(x, y));
}

subsetOfWords(0, 100);

function sortWords() {
  console.log(words.sort());
}

sortWords();

function wordsWithQ() {
  let specificWords = [];
  for (const word of words) {
    if (word.includes("q")) {
      specificWords.push(word);
    }
  }
  console.log(specificWords);
}

wordsWithQ();

console.log(process.argv);

const letter = process.argv[2];

const halvedWords = words.slice(0, 5);

function findWordsWithLetter() {
  let specificLetter = [];

  for (const word of halvedWords) {
    if (word.includes(letter)) {
      specificLetter.push(word);
    }
  }
  console.log(specificLetter);
}

findWordsWithLetter();

function lettersMatch(guess) {
  if (guess.length !== 5) {
    return `please enter 5 letter word`;
  }
  const filteredWords = words.filter((word) => {
    for (let letter of guess) {
      if (word.includes(letter)) {
        return true;
      }
    }
    return false;
  });
  return filteredWords;
}

console.log(lettersMatch(`lodge`));

function letttersExactMatch(guess, target) {
  if (guess.length !== 5) {
    return `please enter 5 letter word`;
  }
  const aStack = [];
  for (let i = 0; i < guess.length; i++) {
    if (target[i] !== guess[i]) {
      aStack.push(`_`);
    } else {
      aStack.push(target[i]);
    }
  }
  return aStack;
}

console.log(letttersExactMatch(`acorn`, `adorn`));
