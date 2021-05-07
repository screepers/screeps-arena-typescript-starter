/* eslint-disable @typescript-eslint/naming-convention */
declare module "arena" {
  module "prototypes" {
    interface Flag extends RoomObject {
      my: boolean;
    }

    const Flag: Flag;
  }
}
