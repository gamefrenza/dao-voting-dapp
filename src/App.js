import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import Header from './components/Header';
import ProposalSubmission from './components/ProposalSubmission';
import ProposalDisplay from './components/ProposalDisplay';
import VotingResults from './components/VotingResults';
import Footer from './components/Footer';
import useStore from './store/useStore';
import useEthereum from './hooks/useEthereum';
import contractABI from './path/to/your/contractABI.json'; // Update with the correct path to your ABI
import './App.css';

const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your deployed contract address

function App() {
    const proposals = useStore((state) => state.proposals);
    const { account, contract, submitProposal, castVote, error, loading } = useEthereum(contractAddress, contractABI);

    return (
        <Container className="mt-4">
            <Header />
            {loading && <p>Loading...</p>}
            {error && <Alert variant="danger">{error}</Alert>}
            <ProposalSubmission onSubmit={submitProposal} />
            <h2>Proposals</h2>
            <Row>
                {proposals.map((proposal, index) => (
                    <Col key={index} md={4} className="mb-3">
                        <ProposalDisplay proposal={{ ...proposal, id: index }} onVote={castVote} />
                    </Col>
                ))}
            </Row>
            <VotingResults results={proposals} />
            <Footer />
        </Container>
    );
}

export default App;
