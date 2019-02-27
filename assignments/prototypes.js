/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(go_arg) {
  this.createdAt = go_arg.createdAt;
  this.name = go_arg.name;
  this.dimensions = go_arg.dimensions;
}

GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(cs_arg) {
  this.healthPoints = cs_arg.healthPoints;
  GameObject.call(this,cs_arg);
}
//How do I check in console if inheritance is working correctly?
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(hu_arg) {
  this.team = hu_arg.team;
  this.weapons = hu_arg.weapons;
  this.language = hu_arg.language;
  // Do I need both the lines below this, or just the second one?
  GameObject.call(this,hu_arg);
  CharacterStats.call(this,hu_arg);
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

function Hero(he_arg) {
    Humanoid.call(this,he_arg);
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.attack = function(target) {
  let random_num = Math.floor(Math.random() * 10) + 1;
  let damage_done = target.healthPoints - random_num;
  target.healthPoints = damage_done;
  if (damage_done <= 0) {
    return `${this.name} launches an attack on ${target.name} and does ${random_num} points of damage! ${target.name} was killed! ` + target.destroy();
  } else {
      return `${this.name} launches an attack on ${target.name} and does ${random_num} points of damage! ${target.name} now has ${damage_done} health points left.`;
  }
}

function Villain(v_arg) {
    Humanoid.call(this,v_arg);
}
Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.attack = function(target) {
  let random_num = Math.floor(Math.random() * 10) + 1;
  let damage_done = target.healthPoints - random_num;
  target.healthPoints = damage_done;
  if (damage_done <= 0) {
    return `${this.name} launches an attack on ${target.name} and does ${random_num} points of damage! ${target.name} was killed! ` + target.destroy();
  } else {
      return `${this.name} launches an attack on ${target.name} and does ${random_num} points of damage! ${target.name} now has ${damage_done} health points left.`;
  }
}

const evilGuy = new Villain ({
  createdAt: new Date(),
    dimensions: {
      length: 5,
      width: 3,
      height: 9,
    },
    healthPoints: 18,
    name: 'Evil Guy',
    team: 'Doooooom',
    weapons: [
      'Axe',
      'Mace',
    ],
    language: 'Evil',

});

const heroGuy = new Hero ({
  createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 8,
      height: 5,
    },
    healthPoints: 13,
    name: 'Hero Guy',
    team: 'Good',
    weapons: [
      'Sword',
      'Spear',
    ],
    language: 'Normal',

});

console.log(swordsman.healthPoints);
console.log(evilGuy.attack(swordsman));
console.log(swordsman.healthPoints);
console.log(evilGuy.attack(swordsman));
console.log(evilGuy.attack(swordsman));

console.log(swordsman.healthPoints);
console.log(heroGuy.attack(archer));
console.log(swordsman.healthPoints);
console.log(heroGuy.attack(archer));
console.log(heroGuy.attack(archer));



