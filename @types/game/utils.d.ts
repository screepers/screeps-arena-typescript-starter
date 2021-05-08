declare module "game/utils" {
  import { FindPathOpts, FindPathResult, RoomPosition, TERRAIN_SWAMP, TERRAIN_WALL } from "game";

  // TODO: fix types

  /**
   * Get count of game ticks passed since the start of the game
   */
  export function getTime(): number;
  /**
   * Get an object with the specified unique ID.
   * @param id
   */
  export function getObjectById(id: any): any;
  /**
   * Get all objects in the game.
   */
  export function getObjects(): any;
  /**
   * Get all objects in the game with the specified prototype, for example, all creeps
   * @param prototype
   */
  export function getObjectsByPrototype<T>(prototype: T): T[];
  /**
   * Use this method to get heap statistics for your virtual machine
   */
  export function getHeapStatistics(): any;
  /**
   * Get linear direction by differences of x and y
   * @param dx
   * @param dy
   */
  export function getDirection(dx: any, dy: any): any;

  /**
   * Find an optimal path between fromPos and toPos. Unlike searchPath,
   * findPath avoid all obstacles by default (unless costMatrix is specified).
   * @param fromPos
   * @param toPos
   * @param opts object containing additional options:
   * ignore: array (objects which should be treated as obstacles during the search)
   * Any options supported by searchPath method
   */
  export function findPath(fromPos: RoomPosition, toPos: RoomPosition, opts?: FindPathOpts): FindPathResult;

  /**
   * Get linear range between two objects. a and b may be any object containing x and y properties.
   * @param a
   * @param b
   */
  export function getDistance(a: any, b: any): number;

  /**
   * Get an integer representation of the terrain at the given position.
   * Returns TERRAIN_WALL, TERRAIN_SWAMP, or 0.
   * @param pos pos should be an object containing x and y properties
   */
  export function getTerrainAt(pos: RoomPosition): TERRAIN_WALL | TERRAIN_SWAMP | 0;
}
