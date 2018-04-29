import { Stage, NonPlayer, Player } from './index';

// ENABLE DEV MODE
export const devMode = true;
// GAME CONFIG
export const keyBindings = {
  player: {
    87: 'move.UP',
    68: 'move.RIGHT',
    83: 'move.DOWN',
    65: 'move.LEFT',
  },
};
// GAME ENTITIES
export const stage  = {
  entity: Stage,
  parent: 'root',
  klass: 'stage',
  cellSize: 32,
  width: 500,
  height: 400,
};
export const npc = {
  entity: NonPlayer,
  parent: 'stage-1',
  klass: 'npc',
  speed: 10,
  initXY: '200,20',
};
export const player = {
  entity: Player,
  parent: 'stage-1',
  klass: 'player',
  speed: 10,
  initXY: '300,50',
};
