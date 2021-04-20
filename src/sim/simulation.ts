import {Agent, AgentType} from './agent.js';
import {Location, LocationType} from './location.js';

/**
 * Simulation class is the primary driver of the simulation. It contains all
 * the global state of the simulation and all the agents.
 */
export class Simulation {
  private map: Location[][] = [];
  private agents: Agent[] = [];
  private turnCount = 0;

  public init(map: Location[][] = [], agents: Agent[] = []): void {
    this.map = map;
    this.agents = agents;
  }

  /** Run a simulation step */
  public step(): void {
    this.agents.forEach((a: Agent) => a.activate());

    if (this.map.length > 0) {
      // TODO: Remove this random update
      const randX = Math.floor(Math.random() * this.map.length);
      const randY = Math.floor(Math.random() * this.map[0].length);
      this.map[randX][randY].type = LocationType.VILLAGE;
    }

    this.turnCount++;
  }

  public getMap(): Location[][] {
    return this.map;
  }

  public getTurnCount(): number {
    return this.turnCount;
  }
}

export function initialMap(): Location[][] {
  const map = new Array(50);
  for (let i = 0; i < 50; i++) {
    const row = new Array(50);
    for (let j = 0; j < 50; j++) {
      row[j] = new Location(i, j, LocationType.FOREST);
    }
    map[i] = row;
  }
  return map;
}

export function initialAgents(): Agent[] {
  const agents = [];
  for (let i = 0; i < 10; i++) {
    agents.push(new Agent(`${i}`, AgentType.VILLAGER));
    agents.push(new Agent(`${i + 10}`, AgentType.GOBLIN));
  }
  return agents;
}
