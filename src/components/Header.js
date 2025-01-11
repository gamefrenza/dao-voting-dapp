import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import useEthereum from '../hooks/useEthereum';

const Header = () => {
    const { account, connectWallet } = useEthereum();

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">DAO Voting Dapp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {account ? (
                        <Nav.Item>
                            <Nav.Link disabled>Connected Account: {account}</Nav.Link>
                        </Nav.Item>
                    ) : (
                        <Button variant="outline-info" onClick={connectWallet}>
                            Connect Wallet
                        </Button>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header; 