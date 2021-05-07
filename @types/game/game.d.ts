declare module "game" {
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

  type DirectionConstant = TOP | TOP_RIGHT | RIGHT | BOTTOM_RIGHT | BOTTOM | BOTTOM_LEFT | LEFT | TOP_LEFT;

  type TOP = 1;
  type TOP_RIGHT = 2;
  type RIGHT = 3;
  type BOTTOM_RIGHT = 4;
  type BOTTOM = 5;
  type BOTTOM_LEFT = 6;
  type LEFT = 7;
  type TOP_LEFT = 8;

  const TOP: TOP;
  const TOP_RIGHT: TOP_RIGHT;
  const RIGHT: RIGHT;
  const BOTTOM_RIGHT: BOTTOM_RIGHT;
  const BOTTOM: BOTTOM;
  const BOTTOM_LEFT: BOTTOM_LEFT;
  const LEFT: LEFT;
  const TOP_LEFT: TOP_LEFT;

  // prototypes/prototypes.d.ts
  interface _Constructor<T> {
    readonly prototype: T;
  }

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

  // prototypes/room-objects.d.ts
  interface RoomObject extends RoomPosition {
    // constructor(id: any);
    /**
     * Returns true if this object is live in the game at the moment. Check this property to verify cached or newly created object instances.
     */
    exists: boolean;
    x: any;
    y: any;
    /**
     * Returns the path from this object to another position. pos can be any object containing x and y properties. See /game/utils::findPath for details.
     * @param pos
     * @param opts
     */
    findPathTo(pos: any, opts: any): any;
    toJSON(): {
      id: any;
      x: any;
      y: any;
    };
  }

  // prototypes/creep.d.ts
  interface Creep extends RoomObject {
    readonly prototype: Creep;
    /**
     * The current amount of hit points of the creep.
     */
    hits: number;
    /**
     * The maximum amount of hit points of the creep.
     */
    hitsMax: number;
    /**
     * Whether it is your creep.
     */
    my: boolean;
    /**
     * Fatigue indicator of the creep. It can move only when fatigue equals to 0.
     */
    fatigue: number;
    /**
     * An array describing the creep’s body. Each element contains the following properties:
     *     type: string (One of the body part types constants)
     *     hits: number (The remaining amount of hit points of this body part)
     */
    body: { type: BodyPartConstant; hits: number }[];
    /**
     * Move the creep one square in the specified direction. direction must be one of the following constants:
     * @param direction
     */
    move(direction: DirectionConstant): any;
    /**
     * Find the optimal path to the target within the same room and move to it.
     * A shorthand to consequent calls of findPathTo() and move() methods.
     * @param target target can be any object containing x and y properties.
     * @param opts opts is an optional object containing additional options. See /game/utils::findPath for details.
     */
    moveTo(target: RoomPosition, opts?: any): any;
    /**
     * A ranged attack against another creep or structure. Requires the RANGED_ATTACK body part.
     * The target has to be within 3 squares range of the creep.
     * @param target
     */
    rangedAttack(target: any): any;
    /**
     * A ranged attack against all hostile creeps or structures within 3 squares range.
     * Requires the RANGED_ATTACK body part.
     * The attack power depends on the range of each target.
     * Friendly units are not affected.
     */
    rangedMassAttack(): any;
    /**
     * Attack another creep or structure in a short-ranged attack.
     * Requires the ATTACK body part.
     * The target has to be at an adjacent square to the creep.
     * @param target
     */
    attack(target: any): any;
    /**
     * Heal self or another creep.
     * It will restore the target creep’s damaged body parts function and increase the hits counter.
     * Requires the HEAL body part.
     * The target has to be at an adjacent square to the creep.
     * @param target
     */
    heal(target: any): any;
    /**
     * Heal another creep at a distance.
     * It will restore the target creep’s damaged body parts function and increase the hits counter.
     * Requires the HEAL body part.
     * The target has to be within 3 squares range of the creep.
     * @param target
     */
    rangedHeal(target: any): any;
    pull(target: any): any;
  }

  //   interface CreepConstructor extends _Constructor<Creep> {}
  // const Creep: CreepConstructor;
  const Creep: Creep;

  // prototypes/tower.d.ts
  interface StructureTower extends RoomObject {
    /**
     * The current amount of hit points of the tower.
     */
    hits: number;
    /**
     * The maximum amount of hit points of the tower.
     */
    hitsMax: number;
    /**
     * Returns true for your tower, false for a hostile tower, undefined for a neutral tower.
     */
    my: boolean;
    /**
     * An object that contains a cargo of this structure. Towers can contain only energy.
     */
    store: {
      energy: any;
      getCapacity(): any;
    };
    /**
     * Remotely attack any creep or structure.
     * The target has to be within 50 squares range of the tower.
     * @param target
     */
    attack(target: any): any;
    /**
     * Remotely heal any creep.
     * The target has to be within 50 squares range of the tower.
     * @param target
     */
    heal(target: any): any;
  }
  // interface StructureTowerConstructor extends _Constructor<StructureTower>, _ConstructorById<StructureTower> {}

  // const StructureTower: StructureTowerConstructor;
  const StructureTower: StructureTower;

  // prototypes/wall.d.ts
  interface StructureWall extends RoomObject {
    /**
     * The current amount of hit points of the wall.
     */
    hits: number;
    /**
     * The maximum amount of hit points of the wall.
     */
    hitsMax: number;
  }
  const StructureWall: StructureWall;

  // utils.d.ts
  /**
   * Get count of game ticks passed since the start of the game
   */
  function getTime(): number;
  function getObjectById(id: any): any;
  function getObjects(): any;
  function getObjectsByPrototype(prototype: any): any;
  function getHeapStatistics(): any;
  function getDirection(dx: any, dy: any): any;

  // eslint-disable-next-line @typescript-eslint/ban-types
  function findPath(fromPos: any, toPos: any, opts?: {}): any;
  function getDistance(a: any, b: any): number;

  // path-finder.d.ts
  // TODO: type this
  function searchPath(origin: any, goal: any, options: any): any;

  // TODO: type this
  interface CostMatrix {
    deserialize(data: any): any;
    _bits: Uint8Array;
    set(xx: any, yy: any, val: any): void;
    get(xx: any, yy: any): number;
    clone(): CostMatrix;
    serialize(): any;
  }

  // constants
  const CARRY_CAPACITY: 50;

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
  const OK: 0;

  const HEAL_POWER: 12;
  const OBSTACLE_OBJECT_TYPES: any;
  const tower: any;
  const constructedWall: any;
  const RANGED_ATTACK_DISTANCE_RATE: any[];
  const RANGED_ATTACK_POWER: 10;
  const RANGED_HEAL_POWER: 4;
  const ROAD_WEAROUT: 1;

  const TERRAIN_MASK_SWAMP: 2;
  const TERRAIN_MASK_WALL: 1;
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
