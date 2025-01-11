import React from 'react';
import './App.css';

const ProposalDisplay = ({ proposal, onVote }) => {
    return (
        <div className="proposal-display">
            <h3>{proposal.description}</h3>
            <p>Votes: {proposal.voteCount}</p>
            <button onClick={() => onVote(proposal.id)}>Vote</button>
        </div>
    );
};

export default ProposalDisplay; 