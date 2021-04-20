/**
 * Agent class represents a single entity in the simulation. Agents have
 * behavior rules and senses. When agents are activated they will make changes
 * to themselves or the environment.
 */
export class Agent {
  public constructor(
      public readonly id: string, public readonly type: AgentType) {}

  public activate(): void {
    console.log(`[${this.type}:${this.id}]: Agent activated`);
  }
}

export enum AgentType {
  VILLAGER = 'villager',
  GOBLIN = 'goblin',
}
