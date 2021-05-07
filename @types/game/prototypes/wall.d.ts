declare module "game/prototypes" {
  export type STRUCTURE_WALL = "constructedWall";
  export interface StructureWall extends Structure<STRUCTURE_WALL> {
    readonly prototype: StructureWall;
  }
  export const StructureWall: StructureWall;
}
