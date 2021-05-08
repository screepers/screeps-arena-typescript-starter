declare module "game/prototypes" {
  export interface _Constructor<T> {
    readonly prototype: T;
  }

  export interface RoomPosition {
    /**
     * X position in the room. Can be undefined if `.exists` is false
     */
    x: number /* | undefined;*/;
    /**
     * Y position in the room. Can be undefined if `.exists` is false
     */
    y: number /* | undefined;*/;
  }
}
