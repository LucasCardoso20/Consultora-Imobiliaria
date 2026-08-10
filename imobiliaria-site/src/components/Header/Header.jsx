import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledHeader, HeaderContainer, BrandLink, Mark, BrandText,
  BrandTitle, BrandSubtitle, Nav, NavItem, NavIndex, NavLabel,
  ActionsContainer, ContactButton, MobileMenuButton,
  MobileNavPanel, MobileNavItem, MobileContactButton,
} from './Header.styles';

const navLinks = [
  { href: "#imoveis-morar-investir", index: "01", label: "Serviços" },
  { href: "#featured-properties", index: "02", label: "Imóveis" },
  { href: "#about", index: "03", label: "Sobre" },
  { href: "#contact", index: "04", label: "Contato" },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <StyledHeader>
      <HeaderContainer>
        <BrandLink to="/" onClick={closeMobileMenu}>
          <BrandText>
            <BrandTitle>Marilda Souza</BrandTitle>
            <BrandSubtitle>Consultoria Imobiliária · Curitiba/PR</BrandSubtitle>
          </BrandText>
        </BrandLink>

        <Nav>
          {navLinks.map((link) => (
            <NavItem key={link.href} href={link.href}>
              <NavIndex>{link.index}</NavIndex>
              <NavLabel>{link.label}</NavLabel>
            </NavItem>
          ))}
        </Nav>

        <ActionsContainer>
          <ContactButton href="https://wa.me/5541999999999" target="_blank" rel="noreferrer">
            Falar com a Marilda
          </ContactButton>

          <MobileMenuButton
            type="button"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </MobileMenuButton>
        </ActionsContainer>
      </HeaderContainer>

      {isMobileMenuOpen && (
        <MobileNavPanel>
          {navLinks.map((link) => (
            <MobileNavItem key={link.href} href={link.href} onClick={closeMobileMenu}>
              <NavIndex>{link.index}</NavIndex>
              <NavLabel>{link.label}</NavLabel>
            </MobileNavItem>
          ))}

          <MobileContactButton
            href="https://wa.me/5541999999999"
            target="_blank"
            rel="noreferrer"
            onClick={closeMobileMenu}
          >
            Falar com a Marilda
          </MobileContactButton>
        </MobileNavPanel>
      )}
    </StyledHeader>
  );
}

export default Header;