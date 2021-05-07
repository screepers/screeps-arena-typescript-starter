declare module "game/prototypes" {
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
}
