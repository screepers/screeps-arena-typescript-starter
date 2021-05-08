declare module "arena/prototypes" {
  import { BodyPartConstant, RoomObject } from "game";
  export interface BodyPart extends RoomObject {
    /**
     * The type of the body part.
     */
    type: BodyPartConstant;
    /**
     * The number of ticks until this item disappears.
     */
    ticksToDecay: number;
  }

  export const BodyPart: BodyPart;
}
