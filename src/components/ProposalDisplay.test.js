import React from 'react';
import { render, screen } from '@testing-library/react';
import ProposalDisplay from './ProposalDisplay';

describe('ProposalDisplay Component', () => {
    const proposal = {
        id: 1,
        description: 'Test Proposal',
        votesFor: 5,
        votesAgainst: 2,
        exists: true,
    };

    test('renders proposal description and vote count', () => {
        render(<ProposalDisplay proposal={proposal} onVote={() => {}} />);
        expect(screen.getByText(/Test Proposal/i)).toBeInTheDocument();
        expect(screen.getByText(/Votes: 5/i)).toBeInTheDocument();
    });

    test('calls onVote when Vote button is clicked', () => {
        const mockOnVote = jest.fn();
        render(<ProposalDisplay proposal={proposal} onVote={mockOnVote} />);
        const voteButton = screen.getByText(/Vote/i);
        voteButton.click();
        expect(mockOnVote).toHaveBeenCalledWith(proposal.id);
    });
}); 