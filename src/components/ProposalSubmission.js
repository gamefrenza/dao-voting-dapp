import React, { useState } from 'react';
import useStore from '../store/useStore';
import './App.css';

const ProposalSubmission = () => {
    const [description, setDescription] = useState('');
    const addProposal = useStore((state) => state.addProposal);

    const handleSubmit = (e) => {
        e.preventDefault();
        addProposal(description);
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter proposal description"
                required
            />
            <button type="submit">Submit Proposal</button>
        </form>
    );
};

export default ProposalSubmission; 