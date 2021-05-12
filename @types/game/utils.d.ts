/* eslint-disable camelcase */
declare module "game/utils" {
  import { DirectionConstant, TERRAIN_SWAMP, TERRAIN_WALL } from "game/constants";
  import { FindPathOpts, PathStep } from "game/path-finder";
  import { Id, RoomObject, RoomPosition, _Constructor } from "game/prototypes";

  /**
   * Get count of game ticks passed since the start of the game
   */
  export function getTime(): number;
  /**
   * Get an object with the specified unique ID.
   * @param id
   */
  export function getObjectById<T>(id: Id<T>): T | null;
  /**
   * Get all objects in the game.
   */
  export function getObjects(): RoomObject[];
  /**
   * Get all objects in the game with the specified prototype, for example, all creeps
   * @param prototype
   */
  export function getObjectsByPrototype<T>(prototype: _Constructor<T>): T[];
  /**
   * Use this method to get heap statistics for your virtual machine
   */
  export function getHeapStatistics(): HeapStatistics;
  /**
   * Get linear direction by differences of x and y
   * @param dx
   * @param dy
   */
  export function getDirection(dx: number, dy: number): DirectionConstant;

  /**
   * Find an optimal path between fromPos and toPos. Unlike searchPath,
   * findPath avoid all obstacles by default (unless costMatrix is specified).
   * @param fromPos
   * @param toPos
   * @param opts object containing additional options:
   * ignore: array (objects which should be treated as obstacles during the search)
   * Any options supported by searchPath method
   */
  export function findPath(fromPos: RoomPosition, toPos: RoomPosition, opts?: FindPathOpts): PathStep[];

  /**
   * Get linear range between two objects. a and b may be any object containing x and y properties.
   * @param a
   * @param b
   */
  export function getDistance(a: RoomPosition, b: RoomPosition): number;

  /**
   * Get an integer representation of the terrain at the given position.
   * Returns TERRAIN_WALL, TERRAIN_SWAMP, or 0.
   * @param pos pos should be an object containing x and y properties
   */
  export function getTerrainAt(pos: RoomPosition): TERRAIN_WALL | TERRAIN_SWAMP | 0;

  export interface HeapStatistics {
    total_heap_size: number;
    total_heap_size_executable: number;
    total_physical_size: number;
    total_available_size: number;
    used_heap_size: number;
    heap_size_limit: number;
    malloced_memory: number;
    peak_malloced_memory: number;
    does_zap_garbage: 0 | 1;
    externally_allocated_size: number;
  }
}
