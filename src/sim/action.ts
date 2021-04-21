import {Agent} from './agent.js';
import {Simulation} from './simulation.js';

/** Action base class for all actions Agents can perform. */
export abstract class Action {
  constructor(public readonly initiator: Agent) {}

  public abstract execute(sim: Simulation): void;
}
