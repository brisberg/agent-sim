import {SimEntity} from './entity';
import {Simulation} from './simulation';

/**
 * Location represents a single cell in the simulation map. Locations can have
 * different types, attributes, and other features. Multiple agents can occupy
 * the same location at once.
 */
export class Location extends SimEntity {
  public constructor(
      public readonly x: number,
      public readonly y: number,
      public type: LocationType,
      sim: Simulation,
  ) {
    super(sim, x, y);
  }

  activate(): void {
    return;
  }
}

export enum LocationType {
  VILLAGE = 'village',
  FOREST = 'forest',
  ROAD = 'road',
}
