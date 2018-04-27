import Entity from './entity';

export default class Player extends Entity {
  constructor() {
    super();
    this.speed = 10;
    g(document.body).on('keydown', (e) => this.keyDown(e.keyCode));
  }

  render() {
    const pos = this.gD.pos();
    const { x, y } = this.position;
    const deltaX = x - pos.x;
    const deltaY = y - pos.y;
    let opX;
    let opY;
    if (deltaX || deltaY) {
      opX = (deltaX && deltaX > 0) ? '+' : '-';
      opY = (deltaX && deltaX > 0) ? '+' : '-';
      // this.gD.move('x', opX, deltaX);
      // this.gD.move('y', opY, deltaY);
      this.node.style.top = `${y}px`;
      this.node.style.left = `${x}px`;
    }
  }

  move(direction) {
    // debugger
    switch (direction) {
      case 'UP':
        // for (let i = 0; i < this.speed; i++) {
          this.position.top--
        // }
        break;
      case 'DOWN':
        // for (let i = 0; i < this.speed; i++) {
          this.position.top++
        // }
        break;
      case 'LEFT':
        for (let i = 0; i < this.speed; i++) {
          this.position.left--
        }
        break;
      case 'RIGHT':
        // for (let i = 0; i < this.speed; i++) {
          this.position.left++
        // }
        break;
      default:

    }
  }
}
