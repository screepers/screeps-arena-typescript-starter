declare module "arena/prototypes" {
  import { RoomObject } from "game";
  export interface Flag extends RoomObject {
    /**
     * Equals to true or false if the flag is owned.
     * Returns undefined if it is neutral.
     */
    my: boolean | undefined;
  }

  export const Flag: Flag;
}
