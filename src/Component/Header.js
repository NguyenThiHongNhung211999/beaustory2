import React from 'react';

import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import HomePageHeader from'../Component/HomepageHeader';
class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content: "Hello"
        };
    }
    onClickHandle() {
        this.setState({
            content: "Hi"
        });
    }
    render() {
        return (
            <div className="app-header">
                <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/">BEAUSTORY</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                    <i class="fa fa-shopping-bag"></i>
                    </NavItem>
                    </Nav>
                </Navbar> 
                <HomePageHeader></HomePageHeader>
            </div>
        )
    }
}

export default Header;