// Game states
// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 14;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);




var fight = function(enemyName) {
  // repeat and execute as long as the enemy-robot is alive
while(playerHealth > 0 && enemyHealth > 0) {
// Alert players that they are starting the round
// prompt fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      
  
      // if yes true leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from player for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }
    
// remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    
  
// check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      // award player money for winning
      playerMoney = playerMoney + 20;
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
// remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
// check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
     // leave while() loop if player is dead
     break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};
    
// function to start new game
var startGame = function() {
  // reset players stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
  window.alert ("Welcome to robot-gladiators! Round " + ( i + 1 ));
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);

if (playerHealth > 0 && i < enemyNames.length - 1) {
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
if (playerHealth > 0) {
  window.alert("Great job, you,ve survived the game! You now have a score of " + playerMoney + ".");
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
      if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
  
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
      break;
    case "UPGRADE": // new case
    case "upgrade":
      if (playerMoney >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
      // increase attack and decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
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