const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitBtn").onclick = function()
{
    let guess = document.getElementById("guessField").value;
    guesses += 1;

    if(guess == answer)
    {
        alert(guess + " is correct!" + "it took you ", guesses, "times to guess.");
    }
    else if(guess < answer)
    {
        alert('Too small');
    }
    else
    {
        alert("Too large");
    }

     
} 