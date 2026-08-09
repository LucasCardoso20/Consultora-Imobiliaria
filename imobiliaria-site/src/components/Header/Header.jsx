import React from 'react';
import { Link } from 'react-router-dom'; // Mantém o Link do react-router-dom
import {
  StyledHeader,
  HeaderContainer,
  BrandLink,
  LogoSpan,
  LogoText,
  LogoTitle,
  LogoSubtitle,
  Nav,
  NavLink,
  ActionsContainer,
  BookCallButton,
  WhatsAppButton,
  MobileMenuButton,
} from './Header.styles'; // Importa todos os Styled Components

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        {/* Brand */}
        <BrandLink to="/">
                      <LogoTitle>Marilda Souza</LogoTitle>

        </BrandLink>

        {/* Nav (desktop) */}
        <Nav>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#listings">Listings</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>

        {/* Actions */}
        <ActionsContainer>
          <BookCallButton href="#contact">
            Book a call
          </BookCallButton>

          <WhatsAppButton href="#contact">
            WhatsApp
          </WhatsAppButton>

          {/* Mobile menu button (visual placeholder) */}
          <MobileMenuButton type="button" aria-label="Open menu">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </MobileMenuButton>
        </ActionsContainer>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;