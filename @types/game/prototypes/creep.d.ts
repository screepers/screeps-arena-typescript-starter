declare module "game/prototypes" {
  import {
    AnyCreep,
    BodyPartConstant,
    CreepActionReturnCode,
    CreepMoveReturnCode,
    DirectionConstant,
    ERR_BUSY,
    ERR_INVALID_TARGET,
    ERR_NOT_OWNER,
    ERR_NO_BODYPART,
    ERR_NO_PATH,
    MoveToOpts,
    OK
  } from "game";
  export interface Creep extends RoomObject {
    readonly prototype: Creep;
    /**
     * The current amount of hit points of the creep.
     */
    hits: number;
    /**
     * The maximum amount of hit points of the creep.
     */
    hitsMax: number;
    /**
     * Whether it is your creep.
     */
    my: boolean;
    /**
     * Fatigue indicator of the creep. It can move only when fatigue equals to 0.
     */
    fatigue: number;
    /**
     * An array describing the creep’s body. Each element contains the following properties:
     *     type: string (One of the body part types constants)
     *     hits: number (The remaining amount of hit points of this body part)
     */
    body: { type: BodyPartConstant; hits: number }[];
    /**
     * Move the creep one square in the specified direction. direction must be one of the following constants:
     * @param direction
     */
    move(direction: DirectionConstant): CreepMoveReturnCode;
    /**
     * Find the optimal path to the target within the same room and move to it.
     * A shorthand to consequent calls of findPathTo() and move() methods.
     * @param target target can be any object containing x and y properties.
     * @param opts opts is an optional object containing additional options. See /game/utils::findPath for details.
     */
    moveTo(target: RoomPosition, opts?: MoveToOpts): CreepMoveReturnCode | ERR_NO_PATH | ERR_INVALID_TARGET;
    /**
     * A ranged attack against another creep or structure. Requires the RANGED_ATTACK body part.
     * The target has to be within 3 squares range of the creep.
     * @param target
     */
    rangedAttack(target: AnyCreep | Structure): CreepActionReturnCode;
    /**
     * A ranged attack against all hostile creeps or structures within 3 squares range.
     * Requires the RANGED_ATTACK body part.
     * The attack power depends on the range of each target.
     * Friendly units are not affected.
     */
    rangedMassAttack(): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NO_BODYPART;
    /**
     * Attack another creep or structure in a short-ranged attack.
     * Requires the ATTACK body part.
     * The target has to be at an adjacent square to the creep.
     * @param target
     */
    attack(target: AnyCreep | Structure): CreepActionReturnCode;
    /**
     * Heal self or another creep.
     * It will restore the target creep’s damaged body parts function and increase the hits counter.
     * Requires the HEAL body part.
     * The target has to be at an adjacent square to the creep.
     * @param target
     */
    heal(target: AnyCreep): CreepActionReturnCode;
    /**
     * Heal another creep at a distance.
     * It will restore the target creep’s damaged body parts function and increase the hits counter.
     * Requires the HEAL body part.
     * The target has to be within 3 squares range of the creep.
     * @param target
     */
    rangedHeal(target: AnyCreep): CreepActionReturnCode;
    pull(target: any): any;
  }

  //   interface CreepConstructor extends _Constructor<Creep> {}
  // const Creep: CreepConstructor;
  export const Creep: Creep;
}
