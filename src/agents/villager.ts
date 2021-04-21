import {BuildCottage} from '../actions/build-cottage.js';
import {HarvestForest} from '../actions/harvest-forest.js';
import {RandomMove} from '../actions/random-move.js';
import {Action} from '../sim/action.js';
import {Agent} from '../sim/agent.js';
import {TerrainType} from '../sim/location.js';
import {Simulation} from '../sim/simulation.js';

import {Forest} from './forest.js';
import {AgentType} from './index.js';

/** Villager agent seek to build cottages and plant crops. */
export class Villager extends Agent {
  public inventory: {[key: string]: number} = {};

  constructor(id: string, sim: Simulation, x: number, y: number) {
    super(id, AgentType.VILLAGER, sim, x, y);
  }

  activate(): Action|null {
    const env = this.senseEnvironment();

    const localAgents = env.filter((a: Agent) => {
      return a.x === this.x && a.y === this.y;
    });

    if (localAgents.some((a: Agent) => a.type === AgentType.COTTAGE)) {
      // We are in a cozy cottage
      return null;
    }

    if (this.inventory['wood'] >= 6) {
      // We can build our cottage
      if (this.sim.getTerrainAt(this.x, this.y) === TerrainType.PLAINS) {
        console.log(`villager:${this.id} - Built a Cottage!`);
        return new BuildCottage(this);
      }
    } else {
      // Look for a forest
      const forest =
          env.find((a: Agent) => a.type === AgentType.FOREST) as Forest |
          undefined;
      if (forest) {
        console.log(`villager:${this.id} - Harvested a Forest!`);
        return new HarvestForest(this, forest);
      }
    }

    // Random move
    return new RandomMove(this);
  }
}
