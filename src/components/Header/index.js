import React, { Component } from 'react';
import { Wrapper, Nav, NavItem, NavItemJoin } from './styles';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export default class Header extends Component {
  render() {
    const isHome = this.props.location.pathname.match(/^\/$/);

    return (
      <Wrapper home={isHome}>
        <NavLink to="/">
          <Logo
            width="134"
            height="38"
            color={isHome ? '#ffffff' : '#ffc300'}
          />
        </NavLink>
        <Nav>
          <NavItem to="/for-musicians">For musicians</NavItem>
          <NavItem to="/for-listeners">For listeners</NavItem>
          <NavItem to="/how-it-works">How it works</NavItem>
          <NavItem to="/foundation">Foundation</NavItem>
          <NavItem to="/currency">Currency</NavItem>
          <NavItem to="/faq">FAQ</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItemJoin to="/sign-up">Sign up</NavItemJoin>
        </Nav>
      </Wrapper>
    );
  }
}
