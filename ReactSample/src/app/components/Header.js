import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Router>
               
                <Navbar color="indigo" dark expand="lg" fixed="top"  scrolling>
                    <NavbarBrand href="/">
                        <strong>Home</strong>
                    </NavbarBrand>
                    {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                    <Collapse isOpen={this.state.collapse} navbar>
                        <NavbarNav left>
                            <NavItem>
                                <NavLink to="#">DCLocations</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#">About Us</NavLink>
                            </NavItem>
                           
                        </NavbarNav>
                       
                    </Collapse>
                    <NavbarNav right>
                          <NavItem>
                          <NavLink className="nav-link" to="#" >welcome User</NavLink>
                          </NavItem>
                        </NavbarNav>
                </Navbar>
            </Router>
        );
    }
}

export { Header }






