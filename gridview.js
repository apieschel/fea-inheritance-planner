/* global characters */

function load_grid() {
  console.log('grid loaded!');
  const grid = document.querySelector( '.grid-test' );
  
  if( grid ) {
    Object.keys( characters.first_gen ).forEach( ( character ) => {
      const gridItem = document.createElement( 'div' );
      gridItem.innerHTML = '<span>' + character + '</span>';
      gridItem.className = 'grid-item ' + character;
      grid.appendChild( gridItem );
    } ); 
    
    Object.keys( characters.second_gen ).forEach( ( character ) => {
      const gridItem = document.createElement( 'div' );
      gridItem.innerText = character;
      gridItem.className = 'grid-item ' + character;
      grid.appendChild( gridItem );
    } ); 
  }
}

load_grid();