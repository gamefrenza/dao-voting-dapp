import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { useEthereum } from '../hooks/useEthereum';

jest.mock('../hooks/useEthereum');

describe('Header Component', () => {
    test('displays connected account when wallet is connected', () => {
        useEthereum.mockReturnValue({ account: '0x123', connectWallet: jest.fn() });
        render(<Header />);
        expect(screen.getByText(/Connected Account: 0x123/i)).toBeInTheDocument();
    });

    test('shows Connect Wallet button when no account is connected', () => {
        useEthereum.mockReturnValue({ account: null, connectWallet: jest.fn() });
        render(<Header />);
        expect(screen.getByRole('button', { name: /Connect Wallet/i })).toBeInTheDocument();
    });
}); 