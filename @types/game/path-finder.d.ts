declare module "game/path-finder" {
  // TODO: type this
  export function searchPath(origin: any, goal: any, options: any): any;

  // TODO: type this
  export interface CostMatrix {
    deserialize(data: any): any;
    _bits: Uint8Array;
    set(xx: any, yy: any, val: any): void;
    get(xx: any, yy: any): number;
    clone(): CostMatrix;
    serialize(): any;
  }
}
