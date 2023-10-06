const words = require("./words.json");


// prints a menu with all available options
console.log(`Enter a number from the corresponding menu:\n
1. All words\n
2. First 10 words\n
3. Next 10 words\n
4. First x words (accepts x as argument in position 3)\n
5. Subset of words (accepts x and y as arguments in position 3 and 4 respectively)\n
6. Sort words\n
7. Find words with q\n
8. Find words with letter (accepts letter as argument in position 5)\n
`);


// The function that runs the other functions
function funRunner() {
  let args = process.argv;
  let choice = args[2];
  let x = args[3];
  let y = args[4];
  let letter = args[5];
  
  if (choice === '8'){
    letter = args[3];
  }

  switch (choice) {
    case "1":
      allWords();
      break;
    case "2":
      firstTenWords();
      break;
    case "3":
      nextTenWords();
      break;
    case "4":
      firstXWords(x);
      break;
    case "5":
      subsetOfWords(x, y);
      break;
    case "6":
      sortWords();
      break;
    case "7":
      findWordsWithQ();
      break;
    case "8":
      findWordsWithLetter(letter);
      break;
    default:
      console.log("Invalid choice, try again.");
  }
}

funRunner();

//prints all words
function allWords() {
  console.log(words);
  // return data;
}

//prints first 10 words
function firstTenWords() {
  console.log(words.slice(0, 10));
}

//prints next 10 words
function nextTenWords() {
  console.log(words.slice(10, 20));
}

//prints first x words
function firstXWords(x) {
  console.log(words.slice(0, x));
}

//prints words between x and y
function subsetOfWords(x, y) {
  console.log(words.slice(x, y));
}

//prints words sorted alphabetically
function sortWords() {
  console.log(words.sort());
}

/////////////////////////////////////////////

//returns words that contain the letter "q"
function findWordsWithQ() {
  const qWords = [];

  for (const word of words) {
    if (word.includes("q")) {
      qWords.push(word);
    }
  }
  console.log(qWords);
}

function findWordsWithLetter(letter) {
  const wordsWithLetter = [];
  let incr = 0;
  do {
    for (const word of words) {
      if (word.includes(letter)) {
        wordsWithLetter.push(word);
      }
    }
    incr++;
  } while (incr < 10);
  console.log(wordsWithLetter);
}

