import React from 'react';
import useStore from '../store/useStore';
import './App.css';

const VoteCasting = ({ proposalId }) => {
    const castVote = useStore((state) => state.castVote);

    const handleVote = () => {
        castVote(proposalId);
    };

    return (
        <button onClick={handleVote}>Vote</button>
    );
};

export default VoteCasting; 