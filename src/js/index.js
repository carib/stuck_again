import { g } from '../goshDOMIt';
import Game from './game';

require('../scss/style.scss');

export { default as Stage     } from './stage';
export { default as Entity    } from './entity';
export { default as Player    } from './player';
export { default as NonPlayer } from './npc';

const root = g.rab('root')['id'];
window.onload = () => {
  const game = new Game();
  game.init();
};


/*
// ***** TODO:
  - Broad-phase collision grid
  - Near-phase detection
  - Collision response
  - gD Styler (g.el)
  - gD append (+innerHTML != functional childNodes)
  - Init message?

*/
