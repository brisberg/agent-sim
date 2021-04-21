import {Action} from './action.js';
import {Agent, AgentType} from './agent.js';
import {Terrain, TerrainType} from './location.js';

/**
 * Simulation class is the primary driver of the simulation. It contains all
 * the global state of the simulation and all the agents.
 */
export class Simulation {
  private map: TerrainType[][] = [];
  private agents: Agent[] = [];
  private turnCount = 0;

  public init(map: TerrainType[][] = [], agents: Agent[] = []): void {
    this.map = map;
    this.agents = agents;
  }

  /** Run a simulation step */
  public step(): void {
    this.agents.forEach((a: Agent) => {
      const action = a.activate();
      if (action) {
        this.executeAction(action);
      }
    });

    if (this.map.length > 0) {
      // TODO: Remove this random update
      const randX = Math.floor(Math.random() * this.map.length);
      const randY = Math.floor(Math.random() * this.map[0].length);
      this.map[randX][randY] = TerrainType.WATER;
    }

    this.turnCount++;
  }

  private executeAction(action: Action): void {
    action.execute(this);
  }

  public getMap(): TerrainType[][] {
    return this.map;
  }

  public getTerrainAt(x: number, y: number): TerrainType {
    return this.map[x][y];
  }

  public getTurnCount(): number {
    return this.turnCount;
  }

  public getAgents(): Agent[] {
    return this.agents;
  }

  public getAgentsAt(x: number, y: number): Agent[] {
    return this.agents.filter((a: Agent) => a.x === x && a.y === y);
  }
}

export function initialMap(): TerrainType[][] {
  const map = new Array<TerrainType[]>(50);
  for (let i = 0; i < 50; i++) {
    const row = new Array<TerrainType>(50);
    for (let j = 0; j < 50; j++) {
      row[j] = TerrainType.LOWLAND;
    }
    map[i] = row;
  }
  return map;
}

export function initialAgents(sim: Simulation): Agent[] {
  const agents = [];
  for (let i = 0; i < 10; i++) {
    agents.push(new Agent(`${i}`, AgentType.VILLAGER, sim, i, 0));
    agents.push(new Agent(`${i + 10}`, AgentType.GOBLIN, sim, i, 20));
  }
  return agents;
}
