import React from 'react';
import './App.css';

const VotingResults = ({ results }) => {
    return (
        <div>
            <h2>Voting Results</h2>
            {results.map((result, index) => (
                <div key={index}>
                    <h3>{result.description}</h3>
                    <p>Votes: {result.voteCount}</p>
                </div>
            ))}
        </div>
    );
};

export default VotingResults; 