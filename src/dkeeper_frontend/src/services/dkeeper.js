import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory, canisterId } from "../../../declarations/dkeeper_backend";

const agent = new HttpAgent({ host: "http://127.0.0.1:4943" }); // local dev

export const dkeeperActor = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});

