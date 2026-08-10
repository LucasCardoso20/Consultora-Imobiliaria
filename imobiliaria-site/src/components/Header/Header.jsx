import { Link } from 'react-router-dom';
import {
  StyledHeader, HeaderContainer, BrandLink, Mark, BrandText,
  BrandTitle, BrandSubtitle, Nav, NavItem, NavIndex, NavLabel,
  ActionsContainer, ContactButton, MobileMenuButton,
} from './Header.styles';

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <BrandLink to="/">
          <BrandText>
            <BrandTitle>Marilda Souza</BrandTitle>
            <BrandSubtitle>Consultoria Imobiliária · Curitiba/PR</BrandSubtitle>
          </BrandText>
        </BrandLink>

        <Nav>
          <NavItem href="#imoveis-morar-investir"><NavIndex>01</NavIndex><NavLabel>Serviços</NavLabel></NavItem>
          <NavItem href="#featured-properties"><NavIndex>02</NavIndex><NavLabel>Imóveis</NavLabel></NavItem>
          <NavItem href="#about"><NavIndex>03</NavIndex><NavLabel>Sobre</NavLabel></NavItem>
          <NavItem href="#contact"><NavIndex>04</NavIndex><NavLabel>Contato</NavLabel></NavItem>
        </Nav>

        <ActionsContainer>
          <ContactButton href="https://wa.me/5541999999999" target="_blank" rel="noreferrer">
            Falar com a Marilda
          </ContactButton>
          <MobileMenuButton type="button" aria-label="Abrir menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </MobileMenuButton>
        </ActionsContainer>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;