import { Creep, OwnedStructure, Structure, StructureTower } from "game/prototypes";
import { Flag, RESOURCE_SCORE, ScoreCollector } from "arena";
import { constants, pathFinder, prototypes, utils } from "game";
import { getObjectsByPrototype, getTime } from "game/utils";
import { CostMatrix } from "game/path-finder";
import { RESOURCE_ENERGY } from "game/constants";

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

  // verification of Store object
  const myTower = utils.getObjectsByPrototype(StructureTower).find(i => i.my);
  if (myTower) {
    const energyStored = myTower.store[RESOURCE_ENERGY];
    const maxCapacity = myTower.store.getCapacity(RESOURCE_ENERGY);
  }

  // verification of arena score
  const scoreTestCreep = utils.getObjectsByPrototype(Creep).find(i => i.my);
  const scoreCollector = utils.getObjectsByPrototype(ScoreCollector)[0];
  if (scoreTestCreep && scoreCollector) {
    const scoreStored = scoreTestCreep.store[RESOURCE_SCORE];
    scoreTestCreep.transfer(scoreCollector, RESOURCE_SCORE);
  }
}
