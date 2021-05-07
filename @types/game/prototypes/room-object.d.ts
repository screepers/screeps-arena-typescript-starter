declare module "game/prototypes" {
  import { FindPathOpts, PathStep, RoomPosition } from "game";
  export interface RoomObject extends RoomPosition {
    // constructor(id: any);
    /**
     * Returns true if this object is live in the game at the moment. Check this property to verify cached or newly created object instances.
     */
    exists: boolean;

    /**
     * Returns the path from this object to another position. pos can be any object containing x and y properties. See /game/utils::findPath for details.
     * @param pos
     * @param opts
     */
    findPathTo(pos: RoomPosition, opts: FindPathOpts): PathStep[];
    toJSON(): {
      id: any;
      x: any;
      y: any;
    };
  }
}
