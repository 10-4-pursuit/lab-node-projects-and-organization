const words = require("./words.json");
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout

});

function allWords(){
	console.log("All of The Words");
	console.log(words);
}

allWords();

function firstTenWords(){
	const wordHolder = [];
	for(let i = 0; i < 10; i++){
	 wordHolder.push(words[i])
	}
	const firstTenWordsList = wordHolder;
	console.log("First Ten Words");
	console.log(firstTenWordsList);
	} 

	firstTenWords();

function nextTenWords(){
	const wordHolder = [];
	for( let i = 10; i < 20; i++ ){
		wordHolder.push(words[i])
	}
	const nextTenList = wordHolder;
	console.log('Next Ten Words');
	console.log(nextTenList);
}
nextTenWords();

function firstXWords(){
const wordsWithXList = [];

	for(let i = 0; i < words.length; i++){
	const word = words[i];
	if (word.includes('x')) {
		wordsWithXList.push(word);
	}	
	}
	console.log("All Words With X in it");
console.log(wordsWithXList);
}

firstXWords();


function subsetOfWords(){
	const wordsWithXAndYList = [];

	for (let i = 0; i< words.length; i++){
		const word = words[i];
		if (word.includes('x')&& word.includes('y')){
			wordsWithXAndYList.push(word)
		}
	}
	console.log("All Words With X and Y in it ")
	console.log(wordsWithXAndYList);
}
subsetOfWords();

function sortWords(){
	const sortedWords = [...words].sort();
	console.log("All Words in Alphabet Order");
	console.log(sortedWords);
}

sortWords();

function wordsWithQ(){
	const wordsWithQList = [];

	for(let i = 0; i < words.length; i++){
	const word = words[i];
	if(word.includes('q')){
		wordsWithQList.push(word)
	}
	}
	console.log("All Words With Q in it");
	console.log(wordsWithQList);
}
wordsWithQ();


function findWordsWithLetters(words, letter) {
	const matchingWords = [];
	const wordsWithTwoOrMore = [];
	const wordsWithoutLetter = [];
  
	for (let i = 0; i < words.length; i++) {
	  const word = words[i];
	  if (word.includes(letter.toLowerCase())) {
		matchingWords.push(word);
	  }
	  const letterCount = word.split('').filter((char) => char === letter.toLowerCase()).length;
	  if (letterCount >= 2) {
		wordsWithTwoOrMore.push(word);
	  }
	  if (!word.includes(letter.toLowerCase())) {
		wordsWithoutLetter.push(word);
	  }
	}
  
	if (matchingWords.length > 0) {
	  console.log(`Words with the letter '${letter}':`);
	   console.log(matchingWords);
	  console.log(`Words with two or more '${letter}' letters:`);
	  console.log(wordsWithTwoOrMore);
	} else {
	  console.log(`No words found with matching letter '${letter}'.`);
	}
	if (wordsWithoutLetter.length > 0) {
		console.log(`Words without the letter '${letter}':`);
		console.log(wordsWithoutLetter);
	  }
  }
  
  rl.question('Enter a letter: ', (letter) => {
	const inputLetter = letter.toLowerCase();
	findWordsWithLetters(words, inputLetter);
	rl.close();
  });
  
// function lettersMatch(letters){
// 	const matchingWords = [];

// 	for(const word of words) {
// 	let wordMatches = true;

// 		for(const letter of letters){
// 		  if (!word.includes(letter)) {
// 			wordMatches = false;
// 			break;
// 			  }
// 			} 
// 		if (wordMatches) {
// 			matchingWords.push(word);
// 		}
// 	}
// 	return matchingWords;
// }
// function lettersExactMatch(word, pattern) {
// 	if (word.length !== 5 || pattern.length !== 5) {
// 	  console.log('Please enter a five-character word and pattern.');
// 	  return;
// 	}

// 	let result = '';
// 	for (let i = 0; i < 5; i++) {
// 	  if (pattern[i] === '_') {
// 		result += '.';
// 	  } else if (pattern[i] === word[i]) {
// 		result += word[i];
// 	  } else {
// 		result += '_';
// 	  }
// 	}

// 	console.log(result);
// }
// function lettersCombinedMatch(word, wrongPositionPattern, correctPositionPattern) {
// 	if (word.length !== 5 || wrongPositionPattern.length !== 5 || correctPositionPattern.length !== 5) {
// 	  console.log('Please enter five-character inputs.');
// 	  return;
// 	}
  
// 	let result = '';
// 	for (let i = 0; i < 5; i++) {
// 	  if (correctPositionPattern[i] === word[i]) {
// 		result += word[i];
// 	  } else if (wrongPositionPattern[i] === '_') {
// 		if (word.includes(correctPositionPattern[i])) {
// 		  result += '.';
// 		} else {
// 		  result += '_';
// 		}
// 	  } else if (wrongPositionPattern[i] === word[i]) {
// 		result += word[i];
// 	  } else {
// 		result += '_';
// 	  }
// 	}
  
// 	console.log(result);
//   }
//   rl.question('Enter a word or letters for matching: ', (input) => {
// 	const inputLetters = input.toLowerCase().split('');
  
// 	if (inputLetters.length > 5) {
// 	  console.log('Please enter up to 5 letters.');
// 	  rl.close();
// 	  return;
// 	}
  
// 	const matchingWords = lettersMatch(inputLetters);
  
// 	if (matchingWords.length === 0) {
// 	  console.log('No words found containing these letters');
// 	} else {
// 	  console.log(`Words containing these letters: ${matchingWords.join(', ')}`);
// 	}
  
// 	rl.question('Enter a word for exact matching: ', (word) => {
// 	  rl.question('Enter an exact matching pattern: ', (pattern) => {
// 		lettersExactMatch(word, pattern);
  
// 		rl.question('Enter a word for combined matching: ', (wordCombined) => {
// 		  rl.question('Enter a wrong position pattern: ', (wrongPositionPattern) => {
// 			rl.question('Enter a correct position pattern: ', (correctPositionPattern) => {
// 			  lettersCombinedMatch(wordCombined, wrongPositionPattern, correctPositionPattern);
// 			  rl.close();
// 			});
// 		  });
// 		});
// 	  });
// 	});
//   });