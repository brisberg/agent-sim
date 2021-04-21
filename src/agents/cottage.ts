import {Action} from '../sim/action.js';
import {Agent} from '../sim/agent.js';
import {Simulation} from '../sim/simulation.js';

import {AgentType} from './index.js';

/** Cottage agent are passive and simply exist house Villagers. */
export class Cottage extends Agent {
  constructor(id: string, sim: Simulation, x: number, y: number) {
    super(id, AgentType.COTTAGE, sim, x, y);
  }

  activate(): Action|null {
    return null;
  }
}
