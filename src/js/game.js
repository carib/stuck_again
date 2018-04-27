// import { g } from '../goshDOMIt';
import { Stage, Entity, Player } from './index';

export default class Game {
  constructor() {
    this.loop = this.loop.bind(this);
  }

  init() {
    const stageOptions  = {
      parent: 'root',
      klass: 'stage',
      id: 'stage',
    };
    const entityOptions = {
      parent: 'stage',
      klass: 'entity',
      id: 'entity',
      speed: '10px',
    };
    const playerOptions = {
      parent: 'stage',
      klass: 'player',
      id: 'player',
      speed: '10px',
    };
    const keyBindings = {
      87: 'move.UP',
      68: 'move.RIGHT',
      83: 'move.DOWN',
      65: 'move.LEFT',
    };
    g.dBindKeys(keyBindings);
    this.stage  = g.nr8(Stage, stageOptions);
    this.entity = g.nr8(Entity, entityOptions);
    this.player = g.nr8(Player, playerOptions);
    window.stage  = this.stage;
    window.entity = this.entity;
    window.player = this.player;
    this.loop();
  }

  loop() {
    this.update();
    this.render();
    requestAnimationFrame(this.loop);
  }

  update() {

  }

  render() {
    this.player.self.render();
  }
}
