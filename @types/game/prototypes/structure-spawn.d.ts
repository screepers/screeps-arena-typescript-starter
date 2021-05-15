declare module "game/prototypes" {
  import { Store } from "game/prototypes";
  import { BodyPartConstant, ResourceConstant } from "game/constants";
  export type STRUCTURE_SPAWN = "spawn";
  export interface StructureSpawn extends OwnedStructure<STRUCTURE_TOWER> {
    /**
     * A Store object that contains a cargo of this structure. Spawns can contain only energy.
     */
    store: Store<ResourceConstant>;
    /**
     * Start the creep spawning process. The required energy amount can be withdrawn from all spawns and extensions in the room.
     */
    spawnCreep(body: BodyPartConstant[]): Creep;
  }
}
