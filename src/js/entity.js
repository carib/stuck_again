export default class Entity {
  constructor() {
    this.gD = null;
    this.position = {};
    this.positionEntity = this.positionEntity.bind(this);
  }

  init(options) {
    if (!/stage-/.test(this.id)) this.positionEntity(options.initXY);
  }

  keyDown(keyCode) {
    this.parseKeyCode(keyCode);
  }

  parseKeyCode(keyCode) {
    const parsed = g.etKey(keyCode);
    const relay = { null: console.log(parsed.dir),
                    move: this.move(parsed.dir), };
    relay[parsed.act];
  }

  positionEntity(initXY) {
    initXY               = initXY.split(',').map(n => parseInt(n));
    this.position.x      = this.node.getBoundingClientRect().x;
    this.position.y      = this.node.getBoundingClientRect().y;
    this.position.height = this.node.getBoundingClientRect().height;
    this.position.width  = this.node.getBoundingClientRect().width;
    this.position.top    = initXY[1]
    this.position.left   = initXY[0]
    this.position.right  = this.node.getBoundingClientRect().right;
    this.position.bottom = this.node.getBoundingClientRect().bottom;
  }

}
