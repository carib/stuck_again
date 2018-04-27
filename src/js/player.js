import MovingEntity from './moving_entity';

export default class Player extends MovingEntity {
  constructor() {
    super();
    this.move = this.move.bind(this);
  }

  render() {
    this.updatePos();
  }
}
