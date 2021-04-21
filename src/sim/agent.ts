import {SimEntity} from './entity';
import {Simulation} from './simulation';

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
  public activate(): void {
    console.log(`[${this.type}:${this.id}]: Agent activated`);
  }

  private senseEnvironment(): Agent[] {
    return this.sim.getAgentsAt(this.x, this.y);
  }
}

export enum AgentType {
  VILLAGER = 'villager',
  GOBLIN = 'goblin',
}
