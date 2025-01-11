import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { useEthereum } from './hooks/useEthereum';
import { useStore } from './store/useStore';

jest.mock('./hooks/useEthereum');
jest.mock('./store/useStore');

describe('App Component', () => {
    beforeEach(() => {
        useEthereum.mockReturnValue({
            account: '0x123',
            submitProposal: jest.fn(),
            castVote: jest.fn(),
            error: null,
            loading: false,
        });

        useStore.mockReturnValue({
            proposals: [{ id: 1, description: 'Test Proposal', votesFor: 0, votesAgainst: 0 }],
        });
    });

    test('renders header and proposals', () => {
        render(<App />);
        expect(screen.getByText(/DAO Voting Dapp/i)).toBeInTheDocument();
        expect(screen.getByText(/Test Proposal/i)).toBeInTheDocument();
    });

    test('submits a proposal', () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/Enter proposal description/i);
        fireEvent.change(input, { target: { value: 'New Proposal' } });
        fireEvent.click(screen.getByText(/Submit Proposal/i));
        expect(useEthereum().submitProposal).toHaveBeenCalledWith('New Proposal');
    });

    test('casts a vote', () => {
        render(<App />);
        fireEvent.click(screen.getByText(/Vote/i));
        expect(useEthereum().castVote).toHaveBeenCalledWith(1);
    });
});
