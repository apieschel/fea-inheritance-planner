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
        hp: 40,
        strength: 35,
        magic: 25,
        skill: 45,
        speed: 45,
        luck: 60, 
        def: 20,
        res: 20,
      },
      caps: { 
        strength: 0,
        magic: 0,
        skill: 1,
        speed: 1,
        luck: 0, 
        def: -1,
        res: -1,
      },
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
        hp: 40,
        strength: 35,
        magic: 20,
        skill: 50,
        speed: 50,
        luck: 55, 
        def: 25,
        res: 20,
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
      classes: ["myrmidon", "swordmaster", "assassin", "thief", "trickster", "wyvern_rider", "wyvern_lord", "griffon_rider"],
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
  let character = document.querySelector( '.character' );
  
  if( character ) {
    character = character.innerText;
  }
  
  let table = document.createElement( 'table' );
  let thead = document.createElement( 'thead' );
  let tbody = document.createElement( 'tbody' );
  const keyrow = document.createElement( 'tr' );
  const valrow = document.createElement( 'tr' );
  
  Object.keys( characters.second_gen.inigo.growths ).map( ( key ) => {
    const td = document.createElement( 'td' );
    td.innerText = key;
    keyrow.appendChild( td );
  } );
  
  Object.values( characters.second_gen.inigo.growths ).map( ( val ) => {
    const td = document.createElement( 'td' );
    td.innerText = val;
    valrow.appendChild( td );
  } );
  
  thead.appendChild( keyrow );
  tbody.appendChild( valrow );
  table.appendChild( thead );
  table.appendChild( tbody );
  document.querySelector( '.growths' ).appendChild( table );
  
  console.log( characters );
  console.log( character );
  console.log( table );
}

load_character_stats();