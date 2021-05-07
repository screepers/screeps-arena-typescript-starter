/* eslint-disable @typescript-eslint/naming-convention */
declare module "arena" {
  module "prototypes" {
    interface BodyPart extends RoomObject {
      type: any;
      ticksToDecay: number;
    }

    const BodyPart: BodyPart;
  }
}
