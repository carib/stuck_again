import Entity from './entity';

export default class Player extends Entity {
  constructor() {
    super();
    this.speed = 10;
    g(document.body).on('keydown', (e) => this.keyDown(e.keyCode));
    this.move = this.move.bind(this);
  }

  render() {
    const { left, top } = this.position;
    this.gD.moveTo(left, top);
  }

  move(direction) {
    
    console.log(this.position);
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

    }
  }
}
