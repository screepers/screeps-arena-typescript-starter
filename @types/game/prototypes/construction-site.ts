declare module "game/prototypes" {
  import { BuildableStructureConstant } from "game/constants";
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
    remove(): number;
  }

  interface ConstructionSiteConstructor extends _Constructor<ConstructionSite>, _ConstructorById<ConstructionSite> {}

  export const ConstructionSite: ConstructionSiteConstructor;
}
