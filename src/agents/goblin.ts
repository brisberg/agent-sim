import {RandomMove} from '../actions/random-move.js';
import {Action} from '../sim/action.js';
import {Agent} from '../sim/agent.js';
import {Simulation} from '../sim/simulation.js';

import {AgentType} from './index.js';

/** Goblin agent moves randomly. */
export class Goblin extends Agent {
  constructor(id: string, sim: Simulation, x: number, y: number) {
    super(id, AgentType.GOBLIN, sim, x, y);
  }

  activate(): Action|null {
    const env = this.senseEnvironment();

    const action = new RandomMove(this);
    return action;
  }
}
