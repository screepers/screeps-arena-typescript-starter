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
