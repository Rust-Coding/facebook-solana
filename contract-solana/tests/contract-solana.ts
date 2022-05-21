import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { ContractSolana } from "../target/types/contract_solana";

describe("contract-solana", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.ContractSolana as Program<ContractSolana>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
