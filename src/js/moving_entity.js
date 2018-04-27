import Entity from './entity';

export default class MovingEntity extends Entity {
  constructor() {
    super();
    this.speed = 10;
    g(document.body).on('keydown', (e) => this.keyDown(e.keyCode));
  }

  updatePos() {
    const { left, top } = this.position;
    this.gD.moveTo(left, top);
  }

  move(direction) {
    switch (direction) {
      case 'UP':
        for (let i = 0; i < this.speed; i++) this.position.top--
        break;
      case 'DOWN':
        for (let i = 0; i < this.speed; i++) this.position.top++
        break;
      case 'LEFT':
        for (let i = 0; i < this.speed; i++) this.position.left--
        break;
      case 'RIGHT':
        for (let i = 0; i < this.speed; i++) this.position.left++
        break;
      default:
        console.log("Can't move that way.");
    }
  }
}
