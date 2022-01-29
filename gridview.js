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
    
    const emptyCell = document.createElement( 'div' );
    emptyCell.className = 'grid-item empty';
    emptyCell.style = 'background: black; border-right: none;';
    grid.appendChild( emptyCell );
    const emptyCellClone = emptyCell.cloneNode();
    emptyCellClone.style = 'background: black; border-left: none;';
    grid.appendChild( emptyCellClone );
    
    Object.keys( characters.second_gen ).forEach( ( character ) => {
      const gridItem = document.createElement( 'div' );
      gridItem.innerHTML = '<span>' + character + '</span>';
      gridItem.className = 'grid-item ' + character + ' child';
      grid.appendChild( gridItem );
    } ); 
  }
}

load_grid();