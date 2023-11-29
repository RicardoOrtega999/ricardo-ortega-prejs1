// function eleccion(jugada) {
//   let resultado = "";
//   if (jugada == 1) {
//     resultado = "Piedra 🪨";
//   } else if (jugada == 2) {
//     resultado = "Papel 📃";
//   } else if (jugada == 3) {
//     resultado = "Tijera ✂️";
//   } else {
//     resultado = "MAL ELEGIDO";
//   }
//   return resultado;
// }

// // 1 es piedra, 2 es papel, 3 es tijera
// let jugador = 0;
// let pc = 0;
// let triunfos = 0;
// let perdidas = 0;

// while (triunfos < 3 && perdidas < 3) {
//   jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
//   pc = prompt(
//     "Elige para tu enemigo: 1 para piedra, 2 para papel, 3 para tijera"
//   );

//   // alert("Elegiste " + jugador)

//   alert("PC elige " + eleccion(pc));
//   alert("Tú eliges " + eleccion(jugador));

//   // COMBATE
//   if (pc == jugador) {
//     alert("EMPATE");
//   } else if (
//     (jugador == 1 && pc == 3) ||
//     (jugador == 2 && pc == 1) ||
//     (jugador == 3) & (pc == 2)
//   ) {
//     triunfos++;
//     alert("GANASTE");
//   } else {
//     perdidas++;
//     alert("PERDISTE");
//   }
// }


// alert(`Ganaste ${triunfos} veces. Perdiste ${perdidas} veces.`);
// function eleccion(jugada) {
//   let resultado = "";
//   if (jugada == 1) {
//     resultado = "Piedra 🪨";
//   } else if (jugada == 2) {
//     resultado = "Papel 📃";
//   } else if (jugada == 3) {
//     resultado = "Tijera ✂️";
//   } else {
//     resultado = "MAL ELEGIDO";
//   }
//   return resultado;
// }

// // 1 es piedra, 2 es papel, 3 es tijera
// let jugador = 0;
// let pc = 0;
// let triunfos = 0;
// let perdidas = 0;

// while (triunfos < 3 && perdidas < 3) {
//   // Solicitar al jugador que elija hasta que ingrese una opción válida
//   do {
//     jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
//     if (jugador < 1 || jugador > 3) {
//       alert("Opción no válida. Por favor, elige nuevamente.");
//     }
//   } while (jugador < 1 || jugador > 3);

//   do {
//     pc = prompt(
//       "Elige para tu enemigo: 1 para piedra, 2 para papel, 3 para tijera"
//     );
//     if (pc < 1 || pc > 3) {
//       alert("Opción no válida. Por favor, elige nuevamente.");
//     }
//   } while (pc < 1 || pc > 3);

//   alert("PC elige " + eleccion(pc));
//   alert("Tú eliges " + eleccion(jugador));

//   // COMBATE
//   if (pc == jugador) {
//     alert("EMPATE");
//   } else if (
//     (jugador == 1 && pc == 3) ||
//     (jugador == 2 && pc == 1) ||
//     (jugador == 3 && pc == 2)
//   ) {
//     triunfos++;
//     alert("GANASTE");
//   } else {
//     perdidas++;
//     alert("PERDISTE");
//   }
// }

// alert(`Ganaste ${triunfos} veces. Perdiste ${perdidas} veces.`);
// alert("COMBATE - Reglas al estilo Sheldon Cooper Según las reglas de Sheldon Cooper: Piedra aplasta tijeras y aplasta lagarto Papel cubre piedra y desautoriza a Spock Tijeras cortan papel y decapitan lagarto Lagarto come papel y envenena a Spock Spock rompe tijeras y vaporiza piedra") 
// function eleccion(jugada) {
//   let resultado = "";
//   if (jugada == 1) {
//     resultado = "Piedra 🪨";
//   } else if (jugada == 2) {
//     resultado = "Papel 📃";
//   } else if (jugada == 3) {
//     resultado = "Tijera ✂️";
//   } else if (jugada == 4) {
//     resultado = "Lagarto 🦎";
//   } else if (jugada == 5) {
//     resultado = "Spock 🖖";
//   } else {
//     resultado = "MAL ELEGIDO";
//   }
//   return resultado;
// }

// // 1 es piedra, 2 es papel, 3 es tijera, 4 es lagarto, 5 es spock
// let jugador = 0;
// let pc = 0;
// let triunfos = 0;
// let perdidas = 0;

// while (triunfos < 3 && perdidas < 3) {
//   // Solicitar al jugador que elija hasta que ingrese una opción válida
//   do {
//     jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera, 4 para lagarto, 5 para Spock");
//     if (jugador < 1 || jugador > 5) {
//       alert("Opción no válida. Por favor, elige nuevamente.");
//     }
//   } while (jugador < 1 || jugador > 5);

//   // Solicitar al usuario que elija para la PC
//   do {
//     pc = prompt("Elige para tu enemigo: 1 para piedra, 2 para papel, 3 para tijera, 4 para lagarto, 5 para Spock");
//     if (pc < 1 || pc > 5) {
//       alert("Opción no válida. Por favor, elige nuevamente.");
//     }
//   } while (pc < 1 || pc > 5);

//   alert("PC elige " + eleccion(pc));
//   alert("Tú eliges " + eleccion(jugador));

 
  

//   if (pc == jugador) {
//     alert("EMPATE");
//   } else if (
//     (jugador == 1 && (pc == 3 || pc == 4)) ||
//     (jugador == 2 && (pc == 1 || pc == 5)) ||
//     (jugador == 3 && (pc == 2 || pc == 4)) ||
//     (jugador == 4 && (pc == 2 || pc == 5)) ||
//     (jugador == 5 && (pc == 1 || pc == 3))
//   ) {
//     triunfos++;
//     alert("GANASTE");
//   } else {
//     perdidas++;
//     alert("PERDISTE");
//   }
// }

// alert(`Ganaste ${triunfos} veces. Perdiste ${perdidas} veces.`);
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

