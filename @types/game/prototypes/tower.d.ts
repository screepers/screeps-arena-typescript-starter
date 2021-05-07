declare module "game/prototypes" {
  export interface StructureTower extends RoomObject {
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
      energy: any;
      getCapacity(): any;
    };
    /**
     * Remotely attack any creep or structure.
     * The target has to be within 50 squares range of the tower.
     * @param target
     */
    attack(target: any): any;
    /**
     * Remotely heal any creep.
     * The target has to be within 50 squares range of the tower.
     * @param target
     */
    heal(target: any): any;
  }
  // interface StructureTowerConstructor extends _Constructor<StructureTower>, _ConstructorById<StructureTower> {}

  // const StructureTower: StructureTowerConstructor;
  export const StructureTower: StructureTower;
}
