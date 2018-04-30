import Entity from './entity';

export default class MovingEntity extends Entity {
  constructor() {
    super();
    g(document.body).on('keydown', (e) => this.keyDown(e.keyCode));
    this.move = this.move.bind(this);
    this.updatePos = this.updatePos
  }

  assignVariables(options) {
    const { speed } = options;
    this.position   = {};
    this.speed      = speed;
  }

  render() {
    this.updatePos();
  }

  updatePos() {
    const offset = g.etOffset(this);
    const { left, top, x, y} = this.position;
    if ((x + offset.x) !== left || y + offset.y !== top) {
      this.gD.moveTo(left, top);
      this.updateXY();
      this.mapOccupiedCells();
    }
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
