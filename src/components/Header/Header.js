import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale Collections</NavLink>
          <NavLink href="/new">New&nbsp;Releases Collections</NavLink>
          <NavLink href="/men">Men Collections</NavLink>
          <NavLink href="/women">Women Collections</NavLink>
          <NavLink href="/kids">Kids Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <PhoneWrapper>
          <Icon id="shopping-bag" />
          <VisuallyHidden>Open cart</VisuallyHidden>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </PhoneWrapper>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletAndDown} {
    padding: 18px 10px;
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid ${COLORS.gray[900]};
  }
`;

const PhoneWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 16px;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    8vw - 3.5rem,
    3rem
  );
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
flex: 1;
`;

const NavLink = styled.a`
font - size: 1.125rem;
text - transform: uppercase;
text - decoration: none;
color: ${COLORS.gray[900]};
font - weight: ${WEIGHTS.medium};

  &: first - of - type {
  color: ${COLORS.secondary};
}
`;

export default Header;
