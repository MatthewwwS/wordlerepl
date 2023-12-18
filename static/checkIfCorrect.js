document.getElementById("checkButton").addEventListener("click", function ()
{
  let hiddenString = "hello";
  let guessedLetter = document.getElementById("guessedLetter").value;
  if (guessedLetter === hiddenString) {
    document.getElementById("result").innerText = "The guessed letter is equal to the hidden string!";
    document.getElementById("checkButton").style.color = "green";
  } else {
    document.getElementById("result").innerText = "The guessed letter is not equal to the hidden string.";
    document.getElementById("checkButton").style.color = "red";
  }
} , false);