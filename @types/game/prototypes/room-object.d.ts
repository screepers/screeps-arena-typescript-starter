declare module "game/prototypes" {
  import { FindPathOpts, PathStep } from "game/path-finder";
  export interface RoomObjectJSON {
    id: number;
    x: number;
    y: number;
  }
  export interface RoomObject extends RoomPosition {
    /**
     * A unique object identificator.
     * You can use {@link getObjectById} method to retrieve an object instance by its id.
     */
    id: Id<this>;

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
    toJSON(): RoomObjectJSON;
  }
}
