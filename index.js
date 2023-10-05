const words = require("./words.json");

function allWords(){
	console.log(words);
}

allWords();

function firstTenWords(){
	const wordHolder = [];
	for(let i = 0; i < 10; i++){
	 wordHolder.push(words[i])
	}
	const firstTenWordsList = wordHolder;
	console.log(firstTenWordsList);
	} 

	firstTenWords();

function nextTenWords(){
	const wordHolder = [];
	for( let i = 10; i < 20; i++ ){
		wordHolder.push(words[i])
	}
	const nextTenList = wordHolder;
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
	console.log(wordsWithXAndYList);
}
subsetOfWords();

function sortWords(){
	const sortedWords = [...words].sort();
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
	console.log(wordsWithQList);
}
wordsWithQ();


// function findWordsWithLetters(words){
// const matchingWords = [];

// for (let i = 0; i < words.length; i++) {
// 	const word = words[i];
// if (word.includes(letter.toLowercase())){
// 	matchingWords.push(word);
// }	
// }
// console.log(matchingWords);
// }

// findWordsWithLetters()