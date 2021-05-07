/* eslint-disable @typescript-eslint/naming-convention */
declare module "game" {
  // Body Part Constants

  type BodyPartConstant = MOVE | WORK | CARRY | ATTACK | RANGED_ATTACK | TOUGH | HEAL | CLAIM;

  type MOVE = "move";
  type WORK = "work";
  type CARRY = "carry";
  type ATTACK = "attack";
  type RANGED_ATTACK = "ranged_attack";
  type TOUGH = "tough";
  type HEAL = "heal";
  type CLAIM = "claim";

  const MOVE: MOVE;
  const WORK: WORK;
  const CARRY: CARRY;
  const ATTACK: ATTACK;
  const RANGED_ATTACK: RANGED_ATTACK;
  const TOUGH: TOUGH;
  const HEAL: HEAL;
  const CLAIM: CLAIM;

  function findPath(fromPos: any, toPos: any, opts?: {}): any;
  function getDirection(dx: any, dy: any): any;
  function getDistance(a: any, b: any): number;
  function getHeapStatistics(): any;
  function getObjectById(id: any): any;
  function getObjects(): any;
  function getObjectsByPrototype(prototype: any): any;
  function getTime(): any;
  function searchPath(origin: any, goal: any, options: any): any;
  const ATTACK_POWER: 30;
  const BODYPART_HITS: 100;
  const BOTTOM: 5;
  const BOTTOM_LEFT: 6;
  const BOTTOM_RIGHT: 4;
  interface BodyPart extends RoomObject {
    type(): any;
    ticksToDecay(): number;
  }
  const CARRY_CAPACITY: 50;
  interface CostMatrix {
    deserialize(data: any): any;
    _bits: Uint8Array;
    set(xx: any, yy: any, val: any): void;
    get(xx: any, yy: any): number;
    clone(): CostMatrix;
    serialize(): any;
  }

  interface _Constructor<T> {
    readonly prototype: T;
  }

  type _ConstructorById<T> = _Constructor<T>;

  interface RoomPosition {
    /**
     * X position in the room.
     */
    x: number;
    /**
     * Y position in the room.
     */
    y: number;
  }

  interface Creep extends RoomObject {
    readonly prototype: Creep;
    hits: any;
    hitsMax: any;
    my: boolean;
    body: Array<{ type: string; hits: number }>;
    move(direction: any): any;
    moveTo(target: RoomPosition | { pos: RoomPosition }, opts?: any): any;
    rangedAttack(target: any): any;
    rangedMassAttack(): any;
    attack(target: any): any;
    heal(target: any): any;
    rangedHeal(target: any): any;
    pull(target: any): any;
  }

  interface CreepConstructor extends _Constructor<Creep>, _ConstructorById<Creep> {}

  const Creep: CreepConstructor;

  const ERR_BUSY: -4;
  const ERR_FULL: -8;
  const ERR_INVALID_ARGS: -10;
  const ERR_INVALID_TARGET: -7;
  const ERR_NAME_EXISTS: -3;
  const ERR_NOT_ENOUGH_ENERGY: -6;
  const ERR_NOT_ENOUGH_EXTENSIONS: -6;
  const ERR_NOT_ENOUGH_RESOURCES: -6;
  const ERR_NOT_FOUND: -5;
  const ERR_NOT_IN_RANGE: -9;
  const ERR_NOT_OWNER: -1;
  const ERR_NO_BODYPART: -12;
  const ERR_NO_PATH: -2;
  const ERR_TIRED: -11;

  const HEAL_POWER: 12;
  const LEFT: 7;
  const OBSTACLE_OBJECT_TYPES: any;
  const tower: any;
  const constructedWall: any;
  const OK: 0;
  const RANGED_ATTACK_DISTANCE_RATE: any[];
  const RANGED_ATTACK_POWER: 10;
  const RANGED_HEAL_POWER: 4;
  const RIGHT: 3;
  const ROAD_WEAROUT: 1;
  interface RoomObject extends RoomPosition {
    // constructor(id: any);
    exists: boolean;
    x: any;
    y: any;
    findPathTo(pos: any, opts: any): any;
    toJSON(): {
      id: any;
      x: any;
      y: any;
    };
  }
  interface Spawn extends RoomObject {
    hits: any;
    my: boolean;
    spawnCreep(body: any): Creep;
  }
  interface StructureTower extends RoomObject {
    hits: any;
    hitsMax: any;
    my: boolean;
    store: {
      energy: any;
      getCapacity(): any;
    };
    attack(target: any): any;
    heal(target: any): any;
  }

  interface StructureTowerConstructor extends _Constructor<StructureTower>, _ConstructorById<StructureTower> {}

  const StructureTower: StructureTowerConstructor;

  interface StructureWall extends RoomObject {
    hits: any;
    hitsMax: any;
  }
  const TERRAIN_MASK_SWAMP: 2;
  const TERRAIN_MASK_WALL: 1;
  const TOP: 1;
  const TOP_LEFT: 8;
  const TOP_RIGHT: 2;
  const TOWER_CAPACITY: 1000;
  const TOWER_ENERGY_COST: 10;
  const TOWER_FALLOFF: 0.75;
  const TOWER_FALLOFF_RANGE: 20;
  const TOWER_HITS: 3000;
  const TOWER_OPTIMAL_RANGE: 5;
  const TOWER_POWER_ATTACK: 600;
  const TOWER_POWER_HEAL: 400;
  const TOWER_POWER_REPAIR: 800;
  const TOWER_RANGE: 50;
}
