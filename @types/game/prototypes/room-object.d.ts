declare module "game/prototypes" {
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
}
