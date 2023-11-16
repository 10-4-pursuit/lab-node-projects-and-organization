const words = require("./words.json");


//Display the menu options for the user to choose from
function displayMenu() {
  console.log(`Enter a number from the corresponding menu:\n
  1. All words\n
  2. First 10 words\n
  3. Next 10 words\n
  4. First x words (accepts x as argument in position 3)\n
  5. Subset of words (accepts x and y as arguments in position 3 and 4 respectively)\n
  6. Sort words\n
  7. Find words with q\n
  8. Find words with letter (accepts letter as argument in position 3)\n
  9. Find words with entered letters (accepts letters as argument in position 3, up to 5 letters)\n
  `);
}

// function that runs the other functions based on command-line args
function funRunner() {
  let args = process.argv;
  let choice = args[2];
  let x = args[3];
  let y = args[4];
  let letter = args[5];
  let letters = args[6];

  if (choice === "8") {
    letter = args[3];
  }
  if (choice === "9") {
    letters = args[3];
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
    case "9":
      lettersMatch(letters);
      break;
    // case '10':
    //   lettersExactMatch(letter);
    default:
      console.log("Invalid choice, try again.\n");
  }
}

// Check if a valid choice is not provided in command-line arguments and display the menu
if (process.argv.length <= 2) {
  displayMenu();
} else {
  // If a valid choice is provided, run the function directly
  funRunner();
}

//prints all words
function allWords() {
  console.log(words);
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
  let i = 0;
    for (const word of words) {
      if (word.includes(letter)) {
        wordsWithLetter.push(word);
      }
    }
  console.log(wordsWithLetter);
}

function lettersMatch(letters) {
  if (letters === 0 || letters > 5) {
    console.log("Invalid number of letters");
  } else {
    console.log(words.filter(word => word.includes(letters)));
  }
}

function lettersExactMatch(guess) {
  if (guess.length !== 5 || guess.length === 0) {
    console.log("Invalid guess, try again.");
  }
  let
  const matchedWords = words.filter(word => {
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] !== word[i] && guess[i] !== "." && guess[i] !== "_") {
        return false;
      }
    }

    return true;
  });
  console.log(matchedWords);
}
