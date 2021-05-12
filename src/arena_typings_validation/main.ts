import { Creep, OwnedStructure, Structure } from "game/prototypes";
import { constants, pathFinder, prototypes, utils } from "game";
import { getObjectsByPrototype, getTime } from "game/utils";
import { CostMatrix } from "game/path-finder";
import { Flag } from "arena";

export function loop(): void {
  console.log(`The time is ${getTime()}`);

  const costMatrix = new CostMatrix();

  const noUtilsCreeps = getObjectsByPrototype(Creep).filter(i => i.my);

  const myCreeps = utils.getObjectsByPrototype(prototypes.Creep).filter(i => i.my);
  const enemyCreeps = utils.getObjectsByPrototype(prototypes.Creep).filter(i => !i.my);
  const enemyFlag = utils.getObjectsByPrototype(Flag).find(i => !i.my);

  const structures = utils.getObjectsByPrototype(Structure);
  const ownedStructures = utils.getObjectsByPrototype(OwnedStructure);

  const noUtilStructures = getObjectsByPrototype(Structure);
  const noUtilOwnedStructures = getObjectsByPrototype(OwnedStructure);

  // verification that getObjectById works.
  const creepForId = myCreeps[0];
  if (creepForId) {
    const creepFromGetObjectById = utils.getObjectById(creepForId.id);
  }
}
