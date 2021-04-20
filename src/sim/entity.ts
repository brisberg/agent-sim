import {Positionable} from './positionable';
import {Simulation} from './simulation';

/** SimEntity is the base class for all entities managed by the simulation. */
export abstract class SimEntity implements Positionable {
  public constructor(
      private sim: Simulation, public x: number, public y: number) {}

  /**
   * Activate will run any behavior associated with this entity and potentially
   * update the world.
   */
  abstract activate(): void;
}
