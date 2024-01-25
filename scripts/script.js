//Set up the game (variables, get elements, ...)
const wordlist = ["banana", "apple", "peer", "energy"];
const wordToType = document.getElementById("wordtotype");
const delay = ms => new Promise(res => setTimeout(res, ms));
let submitButton = document.getElementById("submitbutton");
let score = 0;
//function to remove event listener
const removeSubmitValue = () => {
	submitButton.removeEventListener("click", function() {
		submitEvent();
	});
}
const submitValue = () => {
	submitButton.addEventListener("click", function() {
	submitEvent();
	});
}
//Compare the word written and the word to write in order to increase the score or not. 
function submitEvent() {
	changeWords();
	let userInput = document.getElementById("userinput").value.toLowerCase();
	let currentWord = document.getElementById("wordtotype").textContent.toLowerCase();
	if(userInput === currentWord){
		score +=1;
		document.getElementById("score").innerHTML = `${score}`;
	}
	//Clear the input field after pressing Enter or clicking submit.
	document.getElementById("userinput").value = "";
}
//Simulate a click when Enter is pressed.
document.getElementById("userinput").addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		submitButton.click();
	}
});
//


const changeWords = (function () {
	let currentIndex = 0;
	return function() {
	if (currentIndex >= wordlist.length){
		removeSubmitValue();
		return
	}
	const currentWord = wordlist[currentIndex];
	wordToType.innerHTML = currentWord;
	currentIndex++;
	};
})();