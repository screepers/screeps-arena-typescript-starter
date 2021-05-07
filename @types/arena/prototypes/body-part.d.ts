declare module "arena/prototypes" {
  import { RoomObject } from "game";
  export interface BodyPart extends RoomObject {
    type: any;
    ticksToDecay: number;
  }

  export const BodyPart: BodyPart;
}
