declare module "arena" {
  // prototypes/flag.d.ts
  interface Flag extends RoomObject {
    my: boolean;
  }

  const Flag: Flag;

  // prototypes/body-part.d.ts
  interface BodyPart extends RoomObject {
    type: any;
    ticksToDecay: number;
  }

  const BodyPart: BodyPart;
}
