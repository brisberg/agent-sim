import {AgentType} from '../agents/index.js';
import {Action} from './action.js';
import {SimEntity} from './entity.js';
import {Simulation} from './simulation.js';

/**
 * Agent class represents a single entity in the simulation. Agents have
 * behavior rules and senses. When agents are activated they will make changes
 * to themselves or the environment.
 */
export abstract class Agent extends SimEntity {
  public constructor(
      public readonly id: string,
      public readonly type: AgentType,
      sim: Simulation,
      x: number,
      y: number,
  ) {
    super(sim, x, y);
  }

  /** @override */
  abstract activate(): Action|null;

  protected senseEnvironment(): Agent[] {
    return this.sim.getAgentsAt(this.x, this.y);
  }
}
