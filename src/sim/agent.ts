import {Action, RandomMove} from './action.js';
import {SimEntity} from './entity.js';
import {Simulation} from './simulation.js';

/**
 * Agent class represents a single entity in the simulation. Agents have
 * behavior rules and senses. When agents are activated they will make changes
 * to themselves or the environment.
 */
export class Agent extends SimEntity {
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
  public activate() {
    console.log(`[${this.type}:${this.id}]: Agent activated`);
    const env = this.senseEnvironment();

    const action = new RandomMove(this);
    this.executeAction(action);
  }

  private senseEnvironment(): Agent[] {
    return this.sim.getAgentsAt(this.x, this.y);
  }

  protected executeAction(action: Action): void {
    action.execute(this.sim);
  }
}

export enum AgentType {
  VILLAGER = 'villager',
  GOBLIN = 'goblin',
}
