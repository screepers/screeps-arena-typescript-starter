declare module "game" {

  export type BodyPartConstant = MOVE | WORK | CARRY | ATTACK | RANGED_ATTACK | TOUGH | HEAL | CLAIM;

  export type MOVE = "move";
  export type WORK = "work";
  export type CARRY = "carry";
  export type ATTACK = "attack";
  export type RANGED_ATTACK = "ranged_attack";
  export type TOUGH = "tough";
  export type HEAL = "heal";
  export type CLAIM = "claim";

  export const MOVE: MOVE;
  export const WORK: WORK;
  export const CARRY: CARRY;
  export const ATTACK: ATTACK;
  export const RANGED_ATTACK: RANGED_ATTACK;
  export const TOUGH: TOUGH;
  export const HEAL: HEAL;
  export const CLAIM: CLAIM;

  export type DirectionConstant = TOP | TOP_RIGHT | RIGHT | BOTTOM_RIGHT | BOTTOM | BOTTOM_LEFT | LEFT | TOP_LEFT;

  export type TOP = 1;
  export type TOP_RIGHT = 2;
  export type RIGHT = 3;
  export type BOTTOM_RIGHT = 4;
  export type BOTTOM = 5;
  export type BOTTOM_LEFT = 6;
  export type LEFT = 7;
  export type TOP_LEFT = 8;

  export const TOP: TOP;
  export const TOP_RIGHT: TOP_RIGHT;
  export const RIGHT: RIGHT;
  export const BOTTOM_RIGHT: BOTTOM_RIGHT;
  export const BOTTOM: BOTTOM;
  export const BOTTOM_LEFT: BOTTOM_LEFT;
  export const LEFT: LEFT;
  export const TOP_LEFT: TOP_LEFT;

  export * from "game/utils";
  export * from "game/path-finder";

}
