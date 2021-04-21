import {RandomMove} from '../actions/random-move';
import {Action} from '../sim/action';
import {Agent} from '../sim/agent';
import {Simulation} from '../sim/simulation';

import {AgentType} from '.';

/** Villager agent seek to build cottages and plant crops. */
export class Villager extends Agent {
  constructor(id: string, sim: Simulation, x: number, y: number) {
    super(id, AgentType.VILLAGER, sim, x, y);
  }

  activate(): Action|null {
    const env = this.senseEnvironment();

    const action = new RandomMove(this);
    return action;
  }
}
