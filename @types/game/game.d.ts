declare module "game" {
  export type BodyPartConstant = MOVE | WORK | CARRY | ATTACK | RANGED_ATTACK | TOUGH | HEAL | CLAIM;

  export type MOVE = "move";
  export type WORK = "work";
  export type CARRY = "carry";
  export type ATTACK = "attack";
  export type RANGED_ATTACK = "ranged_attack";
  export type TOUGH = "tough";
  export type HEAL = "heal";
  export type CLAIM = "claim";

  export const MOVE: MOVE;
  export const WORK: WORK;
  export const CARRY: CARRY;
  export const ATTACK: ATTACK;
  export const RANGED_ATTACK: RANGED_ATTACK;
  export const TOUGH: TOUGH;
  export const HEAL: HEAL;
  export const CLAIM: CLAIM;

  export type DirectionConstant = TOP | TOP_RIGHT | RIGHT | BOTTOM_RIGHT | BOTTOM | BOTTOM_LEFT | LEFT | TOP_LEFT;

  export type TOP = 1;
  export type TOP_RIGHT = 2;
  export type RIGHT = 3;
  export type BOTTOM_RIGHT = 4;
  export type BOTTOM = 5;
  export type BOTTOM_LEFT = 6;
  export type LEFT = 7;
  export type TOP_LEFT = 8;

  export const TOP: TOP;
  export const TOP_RIGHT: TOP_RIGHT;
  export const RIGHT: RIGHT;
  export const BOTTOM_RIGHT: BOTTOM_RIGHT;
  export const BOTTOM: BOTTOM;
  export const BOTTOM_LEFT: BOTTOM_LEFT;
  export const LEFT: LEFT;
  export const TOP_LEFT: TOP_LEFT;

  export * from "game/utils";
  export * from "game/path-finder";

  export * from "game/prototypes";

  // constants
  export const CARRY_CAPACITY: 50;

  export const ERR_BUSY: -4;
  export const ERR_FULL: -8;
  export const ERR_INVALID_ARGS: -10;
  export const ERR_INVALID_TARGET: -7;
  export const ERR_NAME_EXISTS: -3;
  export const ERR_NOT_ENOUGH_ENERGY: -6;
  export const ERR_NOT_ENOUGH_EXTENSIONS: -6;
  export const ERR_NOT_ENOUGH_RESOURCES: -6;
  export const ERR_NOT_FOUND: -5;
  export const ERR_NOT_IN_RANGE: -9;
  export const ERR_NOT_OWNER: -1;
  export const ERR_NO_BODYPART: -12;
  export const ERR_NO_PATH: -2;
  export const ERR_TIRED: -11;
  export const OK: 0;

  export const HEAL_POWER: 12;
  export const OBSTACLE_OBJECT_TYPES: any;
  export const tower: any;
  export const constructedWall: any;
  export const RANGED_ATTACK_DISTANCE_RATE: any[];
  export const RANGED_ATTACK_POWER: 10;
  export const RANGED_HEAL_POWER: 4;
  export const ROAD_WEAROUT: 1;

  export const TERRAIN_MASK_SWAMP: 2;
  export const TERRAIN_MASK_WALL: 1;
  export const TOWER_CAPACITY: 1000;
  export const TOWER_ENERGY_COST: 10;
  export const TOWER_FALLOFF: 0.75;
  export const TOWER_FALLOFF_RANGE: 20;
  export const TOWER_HITS: 3000;
  export const TOWER_OPTIMAL_RANGE: 5;
  export const TOWER_POWER_ATTACK: 600;
  export const TOWER_POWER_HEAL: 400;
  export const TOWER_POWER_REPAIR: 800;
  export const TOWER_RANGE: 50;
}
