import Entity from './entity';

export default class Player extends Entity {
  constructor(options) {
    super(options);
    const _nullPlayer = { node: null };
    this.node = _nullPlayer;
  }
}
