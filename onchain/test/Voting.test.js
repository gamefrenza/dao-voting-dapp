const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("Voting Contract", function () {
  let Voting;
  let voting;
  let owner;
  let member1;
  let member2;

  beforeEach(async function () {
    [owner, member1, member2] = await ethers.getSigners();
    Voting = await ethers.getContractFactory("Voting");
    voting = await Voting.deploy();
    await voting.deployed();
  });

  describe("Membership Management", function () {
    it("Should add a member", async function () {
      await voting.addMember(member1.address);
      expect(await voting.members(member1.address)).to.be.true;
    });

    it("Should not allow non-owner to add a member", async function () {
      await expect(voting.connect(member1).addMember(member2.address)).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });

  describe("Proposal Management", function () {
    beforeEach(async function () {
      await voting.addMember(member1.address);
      await voting.addMember(member2.address);
    });

    it("Should create a proposal", async function () {
      await voting.connect(member1).createProposal("Test Proposal");
      const proposal = await voting.proposals(1);
      expect(proposal.description).to.equal("Test Proposal");
      expect(proposal.votesFor).to.equal(0);
      expect(proposal.votesAgainst).to.equal(0);
      expect(proposal.exists).to.be.true;
    });

    it("Should not allow non-member to create a proposal", async function () {
      await expect(voting.connect(owner).createProposal("Test Proposal")).to.be.revertedWith("Only members can create proposals");
    });
  });

  describe("Voting", function () {
    beforeEach(async function () {
      await voting.addMember(member1.address);
      await voting.addMember(member2.address);
      await voting.connect(member1).createProposal("Test Proposal");
    });

    it("Should allow a member to vote", async function () {
      await voting.connect(member1).vote(1, true);
      const proposal = await voting.proposals(1);
      expect(proposal.votesFor).to.equal(1);
    });

    it("Should not allow a member to vote twice", async function () {
      await voting.connect(member1).vote(1, true);
      await expect(voting.connect(member1).vote(1, false)).to.be.revertedWith("You have already voted on this proposal");
    });

    it("Should not allow non-member to vote", async function () {
      await expect(voting.connect(owner).vote(1, true)).to.be.revertedWith("Only members can vote");
    });
  });

  describe("Proposal Results", function () {
    beforeEach(async function () {
      await voting.addMember(member1.address);
      await voting.addMember(member2.address);
      await voting.connect(member1).createProposal("Test Proposal");
      await voting.connect(member2).vote(1, true);
    });

    it("Should return the correct proposal results", async function () {
      const results = await voting.getProposalResults(1);
      expect(results[0]).to.equal(1); // votesFor
      expect(results[1]).to.equal(0); // votesAgainst
    });
  });
}); 