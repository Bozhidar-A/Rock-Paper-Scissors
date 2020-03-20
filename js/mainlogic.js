const computer_options = ["rock", "paper", "scissors"]; //const array of the possible choices for the computer
const anouncer = document.getElementById("anouncer");
var player_score = 0;
var computer_score = 0;
var round = 1;
var game = true;

document.getElementById("new").onclick = function() {
  //upon clicking the new button the game is reset
  game = true;
  document.getElementById("player_choices").style.removeProperty("visibility");
  document
    .getElementById("computer_choices")
    .style.removeProperty("visibility");
  reset_ui();
  reset_btn();
};

pl_rock.onclick = function() {
  //the player makes the choice to play 'rock' this round
  reset_btn();
  Check_Game_State();
  if (game == false) {
    return false;
  }
  document //makes the button turn blue
    .getElementById("pl_rock")
    .style.setProperty("filter", "hue-rotate(180deg)");
  turn("rock", computer_choice());
  update_ui();
};

pl_paper.onclick = function() {
  //the player makes the choice to play 'paper' this round
  reset_btn();
  Check_Game_State();
  if (game == false) {
    return false;
  }
  document //makes the button turn blue
    .getElementById("pl_paper")
    .style.setProperty("filter", "hue-rotate(180deg)");
  turn("paper", computer_choice());
  update_ui();
};

pl_scisors.onclick = function() {
  //the player makes the choice to play 'scisors' this round
  reset_btn();
  Check_Game_State();
  if (game == false) {
    return false;
  }
  document //makes the button turn blue
    .getElementById("pl_scisors")
    .style.setProperty("filter", "hue-rotate(180deg)");
  turn("scisors", computer_choice());
  update_ui();
};

function update_ui() {
  //updates the ui after every round
  document.getElementById("round").innerText = `Round: ${round}`;
  document.getElementById(
    "player_score"
  ).innerText = `Your score: ${player_score}`;
  document.getElementById(
    "computer_score"
  ).innerText = `Computer score: ${computer_score}`;
}

function Check_Game_State() {
  //checks wheath the should end
  round++; //updates the current round
  if (round == 6) {
    //rounds are counted from 1 to play 5 rounds we check if the round var is 6
    document.getElementById("round").innerText = `Round: FINSIH!`;
    let winner = ""; //the winner msg is generated
    if (computer_score > player_score) {
      winner = "The computer wins!";
    } else if (computer_score < player_score) {
      winner = "The player wins!";
    } else {
      winner = "It's a DRAW!";
    }
    anouncer.innerText = `FINSIH! You scored: ${player_score} and the computer scored: ${computer_score}. ${winner}`;
    document //makes the choice for both the computer and the player invisible and uninteractable
      .getElementById("player_choices")
      .style.setProperty("visibility", "hidden");
    document
      .getElementById("computer_choices")
      .style.setProperty("visibility", "hidden");
    game = false;
  }
}

function computer_choice() {
  //generates the computers choice (random)
  let computer_choice = Math.floor(Math.random() * 3);
  switch (computer_choice) {
    case 0:
      document
        .getElementById("co_rock")
        .style.setProperty("filter", "hue-rotate(180deg)");
      break;
    case 1:
      document
        .getElementById("co_paper")
        .style.setProperty("filter", "hue-rotate(180deg)");
      break;
    case 2:
      document
        .getElementById("co_scisors")
        .style.setProperty("filter", "hue-rotate(180deg)");
      break;
    default:
      console.log("Oh dear. Something has gone terrably wrong");
  }
  return computer_options[computer_choice];
}

function reset_ui() {
  //resets the ui to its default state
  player_score = 0;
  computer_score = 0;
  round = 1;
  update_ui();
  anouncer.innerText = "Make your move!";
}

function reset_btn() {
  //returns the choice buttons to their normal colors
  document.getElementById("co_rock").style.removeProperty("filter");
  document.getElementById("co_paper").style.removeProperty("filter");
  document.getElementById("co_scisors").style.removeProperty("filter");
  document.getElementById("pl_rock").style.removeProperty("filter");
  document.getElementById("pl_paper").style.removeProperty("filter");
  document.getElementById("pl_scisors").style.removeProperty("filter");
}

function turn(player_choice, computer_choice) {
  //handles the logic every round

  //draw handler
  if (player_choice == computer_choice) {
    anouncer.innerText = "This round is a DRAW!";
  }

  //rock handler
  if (player_choice == "rock") {
    if (computer_choice == "scissors") {
      anouncer.innerText = "You WIN this round!";
      player_score++;
    } else if (computer_choice == "paper") {
      anouncer.innerText = "You LOST this round!";
      computer_score++;
    }
  }

  //paper handler
  if (player_choice == "paper") {
    if (computer_choice == "rock") {
      anouncer.innerText = "You WIN this round!";
      player_score++;
    } else if (computer_choice == "scissors") {
      anouncer.innerText = "You LOST this round!";
      computer_score++;
    }
  }

  //scissors handler
  if (player_choice == "scissors") {
    if (computer_choice == "paper") {
      anouncer.innerText = "You WIN this round!";
      player_score++;
    } else {
      anouncer.innerText = "You LOST this round!";
      computer_score++;
    }
  }
}
