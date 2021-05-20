declare module "game/prototypes" {
  export type STRUCTURE_RAMPART = "rampart";
  export type StructureRampart = OwnedStructure<STRUCTURE_RAMPART>;
  interface StructureRampartConstructor extends _Constructor<StructureRampart>, _ConstructorById<StructureRampart> {}

  export const StructureRampart: StructureRampartConstructor;
}
