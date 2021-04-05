// Game states
// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

//console.log(enemyNames);
//console.log(enemyNames.length);
//console.log(enemyNames[0]);
//console.log(enemyNames[3]);


var fightOrSkip = function() {
  // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }

  promptFight = promptFight.toLowerCase();

  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip") { //|| promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerInfo.playerMoney = playerInfo.money - 10;

      return true;
      shop();
    }
  }
}

var fight = function(enemy) {
  // repeat and execute as long as the enemy-robot is alive
while(playerInfo.Health > 0 && enemy.health > 0) {
  fightOrSkip();    
  break;
// remove enemy's health by subtracting the amount set in the playerAttack variable
    var damage = randomNumber(playerInfo.Attack - 3, playerInfo.Attack);
    enemy.health = Math.max(0, enemy.health - damage);
// check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");
      // award player money for winning
      playerInfo.Money = playerInfo.Money + 20;
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
  
// remove player's health by subtracting the amount set in the enemyAttack variable
    var damage = (enemy.attack - 3, enemy.attack);
    playerInfo.Health = Math.max(0, playerInfo.Health - damage);  
// check player's health
    if (playerInfo.Health <= 0) {
      window.alert(playerInfo.Name + " has died!");
     // leave while() loop if player is dead
     break;
    } else {
      window.alert(playerInfo.Name + " still has " + playerInfo.Health + " health left.");
    }
  }
};


var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};
var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  console.log("Your robot's name is " + name);
  return name;
};
var playerInfo = {
  Name: getPlayerName(),
  Health: 100,
  Attack: 14,
  Money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack =10;
  },
  refillHealth: function () {
    if (this.money >=7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
    this.health +=20;
    this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
  } else {
    window.alert("You don't have enough money!");
  }
  }
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];


// function to start new game
var startGame = function() {
  // reset players stats
  playerInfo.reset();

for (var i = 0; i < enemyInfo.length; i++) {
  if (playerInfo.Health > 0) {
  window.alert ("Welcome to robot-gladiators! Round " + ( i + 1 ));
  var pickedEnemyobj = enemyInfo[i];
  pickedEnemyobj.health = randomNumber(40, 60);
  fight(pickedEnemyobj);

if (playerInfo.Health > 0 && i < enemyInfo.length - 1) {
  var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

  if (storeConfirm) {
  shop();
  }
}
}
 else {
   window.alert('You have lost your robot in battle! Game Over!')
 }
}

 endGame();
};
//function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");
if (playerInfo.Health > 0) {
  window.alert("Great job, you,ve survived the game! You now have a score of " + playerInfo.Money + ".");
}
else {
  window.alert("You've lost your robot in battle.")
}
var playAgainConfirm = window.confirm("Would you like to play again?");
if (playAgainConfirm) {
  // restart the game
  startGame();
}
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
};

var shop = function() {
  var shopOptionPrompt = window.prompt(
    "Would you like REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  switch (shopOptionPrompt) {
    case "REFILL": //NEW CASE
    case "refill":
      playerInfo.refillHealth();
      break;
    case "UPGRADE": // new case
    case "upgrade":
      playerInfo.upgradeAttack();
      break;
    case "LEAVE": //new case
    case "leave":
      window.alert("Leaving the store.");
  
      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
  
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};



startGame();