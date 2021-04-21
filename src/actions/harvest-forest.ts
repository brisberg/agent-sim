import {Forest} from '../agents/forest.js';
import {Villager} from '../agents/villager.js';
import {Action} from '../sim/action.js';
import {Simulation} from '../sim/simulation.js';

/** Harvest Forest Action */
export class HarvestForest extends Action {
  constructor(initiator: Villager, public readonly forest: Forest) {
    super(initiator);
  }

  public execute(sim: Simulation): void {
    this.forest.wood--;
    const villager = this.initiator as Villager;
    const currentWood = villager.inventory['wood'] || 0;
    villager.inventory['wood'] = currentWood + 1;

    if (this.forest.wood <= 0) {
      sim.removeAgent(this.forest);
    }
  }
}
