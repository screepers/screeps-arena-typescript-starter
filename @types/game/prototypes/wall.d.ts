declare module "game/prototypes" {
  export interface StructureWall extends RoomObject {
    /**
     * The current amount of hit points of the wall.
     */
    hits: number;
    /**
     * The maximum amount of hit points of the wall.
     */
    hitsMax: number;
  }
  export const StructureWall: StructureWall;
}
