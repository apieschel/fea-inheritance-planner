const growthKeys = ["hp", "strength",	"magic",	"skill",	"speed",	"luck",	"def",	"res"];
const capKeys = ["strength",	"magic",	"skill",	"speed",	"luck",	"def",	"res"];

const classes = {
  dark_mage: {
    base: [],
    growths: [],
    caps: [],
    skills: ["heart_seeker", "malefic_aura"]
  },
  myrmidon: {
    base: [],
    growths: {
        hp: 40,
        strength: 20,
        magic: 0,
        skill: 25,
        speed: 25,
        luck: 0, 
        def: 5,
        res: 5,
      },
    caps: [],
    skills: []
  },
  mercenary: {
    base: [],
    growths: {
        hp: 45,
        strength: 20,
        magic: 0,
        skill: 25,
        speed: 20,
        luck: 0, 
        def: 10,
        res: 5,
      },
    caps: [],
    skills: []
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
      skills: ["armsthrift", "patience"],
      mother: "olivia"
    }
  }
};

const fatherSelect = document.querySelector( '.father' );
const stats = document.querySelector( '.stats' );

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
  
  Object.values( characters.second_gen.inigo.growths ).map( ( val, i ) => {
    const th = document.createElement( 'th' );
    const td = document.createElement( 'td' );
    td.innerText = val + '%';
    valrow.appendChild( td );
    th.innerText = growthKeys[i];
    keyrow.appendChild( th );
  } );
  
  thead.appendChild( keyrow );
  tbody.appendChild( valrow );
  table.appendChild( thead );
  table.appendChild( tbody );
  stats.appendChild( table );
}

function calculate( mother, father, child, active_class, calc ) {
  const dataComplete = characters.second_gen[child] && characters.first_gen[mother] && characters.first_gen[father] && classes[active_class] && classes[active_class][calc] && characters.first_gen[mother][calc] && characters.first_gen[father][calc];  
  
  if( dataComplete ) {
    let childStats = [];
    
    if( calc === 'growths' ) {    
      childStats = Object.values( characters.second_gen[child][calc] );
    }
    
    const motherStats = Object.values( characters.first_gen[mother][calc] );
    const fatherStats = Object.values( characters.first_gen[father][calc] );
    const activeClass = Object.values( classes[active_class][calc] );
    const newValues = [];
    
    growthKeys.forEach( ( val, i ) => {
      if( calc === 'growths' ) {   
        newValues.push( Math.floor( ( ( childStats[i] + motherStats[i] + fatherStats[i] ) / 3 ) + activeClass[i] ) );  
      }
      
      if( calc === 'caps' ) {
        newValues.push( motherStats[i] + fatherStats[i] + 1 );    
      }
    } );
    
    return newValues;
  } else {
    console.log( 'Data is missing.' );
    return false;
  }  
}

display_character_stats();

if( fatherSelect ) {
  fatherSelect.addEventListener( 'change', ( e ) => {  
    stats.innerHTML = '';
    
    const character = e.target.value;
    let table = document.createElement( 'table' );
    let thead = document.createElement( 'thead' );
    let tbody = document.createElement( 'tbody' );
    const keyrow = document.createElement( 'tr' );
    const growthRow = document.createElement( 'tr' );
    const capRow = document.createElement( 'tr' );
    
    const newGrowths = calculate( 'olivia', e.target.value, 'inigo', 'mercenary', 'growths' );
    const newCaps = calculate( 'olivia', e.target.value, 'inigo', 'mercenary', 'caps' );
    
    const growthsHead = document.createElement( 'th');
    growthsHead.innerText = 'Growths';
    const capsHead = document.createElement( 'th');
    capsHead.innerText = 'Caps';
    
    keyrow.appendChild( document.createElement( 'th') );
    growthRow.appendChild( growthsHead );
    capRow.appendChild( capsHead );
    
    if( newGrowths && newCaps ) { 
      growthKeys.map( ( val, i ) => {
        const th = document.createElement( 'th' );
        th.innerText = val;
        keyrow.appendChild( th );
        const growthCell = document.createElement( 'td' );
        growthCell.innerText = newGrowths[i] + '%';
        growthRow.appendChild( growthCell );
        
        if( i === 0 ) {
          const capCell = document.createElement( 'td' );
          capRow.appendChild( capCell );
        } else {
          const capCell = document.createElement( 'td' );
          
          if( newCaps[i - 1] > 0 ) {
            capCell.innerText = '+' + newCaps[i - 1];
            capRow.appendChild( capCell );
          } else {
            capCell.innerText = newCaps[i - 1];
            capRow.appendChild( capCell );
          }
        }
      } );
  
      thead.appendChild( keyrow );
      tbody.appendChild( growthRow );
      tbody.appendChild( capRow );
      table.appendChild( thead );
      table.appendChild( tbody );
      stats.appendChild( table );
    }
  } );  
}