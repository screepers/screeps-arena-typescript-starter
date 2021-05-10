declare module "arena/prototypes" {
  import { RoomObject, _Constructor } from "game";
  export interface Flag extends RoomObject {
    readonly prototype: Flag;
    /**
     * Equals to true or false if the flag is owned.
     * Returns undefined if it is neutral.
     */
    my: boolean | undefined;
  }

  export const Flag: _Constructor<Flag>;
}
