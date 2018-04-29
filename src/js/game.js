// import { Stage, NonPlayer, Player } from './index';
import * as Options from './options';

export default class Game {
  constructor() {
    this.loop = this.loop.bind(this);
  }

  init() {
    // Generate entities
    this.stage    = g.nr8(Options.stage);
    this.player   = g.nr8(Options.player);
    this.npc      = g.nr8(Options.npc);
    // Configure game
    g.lueKeys(Options.keyBindings);
    g.ridMap(this.stage.self);
    console.log(this.stage);
    // Game start
    this.devMode();
    this.loop();
  }

  devMode() {
    if (Options.devMode) {
      console.log('**********DEV MODE ENABLED**********');
      window.npc    = this.npc;
      window.stage  = this.stage;
      window.player = this.player;
    }
  }

  loop(timestamp) {
    let elapsed = timestamp - this.mark;
    this.update();
    this.render();
    this.mark   = timestamp;
    this.req    = window.requestAnimationFrame(this.loop);
  }

  render() {
    this.player.self.render();
    this.npc.self.render();
  }

  update() {
  }
}
