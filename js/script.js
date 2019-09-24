// Pig Latin takes the first consonant (or consonant cluster) of an English
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.

$("button").click(function(){
    let message=$(".inputone").val();
    let message2="ay"
    let message3= message + message2;
    $(".translation").text(message3);
    $(".inputone").val(" ");
});


// Takes a word as a parameter and returns a transfromed word.
function wordToPigLatin(word) {

}


// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance









// Create the clearOutput function that clears the output div




