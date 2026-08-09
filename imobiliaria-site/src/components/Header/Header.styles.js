import styled from 'styled-components';
import { Link } from 'react-router-dom';

// --- CORES E FONTES DO SEU PROTÓTIPO ---
const colors = {
  ink: {
    950: "#0B1220", // Quase preto, para títulos e texto principal
    900: "#1A202C", // Um pouco mais suave que o 950 (ajustado para o protótipo)
    700: "#4A5568", // Para textos secundários e detalhes (ajustado para o protótipo)
    500: "#718096", // Para textos de apoio e bordas sutis (novo do protótipo)
  },
  sand: {
    50: "#FDFDFB", // Fundo muito claro (ajustado para o protótipo)
    100: "#F5F5F4", // Fundo claro (novo do protótipo)
    200: "#E7E5E4", // Bordas e divisores (ajustado para o protótipo)
    300: "#D6D3D1", // Um tom mais escuro para elementos de fundo (novo do protótipo)
  },
  accent: { // Renomeado de "marilda-red" para "accent" para seguir o protótipo
    500: "#B08B5A", // Cor de destaque para CTAs e elementos importantes
    600: "#9C7A4F", // Tom mais escuro para hover
    50: "#FBF8F5", // Tom muito claro para fundos de destaque
  },
};

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
};

// --- COMPONENTES ESTILIZADOS ---

// Componente Styled para o Header
const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid ${colors.sand[200]};
  background-color: ${colors.sand[50]}CC; /* bg-sand-50/80 (CC = 80% de opacidade) */
  backdrop-filter: blur(4px); /* backdrop-blur-sm (geralmente 4px ou 8px) */
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease; /* Adicionado transição para hover */
`;

// Componente Styled para o Container interno do Header
const HeaderContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem; /* max-w-7xl */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem; /* px-4 */
  padding-top: 1rem; /* py-4 */
  padding-bottom: 1rem; /* py-4 */

  @media (min-width: ${breakpoints.sm}) {
    padding-left: 1.5rem; /* sm:px-6 */
    padding-right: 1.5rem; /* sm:px-6 */
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-left: 2rem; /* lg:px-8 */
    padding-right: 2rem; /* lg:px-8 */
  }
`;

// Componente Styled para o Brand Link
const BrandLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem; /* gap-3 */
  text-decoration: none; /* Remover sublinhado padrão do Link */
`;

// Componente Styled para o Logo Span
const LogoSpan = styled.span`
  display: grid;
  height: 2.5rem; /* h-10 */
  width: 2.5rem; /* w-10 */
  place-items: center;
  border-radius: 0.75rem; /* rounded-xl */
  background-color: ${colors.ink[950]};
  color: white;

  span { /* Estilo para o "MS" dentro do LogoSpan */
    font-size: 0.875rem; /* text-sm */
    font-weight: 600; /* font-semibold */
    letter-spacing: 0.025em; /* tracking-wide */
  }
`;

// Componente Styled para o Texto do Logo
const LogoText = styled.div`
  line-height: 1.25; /* leading-tight */
`;

const LogoTitle = styled.div`
  font-family: 'Playfair Display', serif; /* font-display do protótipo */
  font-size: 1.25rem; /* text-lg */
  font-weight: 600; /* font-semibold */
  letter-spacing: -0.025em; /* tracking-tight */
  color: ${colors.ink[950]}; /* Cor do título */
`;

const LogoSubtitle = styled.div`
  font-size: 0.75rem; /* text-xs */
  color: ${colors.ink[700]};
`;

// Componente Styled para a Navegação (desktop)
const Nav = styled.nav`
  display: none; /* hidden */
  align-items: center;
  gap: 2rem; /* gap-8 */

  @media (min-width: ${breakpoints.md}) {
    display: flex; /* md:flex */
  }
`;

const NavLink = styled.a`
  font-size: 0.875rem; /* text-sm */
  color: ${colors.ink[700]};
  text-decoration: none; /* Remover sublinhado padrão */
  position: relative; /* Para o sublinhado no hover */
  transition: color 0.3s ease; /* transition-colors */

  &:hover {
    color: ${colors.ink[950]};
  }

  /* Efeito de sublinhado no hover */
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px; /* Espessura do sublinhado */
    bottom: -2px; /* Distância do texto */
    left: 0;
    background-color: ${colors.ink[950]}; /* Cor do sublinhado */
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

// Componente Styled para as Ações
const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* gap-3 */
`;

const BookCallButton = styled.a`
  display: none; /* hidden */
  border-radius: 9999px; /* rounded-full */
  border: 1px solid ${colors.sand[200]};
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem; /* px-4 */
  padding-top: 0.5rem; /* py-2 */
  padding-bottom: 0.5rem;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  color: ${colors.ink[950]};
  text-decoration: none; /* Remover sublinhado padrão */
  transition: background-color 0.3s ease, border-color 0.3s ease; /* transition-colors */

  &:hover {
    background-color: ${colors.sand[100]}; /* hover:bg-sand-100 */
  }

  @media (min-width: ${breakpoints.md}) {
    display: inline-flex; /* md:inline-flex */
  }
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px; /* rounded-full */
  background-color: ${colors.accent[500]}; /* bg-accent-500 */
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem; /* px-4 */
  padding-top: 0.5rem; /* py-2 */
  padding-bottom: 0.5rem; /* py-2 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
  text-decoration: none; /* Remover sublinhado padrão */
  transition: background-color 0.3s ease; /* transition-colors */

  &:hover {
    background-color: ${colors.accent[600]}; /* hover:bg-accent-600 */
  }
`;

const MobileMenuButton = styled.button`
  display: inline-flex;
  height: 2.5rem; /* h-10 */
  width: 2.5rem; /* w-10 */
  align-items: center;
  justify-content: center;
  border-radius: 9999px; /* rounded-full */
  border: 1px solid ${colors.sand[200]};
  color: ${colors.ink[950]};
  background-color: white; /* Adicionado para consistência */
  transition: background-color 0.3s ease, border-color 0.3s ease; /* transition-colors */

  &:hover {
    background-color: ${colors.sand[100]}; /* hover:bg-sand-100 */
  }

  @media (min-width: ${breakpoints.md}) {
    display: none; /* md:hidden */
  }
`;

// Exportar os componentes estilizados
export {
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
};