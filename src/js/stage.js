import Entity from './entity';

export default class Stage extends Entity {
  constructor() {
    super();
  }

  assignVariables(options) {
    const { cellSize } = options;
    this.position      = {};
    this.cellSize      = cellSize;
  }

  positionEntity(options) {
    this.position.top    = this.node.getBoundingClientRect().top;
    this.position.left   = this.node.getBoundingClientRect().left;
    this.position.width  = this.node.getBoundingClientRect().width;
    this.position.height = this.node.getBoundingClientRect().height;
    this.updateXY();
  }

  updateXY() {
    const { x, y }          = g.etOffset();
    const { left, top,
            height, width } = this.position;
    this.position.x         = left - x;
    this.position.y         = top - y;
  }

  buildCellGrid() {
    const { id, position, cellSize, node } = this;
    const { x, y, width, height } = position;
    const rows = height / cellSize;
    const cols = width / cellSize;
    const numCells = rows * cols;
    const cells = {};
    for (let i = 0; i < numCells; i++) {
      let col = (i % 100 % cols)*cellSize;
      let row = Math.floor(i/cols)*cellSize;
      let coords = `${row},${col}`
      cells[coords] = new Set();
    }
    this.cells = cells;
    return this.cells;
  }
}
