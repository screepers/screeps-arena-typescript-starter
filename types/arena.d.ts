/* eslint-disable @typescript-eslint/naming-convention */
declare module "arena" {
  interface _Constructor<T> {
    readonly prototype: T;
  }

  type _ConstructorById<T> = _Constructor<T>;

  interface RoomObject {
    // constructor(id: any);
    exists: boolean;
    x: any;
    y: any;
    findPathTo(pos: any, opts: any): any;
    toJSON(): {
      id: any;
      x: any;
      y: any;
    };
  }

  interface Flag extends RoomObject {
    my: boolean;
  }
  interface FlagConstructor extends _Constructor<Flag>, _ConstructorById<Flag> {}

  const Flag: FlagConstructor;

  interface BodyPart extends RoomObject {
    type: any;
    ticksToDecay: number;
  }

  interface BodyPartConstructor extends _Constructor<BodyPart>, _ConstructorById<BodyPart> {}

  const BodyPart: BodyPartConstructor;
}
