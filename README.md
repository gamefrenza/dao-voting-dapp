# Decentralized Voting Platform

A decentralized voting application (dApp) built with React, Ethereum smart contracts, and Web3 technologies. This platform allows users to create proposals, cast votes, and view voting results in a transparent and decentralized manner.

## Features

- Connect MetaMask wallet
- Create and submit proposals
- Cast votes on proposals
- Real-time voting results
- Responsive UI with React Bootstrap
- Secure smart contract integration
- Test coverage for components and contracts

## Tech Stack

- **Frontend**: React, TypeScript, React Bootstrap
- **State Management**: Zustand
- **Blockchain Integration**: ethers.js, Web3.js
- **Smart Contract**: Solidity
- **Development Environment**: Hardhat
- **Testing**: Jest, React Testing Library, Chai


## Smart Contract Features

- Proposal creation and management
- Secure voting mechanism
- Vote counting and result calculation
- Prevention of duplicate voting
- Access control for proposal creation

## Getting Started

1. **Prerequisites**
   - Node.js (v14+ recommended)
   - MetaMask browser extension
   - Git

2. **Installation**
   ```bash
   # Clone the repository
   git clone [repository-url]
   cd decentralized-voting

   # Install dependencies
   npm install

   # Install Hardhat dependencies
   cd onchain
   npm install
   ```

3. **Smart Contract Deployment**
   ```bash
   # In the onchain directory
   npx hardhat compile
   npx hardhat test
   npx hardhat run scripts/deploy.js --network goerli
   ```

4. **Frontend Development**
   ```bash
   # In the root directory
   npm start
   ```

## Testing

- **Smart Contract Tests**
  ```bash
  cd onchain
  npx hardhat test
  ```

- **Frontend Tests**
  ```bash
  npm test
  ```

## Usage

1. Connect your MetaMask wallet using the "Connect Wallet" button in the header
2. Create a new proposal using the proposal submission form
3. View existing proposals in the proposal list
4. Cast votes on proposals
5. View real-time voting results

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenZeppelin for smart contract security patterns
- Ethereum community for Web3 development tools
- React Bootstrap for UI components

