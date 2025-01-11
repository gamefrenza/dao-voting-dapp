import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const useEthereum = (contractAddress, contractABI) => {
    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);
    const [proposals, setProposals] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const connectToBlockchain = async () => {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                try {
                    const userAccount = await signer.getAddress();
                    setAccount(userAccount);

                    const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
                    setContract(contractInstance);
                } catch (err) {
                    setError("Failed to connect to wallet. Please try again.");
                }
            } else {
                setError('Please install MetaMask!');
            }
        };

        connectToBlockchain();
    }, [contractAddress, contractABI]);

    const connectWallet = async () => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            try {
                await provider.send("eth_requestAccounts", []);
                const signer = provider.getSigner();
                const userAccount = await signer.getAddress();
                setAccount(userAccount);
            } catch (err) {
                setError("Wallet connection rejected. Please try again.");
            }
        } else {
            setError('Please install MetaMask!');
        }
    };

    const submitProposal = async (description) => {
        setLoading(true);
        try {
            const tx = await contract.submitProposal(description);
            await tx.wait(); // Wait for the transaction to be mined
            // Handle success (e.g., update state)
        } catch (err) {
            setError("Failed to submit proposal.");
        } finally {
            setLoading(false);
        }
    };

    const castVote = async (proposalId) => {
        setLoading(true);
        try {
            const tx = await contract.castVote(proposalId);
            await tx.wait(); // Wait for the transaction to be mined
            // Handle success (e.g., update state)
        } catch (err) {
            setError("Failed to cast vote.");
        } finally {
            setLoading(false);
        }
    };

    const fetchProposals = async () => {
        if (contract) {
            try {
                const proposalCount = await contract.getProposalCount();
                const fetchedProposals = [];
                for (let i = 0; i < proposalCount; i++) {
                    const proposal = await contract.proposals(i);
                    fetchedProposals.push(proposal);
                }
                setProposals(fetchedProposals);
            } catch (err) {
                setError("Error fetching proposals: " + err.message);
            }
        }
    };

    useEffect(() => {
        if (contract) {
            const handleProposalCreated = (proposalId) => {
                // Handle the event (e.g., update state)
            };

            contract.on("ProposalCreated", handleProposalCreated);

            return () => {
                contract.off("ProposalCreated", handleProposalCreated); // Clean up the listener
            };
        }
    }, [contract]);

    return { account, contract, proposals, submitProposal, castVote, fetchProposals, connectWallet, error, loading };
};

export default useEthereum; 