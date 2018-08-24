
import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { store } from '../store/index';
import { push } from 'react-router-redux'

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    navigateTo(navigateUrl) {
        store.dispatch(push(navigateUrl))
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Navbar color="indigo" dark expand="lg" fixed="top" scrolling>
                <NavbarBrand href="#/">
                    <strong>Home</strong>
                </NavbarBrand>
                {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                <Collapse isOpen={this.state.collapse} navbar>
                    <NavbarNav left>
                        <NavItem>
                            <NavLink href="/jobs" to="/jobs">JobPost</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact" to="/contact">Contact Us</NavLink>
                        </NavItem>

                    </NavbarNav>

                </Collapse>
                <NavbarNav right>
                    <NavItem>
                        <NavLink className="nav-link" to="#" >welcome User</NavLink>
                    </NavItem>
                </NavbarNav>
            </Navbar>
        );
    }
}

export { HeaderComponent }


