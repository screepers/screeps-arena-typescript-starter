declare module "game/prototypes" {
  export type STRUCTURE_WALL = "constructedWall";
  export interface StructureWall extends Structure<STRUCTURE_WALL> {
    readonly prototype: StructureWall;
  }

  interface ConstructedWallConstructor extends _Constructor<StructureWall>, _ConstructorById<StructureWall> {}
  export const StructureWall: ConstructedWallConstructor;
}
