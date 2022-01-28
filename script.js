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

const fatherSelect = document.querySelector( '.father' );
const growths = document.querySelector( '.growths' );

function display_character_stats() {
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
    const th = document.createElement( 'th' );
    th.innerText = key;
    keyrow.appendChild( th );
  } );
  
  Object.values( characters.second_gen.inigo.growths ).map( ( val ) => {
    const td = document.createElement( 'td' );
    td.innerText = val + '%';
    valrow.appendChild( td );
  } );
  
  thead.appendChild( keyrow );
  tbody.appendChild( valrow );
  table.appendChild( thead );
  table.appendChild( tbody );
  growths.appendChild( table );
}

function calculate_growth_rates( mother, father, child ) {
  if( characters.second_gen[child] && characters.first_gen[mother] && characters.first_gen[father] ) {
    const childGrowths = Object.values( characters.second_gen[child].growths );
    const motherGrowths = Object.values( characters.first_gen[mother].growths );
    const fatherGrowths = Object.values( characters.first_gen[father].growths );
    console.log( childGrowths );
    console.log( motherGrowths );
    console.log( fatherGrowths );
  } else {
    console.log( 'Data is missing.' );
  }
}

display_character_stats();

if( fatherSelect ) {
  fatherSelect.addEventListener( 'change', ( e ) => {  
    growths.innerHTML = '';
    
    const character = e.target.value;
    let table = document.createElement( 'table' );
    let thead = document.createElement( 'thead' );
    let tbody = document.createElement( 'tbody' );
    const keyrow = document.createElement( 'tr' );
    const valrow = document.createElement( 'tr' );
    
    calculate_growth_rates( 'olivia', e.target.value, 'inigo' );
    
    if( characters.first_gen[character] ) { 
      Object.keys( characters.first_gen[character].growths ).map( ( key ) => {
        const th = document.createElement( 'th' );
        th.innerText = key;
        keyrow.appendChild( th );
      } );

      Object.values( characters.first_gen[character].growths ).map( ( val ) => {
        const td = document.createElement( 'td' );
        td.innerText = val + '%';
        valrow.appendChild( td );
      } );

      thead.appendChild( keyrow );
      tbody.appendChild( valrow );
      table.appendChild( thead );
      table.appendChild( tbody );
      growths.appendChild( table );
    }
  } );  
}