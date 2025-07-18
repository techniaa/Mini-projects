let randomNumber=parseInt(Math.random()*100);

const submit= document.querySelector('#subt');
 const userInput= document.querySelector('#guessfield');
  const guessSlot= document.querySelector('.guesses');
  const remaining=document.querySelector('.lastResult')
  const lowOrHi=document.querySelector('.lowOrHi')
 const startOver= document.querySelector('.resultParas')
 const p= document.createElement('p')

 let prevGuesses=[]
 let numGuess=1;
 let playGame=true;
 if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess= parseInt(userInput.value)
       console.log(guess)
       validateGuess(guess)
    })
 }


 function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number")

    }else if(guess<1){
         alert("please enter a valid number")

    }else if(guess>100){
        alert("please enter a valid number")
    }else{
        prevGuesses.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game over and random number was ${randomNumber}` )
             endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

 }

 function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage("You guessed it right🎉")
        endGame();
    }else if(guess<randomNumber){
        displayMessage("Number is too low📉")
    }else if(guess>randomNumber){
        displayMessage("Number is too high📈")
    }

 }

 function displayGuess(guess){
    userInput.value=" ";
    guessSlot.innerHTML+=`${guess},  `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`

 }

 function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`

 }

 function endGame(){
    userInput.value=" ";
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame()
 }

 function newGame(){
     const newGameButton=document.querySelector('#newGame');
     newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100);
        prevGuesses=[];
        numGuess=1;
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        
        playGame=true;

     })

 }

