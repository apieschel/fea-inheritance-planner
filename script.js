const classes = {
  dark_mage: {
    base: [],
    growths: [],
    caps: [],
    skills: ["heart_seeker", "malefic_aura"]
  }  
};

const characters = {
  first_gen: {
    olivia: {  
      base: {
        hp: 11,
        strength: 5,
        magic: 2,
        skill: 4,
        speed: 9,
        luck: 12, 
        def: 4,
        res: 4,
      },
      growths: {
        hp: 50,
        strength: 35,
        magic: 15,
        skill: 35,
        speed: 45,
        luck: 65, 
        def: 30,
        res: 20,
      },
      caps: {},
      classes: ["mercenary", "hero", "bow_knight", "myrmidon", "swordmaster", "assassin", "barbarian", "berserker", "warrior"],
    },
    lonqu: {   
      base: {
        hp: 20,
        strength: 6,
        magic: 1,
        skill: 12,
        speed: 13,
        luck: 7, 
        def: 7,
        res: 2,
      },
      growths: {
        hp: 80,
        strength: 55,
        magic: 20,
        skill: 75,
        speed: 75,
        luck: 55, 
        def: 30,
        res: 25,
      },
      caps: { 
        strength: 0,
        magic: 0,
        skill: 3,
        speed: 3,
        luck: 0, 
        def: -2,
        res: -2,
      },
      classes: ["myrmidon", "swordmaster", "assassin", "barbarian", "berserker", "warrior"],
    }
  },
  second_gen: {
    inigo: {
      base: {
        hp: 11,
        strength: 5,
        magic: 2,
        skill: 4,
        speed: 9,
        luck: 12, 
        def: 4,
        res: 4,
      },
      growths: {
        hp: 50,
        strength: 35,
        magic: 15,
        skill: 35,
        speed: 45,
        luck: 65, 
        def: 30,
        res: 20,
      },
      classes: ["mercenary", "hero", "bow_knight", "myrmidon", "swordmaster", "assassin", "barbarian", "berserker", "warrior"],
      skills: ["armsthrift", "patience"]
    }
  }
};

function load_character_stats() {
  const character = document.querySelector( '.character' ).innerText;
  const table = document.createElement( 'table' );  
}

load_character_stats();