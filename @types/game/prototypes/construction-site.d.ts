declare module "game/prototypes" {
  import { ERR_NOT_OWNER, OK, STRUCTURE_PROTOTYPES } from "game/constants";
  export interface ConstructionSite extends RoomObject {
    readonly prototype: ConstructionSite;

    /**
     * The current construction progress.
     */
    progress: number;
    /**
     * The total construction progress needed for the structure to be built.
     */
    progressTotal: number;

    structurePrototypeName: STRUCTURE_PROTOTYPES;

    /**
     * Whether it is your construction site.
     */
    my: boolean;

    remove(): ERR_NOT_OWNER | OK;
  }

  interface ConstructionSiteConstructor extends _Constructor<ConstructionSite>, _ConstructorById<ConstructionSite> {}

  export const ConstructionSite: ConstructionSiteConstructor;
}
