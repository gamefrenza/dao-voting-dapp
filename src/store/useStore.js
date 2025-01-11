import create from 'zustand';

const useStore = create((set) => ({
    proposals: [],
    votingHistory: [],
    addProposal: (description) => set((state) => ({
        proposals: [...state.proposals, { description, voteCount: 0 }],
    })),
    castVote: (proposalId) => set((state) => {
        const updatedProposals = state.proposals.map((proposal, index) => {
            if (index === proposalId) {
                return { ...proposal, voteCount: proposal.voteCount + 1 };
            }
            return proposal;
        });
        return {
            proposals: updatedProposals,
            votingHistory: [...state.votingHistory, proposalId],
        };
    }),
}));

export default useStore; 