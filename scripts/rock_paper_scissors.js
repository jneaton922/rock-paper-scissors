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

function playRound(player, cpu){
    alert_message = 'Your selection: '+player;
    alert_message += "\nCPU selection: "+cpu+"\n\n";
    switch (cpu){
        case "rock":
            switch(player){
                case ("rock"):
                    alert_message+="It's a tie! Try again";
                    // alert(alert_message);
                    return[alert_message,0,0];
                case ("paper"):
                    alert_message+="paper covers rock! You win this round!";
                    // alert(alert_message);
                    return [alert_message,1,0];
                case ("scissors"):
                    alert_message+="scissors get annihilated by rock! You lose this round...";
                    // alert(alert_message);
                    return [alert_message,0,1];
            }
        case "paper":
            switch(player){
                case ("rock"):
                    alert_message+="paper covers rock! You lose this round...";
                    // alert(alert_message);
                    return[alert_message,0,1];
                case ("paper"):
                    alert_message+="It's a tie! Try again";
                    // alert(alert_message);
                    return[alert_message,0,0];
                case ("scissors"):
                    alert_message+="scissors cuts paper! You win this round!";
                    // alert(alert_message);
                    return [alert_message,1,0];
            }
        case "scissors":
            switch(player){
                case ("rock"):
                    alert_message+="scissors get annihilated by rock! You win this round!"
                    // alert(alert_message);
                    return [alert_message,1,0];
                case ("paper"):
                    alert_message+="scissors cuts paper. You lose this round!";
                    // alert(alert_message);
                    return [alert_message,0,1];
                case ("scissors"):
                    alert_message+="It's a tie! Try again";
                    // alert(alert_message);
                    return[alert_message,0,0];
                    
            }
    }
}

const paperButton = document.querySelector('button#paper')
const scissorsButton = document.querySelector('button#scissors')
const rockButton = document.querySelector('button#rock')
const resetButton = document.querySelector('button#reset');

resetButton.addEventListener('click', function(){
    const text = document.querySelector('.container p');
    text.textContent = ''

    const playerscore = document.querySelector('#playerscore');
    const cpuscore = document.querySelector('#cpuscore');

    playerscore.textContent = "Player: 0";
    cpuscore.textContent = "CPU: 0";

    document.querySelector('#rock').setAttribute('style','display: inline;')
    document.querySelector('#paper').setAttribute('style','display: inline;')
    document.querySelector('#scissors').setAttribute('style','display: inline;')
    document.querySelector('#reset').setAttribute('style','display: none;')
    

})

paperButton.addEventListener('click', function(){
    updateDisplay(playRound('paper',cpuPick()));
});

rockButton.addEventListener('click', function (){
    updateDisplay(playRound('rock',cpuPick()));
});

scissorsButton.addEventListener('click', function () {
    updateDisplay(playRound('scissors',cpuPick()));
});


function updateDisplay(arr){
    let message=arr[0];

    const text = document.querySelector('.container p');
    text.textContent = message

    const playerscore = document.querySelector('#playerscore');
    const cpuscore = document.querySelector('#cpuscore');

    let player_currscore = parseInt(playerscore.textContent.split(' ')[1]);
    console.log(player_currscore)
    playerscore.value = player_currscore + arr[1];
    playerscore.textContent = "Player: "+playerscore.value;

    let cpu_currscore = parseInt(cpuscore.textContent.split(' ')[1]);
    cpuscore.value = cpu_currscore + arr[2];
    cpuscore.textContent = "CPU: "+cpuscore.value;

    if (playerscore.value >=5){
        text.textContent += "\n\nThe player has won 5 rounds! Game over!";
        reset();
    }
    if(cpuscore.value >=5){
        text.textContent += "\n\nThe cpu has won 5 rounds! Game over!";
        reset();
    }
}

function reset(){ 
    document.querySelector('#rock').setAttribute('style','display: none;')
    document.querySelector('#paper').setAttribute('style','display: none;')
    document.querySelector('#scissors').setAttribute('style','display: none;')
    document.querySelector('#reset').setAttribute('style','display: inline;')
}
