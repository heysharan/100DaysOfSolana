// import { createSolanaRpc, devnet } from "@solana/kit"

// const rpc = await createSolanaRpc(devnet("https://api.devnet.solana.com"));

// const walletAddress = "3Ykv6dRKSJwp35eXDBkBfJiE3i33KnbGiRvHuMi7wTtQ";

// const { value: balance } = await rpc.getBalance(walletAddress).send();

// console.log(balance);

{/* ************************************** */}

// import { Connection, VersionedMessage, clusterApiUrl } from "@solana/web3.js";

// const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

// const signature = "2XUyvesQkFreJRQ4nU6rUZAxnwYmCEtjPsCdYXodQ1wEMbHQCnyWmuoJXKMN5jMS8RCD2hFwqMQSFkheoL9Pj82b";

// const tx = await connection.getTransaction(signature, {
//     maxSupportedTransactionVersion: 0,
// })

// const fee = tx.meta.fee;

// console.log(fee)

{/* ************************************** */}

// import { LAMPORTS_PER_SOL } from "@solana/web3.js";

// const solAmount = 1.5;
// const lamports = solAmount * LAMPORTS_PER_SOL;

// console.log(lamports);

{/* ***************** SOL and Lamports ********************* */}

import { createSolanaRpc, devnet } from "@solana/kit"

const rpc = await createSolanaRpc(devnet("https://api.devnet.solana.com"));

const walletAddress = "3Yu4CNgrSv2noNHcoKmyzfDBUgv7L7bDUGXnqQmfde6B";

const LAMPORTS_PER_SOL = 1_000_000_000;

const { value: balance } = await rpc.getBalance(walletAddress).send();

console.log(`Balance:`);
console.log(`→ ${balance} lamports`);
console.log(`→ ${Number(balance) / LAMPORTS_PER_SOL} SOL`);