import {Agent} from './agent.js';
import {Simulation} from './simulation.js';

/** Action base class for all actions Agents can perform. */
export abstract class Action {
  constructor(public readonly initiator: Agent) {}

  public abstract execute(sim: Simulation): void;
}

/** Random Move Action */
export class RandomMove extends Action {
  public execute(sim: Simulation): void {
    const deltaX = Math.floor(Math.random() * 3) - 1;
    const deltaY = Math.floor(Math.random() * 3) - 1;

    this.initiator.x += deltaX;
    this.initiator.y += deltaY;

    if (this.initiator.x < 0) {
      this.initiator.x = 0;
    } else if (this.initiator.x >= 50) {
      this.initiator.x = 50;
    }

    if (this.initiator.y < 0) {
      this.initiator.y = 0;
    } else if (this.initiator.y >= 50) {
      this.initiator.y = 50;
    }
  }
}
