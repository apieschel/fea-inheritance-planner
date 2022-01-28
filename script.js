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
    tharja: {
      base: [],
      growths: [],
      caps: [],
      classes: []
    }  
  },
  second_gen: {
    inigo: {
      base: [],
      growths: [],
      caps: [],
      classes: []  
    }
  }
};

function load_character_stats() {
  const character = document.querySelector( '.character' ).innerText;
  const table = document.createElement( 'table' );  
}

load_character_stats();