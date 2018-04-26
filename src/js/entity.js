export default class Entity {
  constructor() {
    const _nullNode = { self: null };
    this.node = _nullNode;
  }

  positionSelf(x, y) {
    this.x = x || g.etXY(this.self)['x'];
    this.y = y || g.etXY(this.self)['y'];
  }
}
