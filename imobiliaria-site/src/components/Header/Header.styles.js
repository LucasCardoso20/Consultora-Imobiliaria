// Header.styles.js — arquivo completo
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const colors = {
  ink: { 950: "#0B1220", 900: "#1A202C", 700: "#4A5568", 500: "#718096" },
  sand: { 50: "#FDFDFB", 100: "#F5F5F4", 200: "#E7E5E4", 300: "#D6D3D1" },
  accent: { 500: "#B08B5A", 600: "#9C7A4F", 50: "#FBF8F5" },
};

const fonts = {
  serif: "'Fraunces', 'Playfair Display', serif",
  mono: "'IBM Plex Mono', monospace",
};

const breakpoints = { sm: '640px', md: '768px', lg: '1024px' };

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid ${colors.ink[950]}1A;
  background-color: ${colors.sand[50]}F2;
  backdrop-filter: blur(6px);
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 84rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 1.25rem;

  @media (min-width: ${breakpoints.lg}) {
    padding: 1.1rem 2.5rem;
  }
`;

export const BrandLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
`;

export const Mark = styled.span`
  display: grid;
  place-items: center;
  height: 2.4rem;
  width: 2.4rem;
  background-color: ${colors.ink[950]};
  color: white;
  font-family: ${fonts.mono};
  font-size: 0.8rem;
  letter-spacing: 0.05em;
`;

export const BrandText = styled.div`
  line-height: 1.15;
`;

export const BrandTitle = styled.div`
  font-family: ${fonts.serif};
  font-size: 1.15rem;
  font-weight: 600;
  color: ${colors.ink[950]};
`;

export const BrandSubtitle = styled.div`
  font-family: ${fonts.mono};
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${colors.ink[700]};
`;

export const Nav = styled.nav`
  display: none;
  align-items: center;
  gap: 2.25rem;

  @media (min-width: ${breakpoints.md}) {
    display: flex;
  }
`;

export const NavItem = styled.a`
  display: inline-flex;
  align-items: baseline;
  gap: 0.4rem;
  text-decoration: none;
  color: ${colors.ink[700]};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 1px;
    background: ${colors.accent[500]};
    transition: width 0.25s ease;
  }
  &:hover::after { width: 100%; }
`;

export const NavIndex = styled.span`
  font-family: ${fonts.mono};
  font-size: 0.68rem;
  color: ${colors.accent[500]};
`;

export const NavLabel = styled.span`
  font-size: 0.85rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ContactButton = styled.a`
  display: none;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.ink[950]};
  background: transparent;
  padding: 0.6rem 1.25rem;
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${colors.ink[950]};
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover { background: ${colors.ink[950]}; color: white; }

  @media (min-width: ${breakpoints.md}) { display: inline-flex; }
`;

export const MobileMenuButton = styled.button`
  display: inline-flex;
  height: 2.4rem;
  width: 2.4rem;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.ink[950]}33;
  background: transparent;
  color: ${colors.ink[950]};

  @media (min-width: ${breakpoints.md}) { display: none; }
`;