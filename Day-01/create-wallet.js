// import { generateKeyPairSigner } from "@solana/kit"

// const wallet = await generateKeyPairSigner();

// console.log("Your new wallet address:", wallet.address);

// console.log("\nThis address is your public key. It's safe to share.");

// console.log("The Private key stays in memory. In a real app, I'd save it securely");



import { generateKeyPairSigner, createSolanaRpc, devnet, address } from "@solana/kit"

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));

const publicAddress = "3RXztdwFD36TtjdSJKKBN5CNPVPoJao9UtERmn78SdUc"

console.log("Your new wallet address:", publicAddress);

const { value: balance } = await rpc.getBalance(address(publicAddress)).send();

const balanceInSol = Number(balance) / 1_000_000_000;

console.log(`Balance: ${balanceInSol} SOL`)