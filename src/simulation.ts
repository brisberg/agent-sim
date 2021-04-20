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
    // TODO: Locations should have correct coordinates
    this.map = new Array(50).fill(
        new Array(50).fill(new Location(1, 1, LocationType.FOREST)));

    this.agents = [];
    for (let i = 0; i < 10; i++) {
      this.agents.push(new Agent(`${i}`, AgentType.VILLAGER));
      this.agents.push(new Agent(`${i + 10}`, AgentType.GOBLIN));
    }
  }

  /** Run a simulation step */
  public step(): void {
    this.agents.forEach((a: Agent) => a.activate());
    this.turnCount++;
  }

  public getMap(): Location[][] {
    return this.map;
  }
}
