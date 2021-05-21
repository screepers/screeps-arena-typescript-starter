declare module "game/prototypes" {
  import { BuildableStructureConstant, ERR_NOT_OWNER, OK } from "game/constants";
  /**
   * A site of a structure which is currently under construction.
   */
  interface ConstructionSite<T extends BuildableStructureConstant = BuildableStructureConstant> extends RoomObject {
    readonly prototype: ConstructionSite;
    /**
     * Whether this is your own construction site.
     */
    my: boolean;
    /**
     * The current construction progress.
     */
    progress: number;
    /**
     * The total construction progress needed for the structure to be built.
     */
    progressTotal: number;
    /**
     * Remove the construction site.
     * @returns Result Code: OK, ERR_NOT_OWNER
     */
    remove(): OK | ERR_NOT_OWNER;

    structurePrototypeNam: string; // BuildableStructureConstant? what we have there is not really their prototype string though

    // TODO: toJSON
    // // toJSON() {
    // //   return Object.assign(super.toJSON(), {
    // //     progress: this.progress,
    // //     progressTotal: this.progressTotal,
    // //     my: this.my,
    // //     structure: this.structure
    // //   });
    // // }
  }

  interface ConstructionSiteConstructor extends _Constructor<ConstructionSite>, _ConstructorById<ConstructionSite> {}

  export const ConstructionSite: ConstructionSiteConstructor;
}
