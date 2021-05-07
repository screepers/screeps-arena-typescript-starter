declare module "game" {
  type BodyPartConstant = MOVE | WORK | CARRY | ATTACK | RANGED_ATTACK | TOUGH | HEAL | CLAIM;

  type MOVE = "move";
  type WORK = "work";
  type CARRY = "carry";
  type ATTACK = "attack";
  type RANGED_ATTACK = "ranged_attack";
  type TOUGH = "tough";
  type HEAL = "heal";
  type CLAIM = "claim";

  const MOVE: MOVE;
  const WORK: WORK;
  const CARRY: CARRY;
  const ATTACK: ATTACK;
  const RANGED_ATTACK: RANGED_ATTACK;
  const TOUGH: TOUGH;
  const HEAL: HEAL;
  const CLAIM: CLAIM;

  type DirectionConstant = TOP | TOP_RIGHT | RIGHT | BOTTOM_RIGHT | BOTTOM | BOTTOM_LEFT | LEFT | TOP_LEFT;

  type TOP = 1;
  type TOP_RIGHT = 2;
  type RIGHT = 3;
  type BOTTOM_RIGHT = 4;
  type BOTTOM = 5;
  type BOTTOM_LEFT = 6;
  type LEFT = 7;
  type TOP_LEFT = 8;

  const TOP: TOP;
  const TOP_RIGHT: TOP_RIGHT;
  const RIGHT: RIGHT;
  const BOTTOM_RIGHT: BOTTOM_RIGHT;
  const BOTTOM: BOTTOM;
  const BOTTOM_LEFT: BOTTOM_LEFT;
  const LEFT: LEFT;
  const TOP_LEFT: TOP_LEFT;
}
