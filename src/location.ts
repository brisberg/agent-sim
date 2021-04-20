/**
 * Location represents a single cell in the simulation map. Locations can have
 * different types, attributes, and other features. Multiple agents can occupy
 * the same location at once.
 */
export class Location {
  public constructor(
      public readonly x: number, public readonly y: number,
      public type: LocationType) {}
}

export enum LocationType {
  VILLAGE = 'village',
  FOREST = 'forest',
  ROAD = 'road',
}
