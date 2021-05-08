game
export const ATTACK = attack
export const ATTACK_POWER = 30
export const BODYPART_HITS = 100
export const BOTTOM = 5
export const BOTTOM_LEFT = 6
export const BOTTOM_RIGHT = 4
export class BodyPart extends RoomObject {
    get type() {
        if(!this.exists) {
            return;
        }
        return SystemStore.roomObjectsData[this.id].bodyPartType;
    }

    get ticksToDecay() {
        if(!this.exists) {
            return;
        }
        return SystemStore.roomObjectsData[this.id].decayTime - SystemStore.time;
    }

    toJSON() {
        return Object.assign(super.toJSON(), {
            type: this.type
        })
    }
}
export const CARRY = carry
export const CARRY_CAPACITY = 50
export class CostMatrix {
    constructor() {
        this._bits = new Uint8Array(SystemStore.arenaSize * SystemStore.arenaSize);
    }

    set(xx, yy, val) {
        xx = xx|0;
        yy = yy|0;
        this._bits[xx * SystemStore.arenaSize + yy] = Math.min(Math.max(0, val), 255);
    }

    get(xx, yy) {
        xx = xx|0;
        yy = yy|0;
        return this._bits[xx * SystemStore.arenaSize + yy];
    }

    clone() {
        var newMatrix = new CostMatrix;
        newMatrix._bits = new Uint8Array(this._bits);
        return newMatrix;
    }

    serialize() {
        return Array.prototype.slice.apply(new Uint32Array(this._bits.buffer));
    }

    static deserialize(data) {
        let instance = Object.create(CostMatrix.prototype);
        instance._bits = new Uint8Array(new Uint32Array(data).buffer);
        return instance;
    }
}
export class Creep extends RoomObject {

    get hits() {
        if(!this.exists) {
            return;
        }
        return SystemStore.roomObjectsData[this.id].hits;
    }

    get hitsMax() {
        if(!this.exists) {
            return;
        }
        return SystemStore.roomObjectsData[this.id].hitsMax;
    }

    get my() {
        if(!this.exists) {
            return;
        }
        return SystemStore.roomObjectsData[this.id].user === SystemStore.playerName;
    }

    get fatigue() {
        if(!this.exists) {
            return;
        }
        return SystemStore.roomObjectsData[this.id].fatigue;
    }

    get body() {
        if(!this.exists) {
            return;
        }
        return SystemStore.roomObjectsData[this.id].body;
    }

    toJSON() {
        return Object.assign(super.toJSON(), {
            hits: this.hits,
            hitsMax: this.hitsMax,
            my: this.my,
            fatigue: this.fatigue,
            body: this.body,
        })
    }

    move(direction) {
        if(!this.exists) {
            return;
        }
        if(!this.my) {
            return C.ERR_NOT_OWNER;
        }
        Intents.set(this.id, 'move', {direction});
        return C.OK;
    }

    moveTo(x, y, opts) {
        if(typeof x === 'object') {
            opts = y;
            y = x.y;
            x = x.x;
        }
        const path = this.findPathTo({x, y}, opts);
        if(path.length > 0) {
            let direction = getDirection(path[0].x - this.x, path[0].y - this.y);
            return this.move(direction);
        }
    }

    rangedAttack(target) {
        if(!this.exists) {
            return;
        }

        if(!this.my) {
            return C.ERR_NOT_OWNER;
        }

        if(!target || !target.exists || !(target instanceof RoomObject)) {
            return C.ERR_INVALID_TARGET;
        }

        if(!this.body.some(p => p.type === C.RANGED_ATTACK && p.hits > 0)) {
            return C.ERR_NO_BODYPART;
        }

        if(getDistance(this, target) > 3) {
            return C.ERR_NOT_IN_RANGE;
        }

        Intents.set(this.id, 'rangedAttack', {id: target.id});
        return C.OK;
    }

    rangedMassAttack() {
        if(!this.exists) {
            return;
        }

        if(!this.my) {
            return C.ERR_NOT_OWNER;
        }

        if(!this.body.some(p => p.type === C.RANGED_ATTACK && p.hits > 0)) {
            return C.ERR_NO_BODYPART;
        }

        Intents.set(this.id, 'rangedMassAttack', {});
        return C.OK;
    }

    attack(target) {
        if(!this.exists) {
            return;
        }

        if(!this.my) {
            return C.ERR_NOT_OWNER;
        }

        if(!target || !target.exists || !(target instanceof RoomObject)) {
            return C.ERR_INVALID_TARGET;
        }

        if(!this.body.some(p => p.type === C.ATTACK && p.hits > 0)) {
            return C.ERR_NO_BODYPART;
        }

        if(getDistance(this, target) > 1) {
            return C.ERR_NOT_IN_RANGE;
        }

        Intents.set(this.id, 'attack', {id: target.id});
        return C.OK;
    }

    heal(target) {
        if(!this.exists) {
            return;
        }

        if(!this.my) {
            return C.ERR_NOT_OWNER;
        }

        if(!target || !target.exists || !(target instanceof RoomObject)) {
            return C.ERR_INVALID_TARGET;
        }

        if(!this.body.some(p => p.type === C.HEAL && p.hits > 0)) {
            return C.ERR_NO_BODYPART;
        }

        if(getDistance(this, target) > 1) {
            return C.ERR_NOT_IN_RANGE;
        }

        Intents.set(this.id, 'heal', {id: target.id});
        return C.OK;
    }

    rangedHeal(target) {
        if(!this.exists) {
            return;
        }

        if(!this.my) {
            return C.ERR_NOT_OWNER;
        }

        if(!target || !target.exists || !(target instanceof RoomObject)) {
            return C.ERR_INVALID_TARGET;
        }

        if(!this.body.some(p => p.type === C.HEAL && p.hits > 0)) {
            return C.ERR_NO_BODYPART;
        }

        if(getDistance(this, target) > 3) {
            return C.ERR_NOT_IN_RANGE;
        }

        Intents.set(this.id, 'rangedHeal', {id: target.id});
        return C.OK;
    }


    pull(target) {
        if(!this.exists) {
            return;
        }

        if(!this.my) {
            return C.ERR_NOT_OWNER;
        }

        if(!target || !target.exists || !(target instanceof Creep)) {
            return C.ERR_INVALID_TARGET;
        }

        Intents.set(this.id, 'pull', {id: target.id});
        return C.OK;
    }
}
export const ERR_BUSY = -4
export const ERR_FULL = -8
export const ERR_INVALID_ARGS = -10
export const ERR_INVALID_TARGET = -7
export const ERR_NAME_EXISTS = -3
export const ERR_NOT_ENOUGH_ENERGY = -6
export const ERR_NOT_ENOUGH_EXTENSIONS = -6
export const ERR_NOT_ENOUGH_RESOURCES = -6
export const ERR_NOT_FOUND = -5
export const ERR_NOT_IN_RANGE = -9
export const ERR_NOT_OWNER = -1
export const ERR_NO_BODYPART = -12
export const ERR_NO_PATH = -2
export const ERR_TIRED = -11
export class Flag extends RoomObject {
    get my() {
        if(!this.exists) {
            return;
        }
        if(SystemStore.roomObjectsData[this.id].user) {
            return SystemStore.roomObjectsData[this.id].user === SystemStore.playerName;
        }
        return undefined;
    }

    toJSON() {
        return Object.assign(super.toJSON(), {
            my: this.my
        })
    }
}
export const HEAL = heal
export const HEAL_POWER = 12
export const LEFT = 7
export const MOVE = move
export const OBSTACLE_OBJECT_TYPES = creep,tower,constructedWall
export const OK = 0
export const RANGED_ATTACK = ranged_attack
export const RANGED_ATTACK_DISTANCE_RATE = [object Object]
export const RANGED_ATTACK_POWER = 10
export const RANGED_HEAL_POWER = 4
export const RIGHT = 3
export const ROAD_WEAROUT = 1
export class RoomObject {
    constructor(id) {
        if(id) {
            Object.defineProperty(this, 'id', {
                configurable: false,
                enumerable: true,
                value: id
            });
        }
    }

    get exists() {
        return !!this.id && !!SystemStore.roomObjectsData[this.id];
    }

    get x() {
        if(!this.exists) {
            return;
        }
        return SystemStore.roomObjectsData[this.id].x;
    }

    get y() {
        if(!this.exists) {
            return;
        }
        return SystemStore.roomObjectsData[this.id].y;
    }

    findPathTo(pos, opts) {
        return findPath(this, pos, opts);
    }

    toJSON() {
        return {
            id: this.id,
            x: this.x,
            y: this.y,
        };
    }
}
export class Spawn extends RoomObject {

    get hits() {
        if(!this.exists) {
            return;
        }
        return SystemStore.roomObjectsData[this.id].hits;
    }

    get my() {
        if(!this.exists) {
            return;
        }
        return SystemStore.roomObjectsData[this.id].user === SystemStore.playerName;
    }

    toJSON() {
        return Object.assign(super.toJSON(), {
            hits: this.hits,
            my: this.my
        })
    }

    spawnCreep(body) {
        let creep = new Creep();
        Intents.set(this.id, 'spawnCreep', {body, createRequest: getCreateRequest(creep)});
        return creep;
    }
}
export class StructureTower extends RoomObject {

    get hits() {
        if(!this.exists) {
            return;
        }
        return SystemStore.roomObjectsData[this.id].hits;
    }

    get hitsMax() {
        if(!this.exists) {
            return;
        }
        return SystemStore.roomObjectsData[this.id].hitsMax;
    }

    get my() {
        if(!this.exists) {
            return;
        }
        return SystemStore.roomObjectsData[this.id].user === SystemStore.playerName;
    }

    get store() {
        if(!this.exists) {
            return;
        }
        return {
            energy: SystemStore.roomObjectsData[this.id].store.energy,
            getCapacity() {
                return SystemStore.roomObjectsData[this.id].storeCapacityResource.energy;
            }
        }
    }

    attack(target) {
        if(!this.exists) {
            return;
        }

        if(!this.my) {
            return C.ERR_NOT_OWNER;
        }

        if(!target || !target.exists || !(target instanceof RoomObject)) {
            return C.ERR_INVALID_TARGET;
        }

        if(SystemStore.roomObjectsData[this.id].store.energy < C.TOWER_ENERGY_COST) {
            return C.ERR_NOT_ENOUGH_ENERGY;
        }

        Intents.set(this.id, 'attack', {id: target.id});
        return C.OK;
    }

    heal(target) {
        if(!this.exists) {
            return;
        }

        if(!this.my) {
            return C.ERR_NOT_OWNER;
        }

        if(!target || !target.exists || !(target instanceof RoomObject)) {
            return C.ERR_INVALID_TARGET;
        }

        if(SystemStore.roomObjectsData[this.id].store.energy < C.TOWER_ENERGY_COST) {
            return C.ERR_NOT_ENOUGH_ENERGY;
        }

        Intents.set(this.id, 'heal', {id: target.id});
        return C.OK;
    }

    toJSON() {
        return Object.assign(super.toJSON(), {
            hits: this.hits,
            hitsMax: this.hitsMax,
            my: this.my
        })
    }
}
export class StructureWall extends RoomObject {

    get hits() {
        if(!this.exists) {
            return;
        }
        return SystemStore.roomObjectsData[this.id].hits;
    }

    get hitsMax() {
        if(!this.exists) {
            return;
        }
        return SystemStore.roomObjectsData[this.id].hitsMax;
    }

    toJSON() {
        return Object.assign(super.toJSON(), {
            hits: this.hits,
            hitsMax: this.hitsMax
        })
    }
}
export const TERRAIN_SWAMP = 2
export const TERRAIN_WALL = 1
export const TOP = 1
export const TOP_LEFT = 8
export const TOP_RIGHT = 2
export const TOUGH = tough
export const TOWER_CAPACITY = 1000
export const TOWER_ENERGY_COST = 10
export const TOWER_FALLOFF = 0.75
export const TOWER_FALLOFF_RANGE = 20
export const TOWER_HITS = 3000
export const TOWER_OPTIMAL_RANGE = 5
export const TOWER_POWER_ATTACK = 600
export const TOWER_POWER_HEAL = 400
export const TOWER_POWER_REPAIR = 800
export const TOWER_RANGE = 50
export function findPath(fromPos, toPos, opts = {}) {
    if(!opts.costMatrix) {
        opts.costMatrix = new CostMatrix();
        const ignore = [];
        if(opts.ignore) {
            for(const obj of opts.ignore) {
                if(obj.id) {
                    ignore.push({id: obj.id});
                    continue;
                }
                if(obj.x !== undefined && obj.y !== undefined) {
                    ignore.push({x: obj.x, y: obj.y})
                    continue;
                }
            }
        }
        function block(obj) {
            if(!ignore.some(o => o._id == obj.id || (o.x == obj.x && o.y == obj.y))) {
                opts.costMatrix.set(obj.x, obj.y, 255);
            }
        }
        getObjectsByPrototype(Creep).forEach(block);
        getObjectsByPrototype(StructureTower).forEach(block);
        getObjectsByPrototype(StructureWall).forEach(block);
    }
    const result = searchPath(fromPos, {range: Math.max(1,opts.range || 0), pos: toPos}, opts);
    if(!opts.range &&
        (result.path.length && getDistance(result.path[result.path.length-1], toPos) === 1 ||
            !result.path.length && getDistance(fromPos, toPos) <= 1)) {
        result.path.push({x: toPos.x, y: toPos.y});
    }
    return result.path;
}
export function getDirection (dx, dy) {

    var adx = Math.abs(dx), ady = Math.abs(dy);

    if(adx > ady*2) {
        if(dx > 0) {
            return C.RIGHT;
        }
        else {
            return C.LEFT;
        }
    }
    else if(ady > adx*2) {
        if(dy > 0) {
            return C.BOTTOM;
        }
        else {
            return C.TOP;
        }
    }
    else {
        if(dx > 0 && dy > 0) {
            return C.BOTTOM_RIGHT;
        }
        if(dx > 0 && dy < 0) {
            return C.TOP_RIGHT;
        }
        if(dx < 0 && dy > 0) {
            return C.BOTTOM_LEFT;
        }
        if(dx < 0 && dy < 0) {
            return C.TOP_LEFT;
        }
    }
}
export function getDistance(a, b) {
    return Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y));
}
export function getHeapStatistics() {
    return SystemStore.isolate.getHeapStatisticsSync();
}
export function getObjectById(id) {
    return SystemStore.roomObjectsById[id];
}
export function getObjects() {
    return Array.from(SystemStore.roomObjects);
}
export function getObjectsByPrototype(prototype) {
    return Array.from(SystemStore.roomObjectsByPrototype.get(prototype) || []);
}
export function getTerrainAt({x, y}) {
    const value = SystemStore.terrain[y * SystemStore.arenaSize + x];
    return (value & C.TERRAIN_WALL) || (value & C.TERRAIN_SWAMP) || 0;
}
export function getTime() {
    return SystemStore.time;
}
export function searchPath (origin, goal, options) {

    // Options
    options = options || {};
    let plainCost = Math.min(254, Math.max(1, (options.plainCost | 0) || 1));
    let swampCost = Math.min(254, Math.max(1, (options.swampCost | 0) || 5));
    let heuristicWeight = Math.min(9, Math.max(1, options.heuristicWeight || 1.2));
    let maxOps = Math.max(1, (options.maxOps | 0) || 50000);
    let maxCost = Math.max(1, (options.maxCost | 0) || 0xffffffff);
    let flee = !!options.flee;

    // Convert one-or-many goal into standard format for native extension
    let goals = (Array.isArray(goal) ? goal : [goal]).map(function (goal) {
        if (goal.x !== undefined && goal.y !== undefined) {
            return {
                range: 0,
                pos: toWorldPosition(goal),
            };
        } else {
            let range = Math.max(0, goal.range | 0);
            return {
                range: range,
                pos: toWorldPosition(goal.pos),
            };
        }
    });

    // Setup room callback
    let cb;
    if(options.costMatrix && options.costMatrix instanceof CostMatrix) {
        cb = function() {
            return options.costMatrix._bits;
        };
    }

    // Invoke native code
    let ret = SystemStore.nativeMod.search(toWorldPosition(origin), goals, cb, plainCost, swampCost, 1, maxOps, maxCost, flee, heuristicWeight);
    if (ret === undefined) {
        return {path: [], ops: 0, cost: 0, incomplete: false};
    } else if (ret === -1) {
        return {path: [], ops: 0, cost: 0, incomplete: true};
    }
    ret.path = ret.path.map(fromWorldPosition).reverse();
    return ret;
}
