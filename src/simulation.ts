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

  public init(): void {
    this.map = new Array(50);
    for (let i = 0; i < 50; i++) {
      const row = new Array(50);
      for (let j = 0; j < 50; j++) {
        row[j] = new Location(i, j, LocationType.FOREST);
      }
      this.map[i] = row;
    }

    this.agents = [];
    for (let i = 0; i < 10; i++) {
      this.agents.push(new Agent(`${i}`, AgentType.VILLAGER));
      this.agents.push(new Agent(`${i + 10}`, AgentType.GOBLIN));
    }
  }

  /** Run a simulation step */
  public step(): void {
    this.agents.forEach((a: Agent) => a.activate());
    // TODO: Remove this random update
    const randX = Math.floor(Math.random() * 50);
    const randY = Math.floor(Math.random() * 50);
    this.map[randX][randY].type = LocationType.VILLAGE;
    this.turnCount++;
  }

  public getMap(): Location[][] {
    return this.map;
  }

  public getTurnCount(): number {
    return this.turnCount;
  }
}
