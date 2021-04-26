let pos = 0;
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];
let direction = 0;
const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
//  newimg.src = 'PacMan1.png';
  newimg.src = pacArray[0][0];
  newimg.width = 100;
  console.log('height: ', newimg.height);

  // TODO: set position here
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  console.log('left: ', newimg.style.left);
  console.log('top: ', newimg.style.top);

  newimg.mouth = 0;
  newimg.height = 100; // Assume
  // TODO add new Child image to game
  game.appendChild(newimg);
  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.mouth++;
    if (item.velocity.x < 0) {
      item.newimg.src = pacArray[1][(item.newimg.mouth % 2)];
    } else {
      item.newimg.src = pacArray[0][(item.newimg.mouth % 2)];      
    }

    console.log('velo: ', item.velocity.x, 'mouth: ', item.newimg.mouth, 'newSrc: ', item.newimg.src);
//    console.log('pos x: ', Math.round(item.position.x), ' | vel x: ', Math.round(item.velocity.x));
 //   console.log(item);
    item.newimg.style.left = Math.round(item.position.x); // + 'px';
    item.newimg.style.top = Math.round(item.position.y); // + 'px';
//    console.log('position: ', item.position.x, ' | velocity: ', item.velocity.x);
//    console.log('newimg.mouth: ', item.newimg.mouth);
  });

// To get the 'chomping' to work, the timeout had to be increased. 
// Believe there wasn't enough time to fetch the images
  setTimeout(update, 300);
}

function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
  let outOfBoundsX = window.innerWidth - item.newimg.width;
  let outOfBoundsY = window.innerHeight - item.newimg.height; 

//  console.log('w.iW: ', window.innerWidth, ' | i.w: ', item.newimg.width, ' | oOBX: ', outOfBoundsX);

  let nextPositionX = item.position.x + item.velocity.x;
  let nextPositionY = item.position.y + item.velocity.y;
  
//  console.log('nextX: ', nextPositionX);
  console.log('X: ', item.position.x, ' | Y: ', item.position.y);
  console.log('nextX: ', nextPositionX, ' | nextY: ', nextPositionY);
  console.log('oOBX: ', outOfBoundsX, ' | oOBY: ', outOfBoundsY);
  console.log('veloX', item.velocity.x, ' | veloY: ', item.velocity.y);

  if ((nextPositionX < 0) || (nextPositionX > outOfBoundsX)) {
      item.velocity.x = item.velocity.x * -1;
  }
  
  if ((nextPositionY < 0) || (nextPositionY > outOfBoundsY)) {
      item.velocity.y = item.velocity.y * -1;
  }

  console.log('newVeloX', item.velocity.x, ' | newVeloY: ', item.velocity.y);
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
  
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
