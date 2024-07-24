let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChoice = ()  =>
{
    const options =["rock","paper","scissors"];
    const index = Math.floor(3 * Math.random());        
    return options[index];
    
};

const draw=()=>
    {
        msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor = "#081b31";  
    };

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! `;
    msg.style.backgroundColor = "green";
    console.log(Math.floor(3 * Math.random()))
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost.`;
    msg.style.backgroundColor = "red";
  }
};
    


    
    
    

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log(choice.getAttribute("id")+ " was clicked");
        playGame(userChoice);  
      });
});




const playGame = (userChoice) => {
    const compChoice = gencompChoice();
    if(userChoice===compChoice)
    {
        draw();

    }
    else
    {
        let userWin = true;

        if(userChoice==="rock")
        {
                userWin = compChoice === "paper"? false:true ;
        }
        else if(userChoice==="paper")
        {
            userWin = compChoice === "scissors"? false:true ;
        }
        else
        {
        userWin = compChoice === "rock"? false:true ;
        }
        showWinner(userWin);
    }

        }
    
    



