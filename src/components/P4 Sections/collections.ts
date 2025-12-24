// collections.ts
import type { NFT } from "./nft";

// مسیر عکس‌ها را import می‌کنیم
import c1 from "./P2/c1.jpg"
import c2 from "./P2/c2.jpg";

export const collections: NFT[] = [
  { id: 1, title: "STONEL00K #001", price: 0.08, image: c1 },
  { id: 2, title: "STONEL00K #002", price: 0.12, image: c2 },
];
