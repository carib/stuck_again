import Entity from './entity';

export default class Stage extends Entity {
  constructor() {
    super();
  }

  positionEntity(options) {
    this.position.top    = this.node.getBoundingClientRect().top;
    this.position.left   = this.node.getBoundingClientRect().left;
    this.position.width  = this.node.getBoundingClientRect().width;
    this.position.height = this.node.getBoundingClientRect().height;
  }
}
