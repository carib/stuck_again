export default class Entity {
  constructor() {
    this.gD = null;
    this.position = {};
    this.positionEntity = this.positionEntity.bind(this);
  }

  init() {
    if (this.id !== 'stage') this.positionEntity(this.node);
  }

  keyDown(keyCode) {
    this.parseKeyCode(keyCode);
  }

  parseKeyCode(keyCode) {
    const parsed = g.etKey(keyCode);
    const relay = {
      null: console.log(parsed.dir),
      move: this.move(parsed.dir),
    };
    relay[parsed.act];
  }

  positionEntity(node) {

    this.position.x      = node.getBoundingClientRect().x;
    this.position.y      = node.getBoundingClientRect().y;
    this.position.height = node.getBoundingClientRect().height;
    this.position.width  = node.getBoundingClientRect().width;
    this.position.top    = node.getBoundingClientRect().top;
    this.position.left   = node.getBoundingClientRect().left;
    this.position.right  = node.getBoundingClientRect().right;
    this.position.bottom = node.getBoundingClientRect().bottom;
    // node.style.left = this.position.left + 'px';
    // node.style.top = this.position.top + 'px'
  }

}
