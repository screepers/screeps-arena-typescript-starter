declare module "game/prototypes" {
  import { BodyPartConstant } from "game/constants";
  export type STRUCTURE_SPAWN = "spawn";
  export interface StructureSpawn extends OwnedStructure<STRUCTURE_TOWER> {
    spawnCreep(body: BodyPartConstant[]): Creep;
  }
}
