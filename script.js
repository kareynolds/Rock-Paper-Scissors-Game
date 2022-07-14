

// step 1:
//  create an array that contains our string selections - rock paper scissors
//  create the function to start the game() 
//  create functions to track the player selection and computer selection
//  create a function called playRound(). This will contain info from playerselection function and computer selection
//  by storing and creating new variables for them, then assigning them to that same function value. 

//step 2:
//  fill out the code for the playerSelection. assign a new variable input to prompt the player for one of the 3 decissions
//  create the while loops to check if the input is null. lowercase the input from the player.
//  fill out the code for the computerselection. math.floor(math.random). multiply it by the array length
//  create the validateInput function with one arugment. 
//  this hsould check if the choices .include(argument) The argument just needs to have the same name as the one in the function. 
//  if true it should return true else false. 
//  create a new variable called check in the playerChoice function. assign its value to the validate input function. 
//  create a new while loop within this same function. this while loop should check to see if the newly created variable
//  is false. if false it should prompt the user for input yet again. 
//  create the earlier created while loop checking to see if input is null within the above created whiel loop, nested. 
//  lowercase the input, and see if check = validateInput(input) 

//step 3:
//  create three new functions, checkWinner, trackWins & logRound. 
//  within checkWinner, pass 2 arguements to the fucntion. player and computer. you'll first check to see if 
//  they are equal to one another. this is a tie and should return that verbiage in a string. else if and create your or statements
//  remember that the or statements can be nested within this else if ( (condition) || (condition)) {return "string"} else return computer
//  create a new variable in the playRound fucntion. Assign its value to the checkWinner function and pass the playerselection
//  and computer selection into this new variable function assignment as arugmenets. 
//  create a new array called gamewinner. push winner into the gameWinner array. 
//  within trackWins create 3 new let variables. playerwon, computerwon, tie. assign them each to the gameWinner array through
//  the .filter((item) => item == "String must match checkWinner function Strings").length 
//  console.log out some verbiage to track who won, or if tie. Pass in the newly craeted varaibles within the consolelogs.
//  pass the trackWins function to the end of the game() function. 
//  within the logRound function create 4 arguements - playerchoice ocmputerchoice, winner, round
//  console.log out each item with some verbiage as to who won. use the -  - - to differentiate. 
//  pass this into the playRound function with the same 4 arguements.
//  within the game() funciton create a for loop to loop the game 5 times. 

const choices = ["rock", "paper", "scissors"];
const gameWinner = [];



//create a blank array called gameWinner. This will store the data from the winner.


//create a function called game()
//loop through the array to play the game 5 times. call the play round function and pass in i as an argument to 
//keep track of the round. within the game function but outside of the loop call trackwins function
function game() {
    for (i = 0; i < 5; i++) {
        playRound(i);
    }
    trackWins();   
}


//create a function called playround. Pass in an argument named round
// set a constant for players select and assign it to the value of the playerchoice function
//set a constant for computer selection and assign it to the value of computerChoice function
//push the results of winner into the gameWinner array
//call the logRound function at the end. pass in 4 arguments, player selection computer selection, winner and round
function playRound(round) {
    const playerChoice = playerSelection();
    const computerChoice = computerSelection();
    const winner = checkWinner(playerChoice, computerChoice);
    gameWinner.push(winner);
    logRound(playerChoice, computerChoice, winner, round);

}



//create function called playerchoice. it should grab the value of the input prompt and ask the player to type something
//create a while loop that checks if the input from the player is null. if null it should prompt them again
//outside of the while loop lowercase all the text from the input
//assign a variable check to equal the validateinput function, pass in an argument - input
//create a while loop to see if the check variable is false. if so it should propmt the user to type the name correctly
//within this while loop set another while loop that also checks if the user input is null and prompts them again
//outside of the nested while loop set the input to lower case
//finally set the check variable to equal the validateinput function, with the argument of input.
//return input to clear the function
function playerSelection() {
    let input = prompt("Type Rock, Paper or Scissors");

    while (input == null) {
        input = prompt("ype Rock, Paper Or Scissors - spelling matters capitalization does not.");
    }

    input = input.toLocaleLowerCase();
    let check = validateInput(input);
    

        while (check == false) {
            input = prompt("Type Rock, Paper Or Scissors - spelling matters capitalization does not.")

            while (input === null) {
                input = prompt("Type Rock, Paper Or Scissors - spelling matters capitalization does not.")

        }
        input = input.toLocaleLowerCase();
        check = validateInput(input);
    }
    return input;
   
}




//create a function called computer choice. it should get a random number equivalent to the length of our choices array
function computerSelection() {
    return choices[Math.floor(Math.random()*choices.length)];
}



//create a funciton that checks whether the user's choices is one of the three choices - validation. 
//the function should take one argument, choice. 
//within the function make an if else statement. check if choices.includes(choice) is true, else return false. 
function validateInput(choice) {
    if (choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}



//write a function that takes two arguments. the function should compare them check for a tie,with an if statement
//then if no tie check to see if the player one. if so the function should exit and return that. else the computer won.
//this can be accomplsiehd by making multiple if ( (conditions) || (conditions) ) { return }
//if the player wins it should return player, else computer. 
function checkWinner (player, computer) {
    if (player === computer) {
        return "Tie"
    } else if 
        ( 
            player === "rock" && computer === "scissors" ||
            player === "scissors" && computer === "paper" ||
            player === "paper" && computer === "rock"

        ) {
            return "Player"

    } else {
        return "Computer"
    }

}


// write a trackWins function that will log the winner. utilize the filter((item =>)) method. 
//syntax is let variable = our game winner array.filter((item) => item == "player/computer/tie").length
// create 3 of these to check if the player or computer won or if it was a tie.
//console . log out the results, wins ties etc. Pass in the newly created variables to log the numbers
function trackWins() {
    let playerWon = gameWinner.filter((item) => item == "Player").length;
    let computerWon = gameWinner.filter((item) => item = "Computer").length;
    let tie = gameWinner.filter((item) => item == "Tie").length;
    console.log("Results : ");
    console.log("Times Player Won: ", playerWon);
    console.log("Times Computer Won: ", computerWon);
    console.log("Number of Ties: ", tie);
}


//log the round. takes 4 arguements, player, computer and winner and round. start by logging out each with some text . 
//log out the round number as well. \
//pass this function up to the playRound function and pass in the arguements.
function logRound(player, computer, winner, round) {
    console.log("Round: ", round + 1);
    console.log("Player Chose: ", player);
    console.log("Computer chose: ", computer);
    console.log("Winner is: ", winner);
    console.log("----------------------------------");
}