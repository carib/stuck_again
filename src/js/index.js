import { g } from '../goshDOMIt';
import Player from './player';
import Stage from './stage';
import Entity from './entity';

require('../scss/style.scss');

const root = g.rab('root')['id'];
const stageOptions = {
                      parent: 'root',
                      id: 'stage',

                      };
const entityOptions = {
                      parent: 'stage',
                      id: 'entity',
                      };
const playerOptions = {
                      parent: 'stage',
                      id: 'player',
                      };
const stage  = g.en(Stage, stageOptions);
const entity = g.en(Entity, entityOptions);
const player = g.en(Player, playerOptions);
