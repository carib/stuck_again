// import { g } from '../goshDOMIt';
import { Stage, NonPlayer, Player } from './index';

export default class Game {
  constructor() {
    this.loop = this.loop.bind(this);
  }

  init() {
    const stageOptions  = {
      parent: 'root',
      klass: 'stage',
    };
    const npcOptions = {
      parent: 'stage-0',
      klass: 'npc',
      speed: 10,
      initXY: '200,20',
    };
    const playerOptions = {
      parent: 'stage-0',
      klass: 'player',
      speed: 10,
      initXY: '200,50',
    };
    const keyBindings = {
      player: {
        87: 'move.UP',
        68: 'move.RIGHT',
        83: 'move.DOWN',
        65: 'move.LEFT',
      },
    };
    g.lueKeys(keyBindings);
    this.stage    = g.nr8(Stage, stageOptions);
    this.player   = g.nr8(Player, playerOptions);
    this.npc      = g.nr8(NonPlayer, npcOptions);
    window.stage  = this.stage;
    window.player = this.player;
    window.npc    = this.npc;
    this.loop();
  }

  loop(timestamp) {
    let elapsed = timestamp - this.mark;
    this.update();
    this.render();
    this.mark = timestamp;
    this.req = window.requestAnimationFrame(this.loop);
  }

  update() {
  }

  render() {
    this.player.self.render();
    this.npc.self.render();
  }
}
