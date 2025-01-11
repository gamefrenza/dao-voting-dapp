async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const Voting = await ethers.getContractFactory("Voting");
    const proposals = ["Proposal 1", "Proposal 2", "Proposal 3"];
    const voting = await Voting.deploy(proposals);

    console.log("Voting contract deployed to:", voting.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    }); 