/**
 * Terrain represents a single cell in the simulation map. Terrain can have
 * different types, attributes, and other features. Multiple agents can occupy
 * the same location at once.
 */
export class Terrain {
  public constructor(
      public readonly type: TerrainType,
      public readonly moveCost: number,
  ) {}
}

export enum TerrainType {
  PLAINS = 'plains',
  LOWLAND = 'lowland',
  MOUNTAIN = 'mountain',
  WATER = 'water',
}

export const AllTerrain: {[type in TerrainType]: Terrain} = {
  [TerrainType.PLAINS]: new Terrain(TerrainType.PLAINS, 1),
  [TerrainType.LOWLAND]: new Terrain(TerrainType.LOWLAND, 2),
  [TerrainType.MOUNTAIN]: new Terrain(TerrainType.MOUNTAIN, 10),
  [TerrainType.WATER]: new Terrain(TerrainType.WATER, 99),
}
