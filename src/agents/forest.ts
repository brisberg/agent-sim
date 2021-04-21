import {Action} from '../sim/action.js';
import {Agent} from '../sim/agent.js';
import {Simulation} from '../sim/simulation.js';

import {AgentType} from './index.js';

/** Forest agent are passive and simply exist to hold unharvested wood. */
export class Forest extends Agent {
  // Amount of wood in this forest
  public wood: number;
  constructor(id: string, sim: Simulation, x: number, y: number, wood: number) {
    super(id, AgentType.FOREST, sim, x, y);
    this.wood = wood;
  }

  activate(): Action|null {
    return null;
  }
}
