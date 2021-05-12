declare module "game/prototypes" {
  import { AnyCreep, ScreepsReturnCode } from "game/constants";
  export type STRUCTURE_TOWER = "tower";
  export interface StructureTower extends OwnedStructure<STRUCTURE_TOWER> {
    /**
     * The current amount of hit points of the tower.
     */
    hits: number;
    /**
     * The maximum amount of hit points of the tower.
     */
    hitsMax: number;
    /**
     * Returns true for your tower, false for a hostile tower, undefined for a neutral tower.
     */
    my: boolean;
    /**
     * An object that contains a cargo of this structure. Towers can contain only energy.
     */
    store: {
      energy: number;
      getCapacity(): number;
    };
    /**
     * Remotely attack any creep or structure.
     * The target has to be within 50 squares range of the tower.
     * Attack effectiveness	600 hits at range ≤5 to 150 hits at range ≥20
     * @param target
     */
    attack(target: AnyCreep | Structure): ScreepsReturnCode;
    /**
     * Remotely heal any creep.
     * The target has to be within 50 squares range of the tower.
     * Heal effectiveness	400 hits at range ≤5 to 100 hits at range ≥20
     * @param target
     */
    heal(target: AnyCreep): ScreepsReturnCode;

    // // /**
    // //  * Remotely heal any creep.
    // //  * The target has to be within 50 squares range of the tower.
    // //  * Repair effectiveness	800 hits at range ≤5 to 200 hits at range ≥20
    // //  * @param target
    // //  */
    // // repair(target: Structure): ScreepsReturnCode;
  }

  interface StructureTowerConstructor extends _Constructor<StructureTower>, _ConstructorById<StructureTower> {}

  export const StructureTower: StructureTowerConstructor;
}
