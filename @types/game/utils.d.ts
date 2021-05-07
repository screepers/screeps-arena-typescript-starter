declare module "game" {
  module "utils" {
    // TODO: fix types

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
  }
}
