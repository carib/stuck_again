export default class Entity {
  constructor() {
    this.occupiedCells = new Set();
    this.positionEntity = this.positionEntity.bind(this);
    this.parseKeyCode = this.parseKeyCode.bind(this);
  }

  init(options) {
    this.assignVariables(options);
    this.positionEntity(options);
  }

  assignVariables(options) {
    this.position = {};
  }

  positionEntity({ initXY }) {
    const { position, node } = this;
    initXY                   = initXY.split(',').map(n => parseInt(n));
    position.top             = initXY[1]
    position.left            = initXY[0]
    position.width           = node.getBoundingClientRect().width;
    position.height          = node.getBoundingClientRect().height;
    this.gD.moveTo(position.left, position.top);
    this.updateXY();
  }

  updateXY() {
    const { x, y }          = g.etOffset();
    const { left, top,
            height, width } = this.position;
    this.position.x         = left - x;
    this.position.y         = top - y;
    this.position.x2        = left + width - x;
    this.position.y2        = top + height - y;
    this.position.halfW     = width / 2;
    this.position.halfH     = height / 2
  }

  keyDown(keyCode) {
    this.parseKeyCode(keyCode);
  }

  parseKeyCode(keyCode) {
    const { id, act, dir } = g.etKey(keyCode, this.id.split('-')[0]);
    const relay = {
      [id]: { _nullKey: null },
      player: {
        move: this.move(dir),
      },
    };
    relay[id][act];
  }

  mapOccupiedCells() {
    this.removeGlow();
    this.occupiedCells.clear();
    const cells = g.ridMap(this);
    // cells.
    this.addGlow()
  }

  removeGlow() {
    Object.values(g.rab('glow').class).forEach(cell => cell.classList.remove('glow'))
  }

  addGlow() {
    this.occupiedCells.forEach(cell => {
      cell = cell.split(',');
      cell = g.rab(`y-${cell[0]},x-${cell[1]}`).id;
      cell.classList.add('glow');
    });
  }
}
