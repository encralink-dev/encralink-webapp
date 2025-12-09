# encralink-webapp
Encralink Webapp — A decentralized, client‑side encrypted messaging and document sharing platform built on Solana and IPFS. Messages and files are encrypted locally with TweetNaCl, pinned to IPFS, and logged on Solana for proof of delivery and transparent fee capture.

---

## ✨ Features
- 🔐 **Client‑side encryption** — No plaintext ever leaves the browser.
- 🌐 **IPFS storage** — Redundant gateways with retry logic for reliability.
- 🪙 **Solana logging** — On‑chain CID hashes with fee capture (0.001 SOL per log).
- 📂 **Secure documents** — Files encrypted with owner’s public key before storage.
- 👥 **Messaging & group chats** — Add contacts via wallet addresses, discover keys via registry, and scale to group conversations.
- 📊 **Transaction history** — Transparent audit trail with Solana explorer links.
- 📜 **Whitepaper & roadmap** — Clear vision for adoption, ecosystem expansion, and governance.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (>= 18)
- Yarn or npm
- A Solana wallet (Phantom, Solflare, Backpack)

### Installation
```bash
git clone https://github.com/your-username/encralink-webapp.git
cd encralink-webapp
yarn install
```

### Development
```bash
yarn dev
```

### Build
```bash
yarn build
```

---

## ⚙️ Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key_here
VITE_SOLANA_RPC_URL=https://mainnet.helius-rpc.com/?api-key=YOUR_API_KEY
VITE_FEE_RECIPIENT=YourFeeWalletPublicKey
```

---

## 📜 Whitepaper

Encralink is designed to provide **secure, decentralized communication** for DAOs, communities, and retail users.  
- All encryption happens locally in the browser.  
- Fees fuel **token buybacks** and **weekly token locking**, strengthening tokenomics.  
- Roadmap includes ecosystem expansion, encrypted mailing, DAO governance, and mobile apps.  

See [WHITEPAPER.md](WHITEPAPER.md) for full details.

---

## 🗺️ Roadmap

1. Drive user adoption → more users, more fees generated.  
2. Expand ecosystem support (Ethereum, Base, and other chains).  
3. Launch encrypted mailing system (similar to email).  
4. Weekly token locking after buybacks to strengthen tokenomics.  
5. Introduce DAO governance features for community decision‑making.  
6. Mobile app release for broader accessibility.  
7. Advanced analytics dashboard for transaction history and fee capture.  

See [ROADMAP.md](ROADMAP.md) for updates.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to add.

---

## 📄 License

Licensed under the Apache License, Version 2.0 (Apache-2.0).

---

## 🔗 Links
- [View on GitHub](https://github.com/encralink-dev/encralink-webapp)
- [Official_Website]()
- [TweetNaCl](https://github.com/dchest/tweetnacl-js)
```

