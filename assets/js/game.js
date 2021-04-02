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
// if player choses to skip

   
 
    // if no (false), ask question again by running fight() again
  // } else {
    // fight();
   
     //alert(playerName + " has chosen to skip the fight!");
    //else { 
    //window.alert("You need to choose a valid option. Try again!");
    
    


for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
  window.alert ("Welcome to robot-gladiators! Round " + ( i + 1 ));
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}
 else {
   window.alert('You have lost your robot in battle! Game Over!')
 }
}
