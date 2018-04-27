import { g } from '../goshDOMIt';
import Game from './game';
// import Player from './player';
// // import Stage from './stage';
// import Entity from './entity';

export { default as Stage } from './stage';
export { default as Entity } from './entity';
export { default as Player } from './player';

require('../scss/style.scss');

const root = g.rab('root')['id'];
window.onload = () => {
  const game = new Game();
  game.init();
};
