import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <Container>
                <p className="text-center">© {new Date().getFullYear()} DAO Voting Dapp. All rights reserved.</p>
            </Container>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '10px 0',
    position: 'relative',
    bottom: '0',
    width: '100%',
};

export default Footer; 