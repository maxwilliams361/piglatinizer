
let fullSentence=[];
$("button").click(function(){
   let message=$(".inputone").val();
   let messageMinusFirst=message.slice(1);
   let firstLetter=message.charAt(0);
    $(".translation").text(`${messageMinusFirst}${firstLetter}ay`);
    $(".inputone").val(" ");
    fullSentence.push(message)
});


// Takes a word as a parameter and returns a transfromed word.
function wordToPigLatin(word) {

}


// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance









// Create the clearOutput function that clears the output div




