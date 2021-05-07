

declare module "game/utils" {

    // TODO: fix types

    /**
     * Get count of game ticks passed since the start of the game
     */
    export function getTime(): number;
    export function getObjectById(id: any): any;
    export function getObjects(): any;
    export function getObjectsByPrototype(prototype: any): any;
    export function getHeapStatistics(): any;
    export function getDirection(dx: any, dy: any): any;

    // eslint-disable-next-line @typescript-eslint/ban-types
    export function findPath(fromPos: any, toPos: any, opts?: {}): any;
    export function getDistance(a: any, b: any): number;

}
