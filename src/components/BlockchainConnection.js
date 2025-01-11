import React, { useEffect } from 'react';
import Web3 from 'web3';
import './App.css';

const BlockchainConnection = ({ onConnect }) => {
    useEffect(() => {
        const connectToBlockchain = async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                onConnect(web3);
            } else {
                alert('Please install MetaMask!');
            }
        };

        connectToBlockchain();
    }, [onConnect]);

    return <div>Connecting to blockchain...</div>;
};

export default BlockchainConnection; 