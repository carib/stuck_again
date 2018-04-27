import Entity from './entity';

export default class MovingEntity extends Entity {
  constructor() {
    super();
    this.speed = 10;
    g(document.body).on('keydown', (e) => this.keyDown(e.keyCode));
    this.move = this.move.bind(this);
  }

  render() {
    this.updatePos();
  }

  updatePos() {
    const { left, top } = this.position;
    this.gD.moveTo(left, top);
    this.updateXY();
  }

  move(direction) {
    let { speed, position, id } = this;
    let dir = direction;
    if (!'UP DOWN LEFT RIGHT'.includes(dir)) {
      (/player/.test(id)) ? console.log("Can't move that way.") : null;
    }
    for (let i = 0; i < speed; i++) {
      if (/UP/.test(dir)) position.top--
      if (/DOWN/.test(dir)) position.top++
      if (/LEFT/.test(dir)) position.left--
      if (/RIGHT/.test(dir)) position.left++
    }
  }


}
