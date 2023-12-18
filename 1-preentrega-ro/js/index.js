alert("COMBAT - Sheldon Cooper-style Rules According to Sheldon Cooper's rules: Rock crushes scissors and crushes lizard Paper covers rock and disproves Spock Scissors cut paper and decapitate lizard Lizard eats paper and poisons Spock Spock breaks scissors and vaporizes rock");

function choice(move) {
  let result = "";
  if (move == 1) {
    result = "Rock 🪨";
  } else if (move == 2) {
    result = "Paper 📃";
  } else if (move == 3) {
    result = "Scissors ✂️";
  } else if (move == 4) {
    result = "Lizard 🦎";
  } else if (move == 5) {
    result = "Spock 🖖";
  } else {
    result = "WRONG CHOICE";
  }
  return result;
}

// 1 is rock, 2 is paper, 3 is scissors, 4 is lizard, 5 is Spock
let player = 0;
let computer = 0;
let wins = 0;
let losses = 0;

while (wins < 3 && losses < 3) {
  // Ask the player to choose until a valid option is entered
  do {
    player = prompt("Choose: 1 for rock, 2 for paper, 3 for scissors, 4 for lizard, 5 for Spock");
    if (player < 1 || player > 5) {
      alert("Invalid option. Please choose again.");
    }
  } while (player < 1 || player > 5);

  // Ask the player to choose for the computer
  do {
    computer = prompt("Choose for your opponent: 1 for rock, 2 for paper, 3 for scissors, 4 for lizard, 5 for Spock");
    if (computer < 1 || computer > 5) {
      alert("Invalid option. Please choose again.");
    }
  } while (computer < 1 || computer > 5);

  alert("Computer chooses " + choice(computer));
  alert("You choose " + choice(player));

  // COMBAT - Rules in Sheldon Cooper style
  /*
    According to Sheldon Cooper's rules:
    - Rock crushes scissors and crushes lizard.
    - Paper covers rock and disproves Spock.
    - Scissors cut paper and decapitate lizard.
    - Lizard eats paper and poisons Spock.
    - Spock breaks scissors and vaporizes rock.
  */

  if (computer == player) {
    alert("DRAW");
  } else if (
    (player == 1 && (computer == 3 || computer == 4)) ||
    (player == 2 && (computer == 1 || computer == 5)) ||
    (player == 3 && (computer == 2 || computer == 4)) ||
    (player == 4 && (computer == 2 || computer == 5)) ||
    (player == 5 && (computer == 1 || computer == 3))
  ) {
    wins++;
    alert("YOU WIN");
  } else {
    losses++;
    alert("YOU LOSE");
  }
}

alert(`You won ${wins} times. You lost ${losses} times.`);

