declare module "arena/prototypes" {
  import { RoomObject } from "game";
  export interface Flag extends RoomObject {
    my: boolean;
  }

  export const Flag: Flag;
}
