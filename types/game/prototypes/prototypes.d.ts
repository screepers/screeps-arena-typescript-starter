declare module "prototypes" {
  interface _Constructor<T> {
    readonly prototype: T;
  }

  interface RoomPosition {
    /**
     * X position in the room.
     */
    x: number;
    /**
     * Y position in the room.
     */
    y: number;
  }
}

/*
declare module "game" {
  module "prototypes" {

  }
}
*/
