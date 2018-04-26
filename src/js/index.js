import { g } from '../goshDOMIt';
import Player from './player';
import Stage from './stage';
import Entity from './entity';

require('../scss/style.scss');
const game = {};

const root = g.rab('root')['id'];

const stageOptions = {
                      parent: 'root',
                      id: 'stage',
                    };
const entityOptions = {
                      parent: 'stage',
                      id: 'entity',
                      speed: '10px',
                    };
const playerOptions = {
                      parent: 'stage',
                      id: 'player',
                      speed: '10px',
                    };
const stage  = g.nr8(Stage, stageOptions);
const entity = g.nr8(Entity, entityOptions);
const player = g.nr8(Player, playerOptions);
// console.log(g(player.node).attr('background-color', 'red'));
