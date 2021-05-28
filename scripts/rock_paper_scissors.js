// Rock paper scissors game


// returns int <= max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


// returns cpu pick as lowercase string
function cpuPick(){
    switch (getRandomInt(3)){
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}


function playerPick() {
    do{
        input = prompt("Enter a selection of rock paper or scissors:","").toLowerCase();
    } while (["rock","paper","scissors"].indexOf(input) < 0);
    
    return input;
}



function playRound(player, cpu){
    console.log("The computer selected "+cpu);
    switch (cpu){
        case "rock":
            switch(player){
                case ("rock"):
                    console.log("It's a tie! Try again");
                    return[0,0];
                case ("paper"):
                    console.log("paper covers rock! You win this round!");
                    return [1,0];
                case ("scissors"):
                    console.log("scissors get annihilated by rock! You lose this round...")
                    return [0,1];
            }
        case "paper":
            switch(player){
                case ("rock"):
                    console.log("paper covers rock! You lose this round...");
                    return[0,1];
                case ("paper"):
                    console.log("It's a tie! Try again");
                    return[0,0];
                case ("scissors"):
                    console.log("scissors cuts paper! You win this round!");
                    return [1,0];
            }
        case "scissors":
            switch(player){
                case ("rock"):
                    console.log("scissors get annihilated by rock! You win this round!");
                    return [1,0];
                case ("paper"):
                    console.log("scissors cuts paper. You lose this round!");
                    return [0,1];
                case ("scissors"):
                    console.log("It's a tie! Try again");
                    return[0,0];
                    
            }
    }
}


function game() {
    console.log("Let's begin.");
    console.log("Best of 5 wins!\n\n");

    // player, cpu
    let score = [0,0];
    let thisRound = [0,0];

    while (score[0] < 3 && score[1] < 3) {
        thisRound = playRound(playerPick(), cpuPick());
        score[0] += thisRound[0];
        score[1] += thisRound[1];
        console.log("the current scoreboard: You have " + score[0] +" and the cpu has "+ score[1]+ "\n\n\n");
    }
 
    if (score[0] == 3){
        console.log("\n\nYou win the game!");
    }
    else {
        console.log("\n\nNice try! the cpu wins this game.")
    }
    return score;
}



