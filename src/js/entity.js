export default class Entity {
  constructor() {
    this.gD = null;
    this.pos = this.pos.bind(this);
  }

  init(node, entityOptions) {
    const { id, speed } = entityOptions;
    this.node = node;
    this.gD = g(node);
    this.id = id;
    node.id = id;
    this.gD.data('speed', speed);
    document.addEventListener('keydown', (e) => {
      this.keyDown(e.keyCode);
    });
  }

  keyDown(keyCode) {
    console.log(keyCode);
  }


  pos() {
    const pos = g.etXY(this);
    const offset = g.etOffset(this);
    return {
      x: pos.x - offset.x,
      y: pos.y - offset.y
    };
  }


}
