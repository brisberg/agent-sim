import {Cottage} from '../agents/cottage.js';
import {Villager} from '../agents/villager.js';
import {Action} from '../sim/action.js';
import {Simulation} from '../sim/simulation.js';

/** Build Cottage Action */
export class BuildCottage extends Action {
  constructor(initiator: Villager) {
    super(initiator);
  }

  public execute(sim: Simulation): void {
    const villager = this.initiator as Villager;
    const currentWood = villager.inventory['wood'] || 0;
    villager.inventory['wood'] = currentWood - 6;

    sim.addAgent(new Cottage(
        `c${Math.floor(Math.random() * 1000)}`, sim, villager.x, villager.y));
  }
}
