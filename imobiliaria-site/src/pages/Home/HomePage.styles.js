import styled from 'styled-components';
import { Link } from 'react-router-dom';
const colors = {
  ink: { 950: "#0B1220", 900: "#1A202C", 700: "#4A5568", 500: "#718096" },
  sand: { 50: "#FDFDFB", 100: "#F5F5F4", 200: "#E7E5E4", 300: "#D6D3D1" },
  accent: { 500: "#B08B5A", 600: "#9C7A4F" },
  emerald: { 400: "#34D399" },
  moss: { 700: "#2B3A2E" },
  paper: { 50: "#FDFDFB" },   // <-- ADICIONE ESTA LINHA
  rust: { 500: "#B08B5A" },   // <-- ADICIONE ESTA LINHA
};
const fonts = {
  sans: "'Inter', sans-serif",
  serif: "'Fraunces', 'Playfair Display', serif", // <-- alterado
  mono: "'IBM Plex Mono', monospace",             // <-- adicionado
};
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
};

const shadows = {
  // Mais sutis e difusas para um toque premium
  soft: "0 2px 8px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)",
  medium: "0 5px 15px rgba(0, 0, 0, 0.08), 0 2px 5px rgba(0, 0, 0, 0.05)",
  // Adicionar uma sombra mais profunda para elementos em destaque
  deep: "0 10px 30px rgba(0, 0, 0, 0.12), 0 4px 10px rgba(0, 0, 0, 0.08)",
};

const borderRadius = {
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  "4xl": "2rem", // 32px
  "5xl": "2.5rem", // Novo: 40px para elementos maiores
};

// --- HERO SECTION ---
export const HeroSection = styled.section`
  background: ${colors.sand[50]};
  border-bottom: 1px solid ${colors.ink[950]}14;
`;

export const HeroGrid = styled.div`
  max-width: 84rem;
  margin: 0 auto;
  padding: 3rem 1.25rem 4rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 1.05fr 0.95fr;
    padding: 5rem 2.5rem 6rem;
    gap: 3rem;
  }
`;

export const HeroTextCol = styled.div``;

export const HeroEyebrow = styled.p`
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${colors.accent[500]};
  margin-bottom: 1.25rem;
`;

export const HeroTitle = styled.h1`
  font-family: ${fonts.serif};
  font-size: 2.6rem;
  line-height: 1.08;
  font-weight: 600;
  color: ${colors.ink[950]};
  letter-spacing: -0.01em;

  em { font-style: italic; color: ${colors.moss[700]}; }

  @media (min-width: ${breakpoints.sm}) { font-size: 3.6rem; }
`;

export const HeroDescription = styled.p`
  margin-top: 1.5rem;
  max-width: 34rem;
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${colors.ink[700]};
`;

export const HeroActions = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: ${colors.ink[950]};
  color: white;
  padding: 0.85rem 1.6rem;
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.2s ease;
  &:hover { background: ${colors.moss[700]}; }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${colors.ink[950]}33;
  color: ${colors.ink[950]};
  padding: 0.85rem 1.6rem;
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  transition: border-color 0.2s ease;
  &:hover { border-color: ${colors.ink[950]}; }
`;

export const HeroSpecs = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 2.25rem;
  border-top: 1px solid ${colors.ink[950]}1A;
  padding-top: 1.5rem;
`;

export const HeroSpecItem = styled.div`
  display: flex;
  flex-direction: column;
  strong { font-family: ${fonts.mono}; font-size: 1.1rem; color: ${colors.ink[950]}; }
  span { margin-top: 0.2rem; font-size: 0.75rem; color: ${colors.ink[700]}; }
`;

export const HeroImageCol = styled.div``;

export const HeroFigure = styled.figure`
  position: relative;
  border: 1px solid ${colors.ink[950]}1A;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 32rem;
  object-fit: cover;
  filter: grayscale(0.1) contrast(1.02);

  @media (min-width: ${breakpoints.sm}) { height: 38rem; }
`;

export const HeroTag = styled.figcaption`
  position: absolute;
  left: 1.25rem;
  bottom: 1.25rem;
  background: ${colors.sand[50]};
  color: ${colors.ink[950]};
  font-family: ${fonts.mono};
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.55rem 0.9rem;
`;

// --- PROPRIEDADES EM DESTAQUE (Grid editorial) ---
export const PropertiesSection = styled.section`
  background: ${colors.paper[50]};
`;

export const PropertiesWrapper = styled.div`
  max-width: 84rem;
  margin: 0 auto;
  padding: 4rem 1.25rem;

  @media (min-width: ${breakpoints.lg}) {
    padding: 6rem 2.5rem;
  }
`;

export const PropertiesHeader = styled.div`
  margin-bottom: 2.5rem;
`;

export const PropertiesEyebrow = styled.p`
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${colors.rust[500]};
  margin-bottom: 0.75rem;
`;

export const PropertiesTitle = styled.h2`
  font-family: ${fonts.display};
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.ink[950]};

  @media (min-width: ${breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

export const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 1fr;
  }
`;

export const PropertyCard = styled.article`
  ${({ $featured }) => $featured && `
    @media (min-width: ${breakpoints.md}) {
      grid-column: span 4;
      grid-row: span 2;
    }
  `}
  ${({ $featured }) => !$featured && `
    @media (min-width: ${breakpoints.md}) {
      grid-column: span 2;
    }
  `}
`;

export const PropertyLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

export const PropertyImageWrap = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid ${colors.ink[950]}1A;
`;

export const PropertyImage = styled.img`
  width: 100%;
  height: ${({ $featured }) => ($featured ? '26rem' : '14rem')};
  object-fit: cover;
  transition: transform 0.4s ease;

  ${PropertyLink}:hover & {
    transform: scale(1.03);
  }
`;

export const PropertyBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: ${colors.paper[50]};
  font-family: ${fonts.mono};
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.4rem 0.75rem;
  color: ${colors.ink[950]};
`;

export const PropertyOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(to top, ${colors.ink[950]}CC, transparent);
`;

export const PropertyMeta = styled.span`
  font-size: 0.8rem;
  color: ${colors.paper[50]}E6;
`;

export const PropertyPrice = styled.span`
  font-family: ${fonts.mono};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${colors.paper[50]};

  span {
    font-size: 0.7rem;
    font-weight: 400;
    margin-left: 0.2rem;
    color: ${colors.paper[50]}CC;
  }
`;

export const PropertyPriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
`;

export const PropertyTypeTag = styled.span`
  font-family: ${fonts.mono};
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${colors.paper[50]}CC;
`;

export const PropertyTitle = styled.h3`
  margin-top: 1rem;
  font-family: ${fonts.display};
  font-size: 1.15rem;
  font-weight: 600;
  color: ${colors.ink[950]};
`;

export const PropertyFeatures = styled.div`
  margin-top: 0.6rem;
  display: flex;
  gap: 0.5rem;
`;

export const PropertyFeatureTag = styled.span`
  font-family: ${fonts.mono};
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border: 1px solid ${colors.ink[950]}26;
  padding: 0.3rem 0.6rem;
  color: ${colors.ink[600]};
`;

export const PropertiesStateText = styled.p`
  font-family: ${fonts.mono};
  font-size: 0.85rem;
  color: ${colors.ink[700]};
  padding: 2rem 0;
`;

export const PropertiesCtaContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

export const PropertiesCtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.ink[950]};
  background-color: transparent;
  padding: 0.85rem 2rem;
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${colors.ink[950]};
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${colors.ink[950]};
    color: white;
  }
`;

// --- SECTION: About Marilda ---
export const AboutSection = styled.section`
  background-color: white;
`;

export const AboutWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem; /* max-w-7xl */
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem; /* px-4 */
  padding-top: 3.5rem; /* py-14 */
  padding-bottom: 3.5rem; /* py-14 */

  @media (min-width: ${breakpoints.sm}) {
    padding-left: 1.5rem; /* sm:px-6 */
    padding-right: 1.5rem; /* sm:px-6 */
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-left: 2rem; /* lg:px-8 */
    padding-right: 2rem; /* lg:px-8 */
    padding-top: 5rem; /* lg:py-20 */
    padding-bottom: 5rem; /* lg:py-20 */
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 3rem;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4rem;
    align-items: center; // Centraliza verticalmente as colunas
  }
`;

export const AboutFigure = styled.figure`
  position: relative;
  overflow: hidden;
  border: 1px solid ${colors.ink[950]}1A;
  background-color: ${colors.sand[100]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutImage = styled.img`
  height: 30rem;
  width: 100%;
  object-fit: contain;
  filter: grayscale(0.1) contrast(1.02);

  @media (min-width: ${breakpoints.sm}) {
    height: 36rem;
  }
`;

export const SocialLinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid ${colors.ink[950]}33;
  background-color: white;
  padding: 0.6rem 1.1rem;
  font-family: ${fonts.mono};
  font-size: 0.75rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${colors.ink[950]};
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${colors.ink[950]};
    color: white;
  }

  svg {
    height: 1rem;
    width: 1rem;
  }
`;

export const AboutImageColumn = styled.div`
  position: relative;
`;

export const AboutTag = styled.figcaption`
  position: absolute;
  left: 1.25rem;
  bottom: 1.25rem;
  background: ${colors.sand[50]};
  color: ${colors.ink[950]};
  font-family: ${fonts.mono};
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.55rem 0.9rem;
`;

export const AboutTextColumn = styled.div`
  p.badge {
    font-family: ${fonts.mono};
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${colors.accent[500]};
  }

  h2 {
    margin-top: 0.75rem;
    font-family: ${fonts.serif};
    font-size: 1.875rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.15;
    color: ${colors.ink[950]};

    @media (min-width: ${breakpoints.sm}) {
      font-size: 2.25rem;
    }
  }
`;

export const AboutParagraphs = styled.div`
  margin-top: 1rem; /* mt-4 */
  space-y: 1rem; /* space-y-4 */
  font-size: 1rem; /* text-base */
  line-height: 1.625; /* leading-relaxed */
  color: ${colors.ink[700]};
  line-height: 1.5; /* text-pretty */

  @media (min-width: ${breakpoints.sm}) {
    font-size: 1.125rem; /* sm:text-lg */
  }

  p + p { /* space-y-4 */
    margin-top: 1rem;
  }
`;

export const AboutSocialLinks = styled.div`
  margin-top: 2rem; /* mt-8 */
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem; /* gap-3 */
`;


export const AboutNote = styled.p`
  margin-top: 0.75rem; /* mt-3 */
  font-size: 0.75rem; /* text-xs */
  color: ${colors.ink[700]};
`;

// --- SECTION: Imóveis para Morar ou Investir ---
export const ServicesSection = styled.section`
  background-color: white;
`;

export const ServicesWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem; /* max-w-7xl */
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem; /* px-4 */
  padding-top: 3.5rem; /* py-14 */
  padding-bottom: 3.5rem; /* py-14 */

  @media (min-width: ${breakpoints.sm}) {
    padding-left: 1.5rem; /* sm:px-6 */
    padding-right: 1.5rem; /* sm:px-6 */
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-left: 2rem; /* lg:px-8 */
    padding-right: 2rem; /* lg:px-8 */
    padding-top: 5rem; /* lg:py-20 */
    padding-bottom: 5rem; /* lg:py-20 */
  }
`;

export const ServicesHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 48rem; /* max-w-3xl */
  text-align: center;

  p.badge {
    font-family: ${fonts.mono};
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${colors.accent[500]};
  }

  h2 {
    margin-top: 0.75rem; /* mt-3 */
    font-family: ${fonts.serif};
    font-size: 1.875rem; /* text-3xl */
    font-weight: 600; /* font-semibold */
    letter-spacing: -0.025em; /* tracking-tight */
    line-height: 1.2; /* text-balance */

    @media (min-width: ${breakpoints.sm}) {
      font-size: 2.25rem; /* sm:text-4xl */
    }
  }
`;

export const ServicesDescription = styled.div`
  margin-top: 1rem; /* mt-4 */
  space-y: 1rem; /* space-y-4 */
  font-size: 1rem; /* text-base */
  line-height: 1.625; /* leading-relaxed */
  color: ${colors.ink[700]};
  line-height: 1.5; /* text-pretty */

  @media (min-width: ${breakpoints.sm}) {
    font-size: 1.125rem; /* sm:text-lg */
  }

  p + p { /* space-y-4 */
    margin-top: 1rem;
  }
`;

export const FeaturesGrid = styled.div`
  margin-top: 3rem; /* mt-12 */
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */
  gap: 1.5rem; /* gap-6 */

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* md:grid-cols-3 */
    gap: 2rem; /* md:gap-8 */
  }
`;

export const FeatureCard = styled.article`
  border: 1px solid ${colors.ink[950]}1A;
  background-color: white;
  padding: 2rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${colors.ink[950]}40;
  }
`;

export const FeatureIndex = styled.span`
  display: block;
  font-family: ${fonts.mono};
  font-size: 0.75rem;
  color: ${colors.accent[500]};
  margin-bottom: 0.5rem;
`;

export const FeatureCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem; /* gap-4 */
`;

export const FeatureIconWrapper = styled.div`
  display: grid;
  height: 2.75rem;
  width: 2.75rem;
  place-items: center;
  border: 1px solid ${colors.ink[950]}1A;

  svg {
    height: 1.4rem;
    width: 1.4rem;
    color: ${colors.ink[950]};
  }
`;
export const FeatureCardText = styled.div`
  h3 {
    margin-top: 1rem;
    font-family: ${fonts.serif};
    font-size: 1.15rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: ${colors.ink[950]};
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.625;
    color: ${colors.ink[700]};
  }
`;
export const ServicesCtaContainer = styled.div`
  margin-top: 3rem; /* mt-12 */
  display: flex;
  justify-content: center;
`;

export const ServicesCtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.ink[950]};
  background-color: transparent;
  padding: 0.85rem 2rem;
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${colors.ink[950]};
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${colors.ink[950]};
    color: white;
  }
`;

export const ServicesSectionDivider = styled.div`
  margin-top: 3.5rem; /* mt-14 */
  height: 1px; /* h-px */
  width: 100%;
  background-color: ${colors.sand[200]};
`;

// --- TESTIMONIALS SECTION ---
export const TestimonialsSection = styled.section`
  background-color: white;
`;

export const TestimonialsWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem; /* max-w-7xl */
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem; /* px-4 */
  padding-top: 3.5rem; /* py-14 */
  padding-bottom: 3.5rem; /* py-14 */

  @media (min-width: ${breakpoints.sm}) {
    padding-left: 1.5rem; /* sm:px-6 */
    padding-right: 1.5rem; /* sm:px-6 */
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-left: 2rem; /* lg:px-8 */
    padding-right: 2rem; /* lg:px-8 */
    padding-top: 5rem; /* lg:py-20 */
    padding-bottom: 5rem; /* lg:py-20 */
  }
`;

export const TestimonialsHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 48rem; /* max-w-3xl */
  text-align: center;

 p.badge {
    font-family: ${fonts.mono};
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${colors.accent[500]};
  }
  h2 {
    margin-top: 0.75rem; /* mt-3 */
    font-family: ${fonts.serif};
    font-size: 1.875rem; /* text-3xl */
    font-weight: 600; /* font-semibold */
    letter-spacing: -0.025em; /* tracking-tight */
    line-height: 1.2; /* text-balance */

    @media (min-width: ${breakpoints.sm}) {
      font-size: 2.25rem; /* sm:text-4xl */
    }
  }

  p.description {
    margin-top: 1rem; /* mt-4 */
    font-size: 1rem; /* text-base */
    line-height: 1.625; /* leading-relaxed */
    color: ${colors.ink[700]};
    line-height: 1.5; /* text-pretty */

    @media (min-width: ${breakpoints.sm}) {
      font-size: 1.125rem; /* sm:text-lg */
    }
  }
`;

export const TestimonialsGrid = styled.div`
  margin-top: 3rem; /* mt-12 */
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */
  gap: 1.5rem; /* gap-6 */

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* md:grid-cols-3 */
    gap: 2rem; /* md:gap-8 */
  }
`;

export const TestimonialCard = styled.figure`
  position: relative;
  overflow: hidden;
  border: 1px solid ${colors.ink[950]}1A;
  background-color: white;
  padding: 1.75rem;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${colors.ink[950]}40;
  }
`;

export const QuoteIcon = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  color: ${colors.accent[500]}33;
`;

export const Blockquote = styled.blockquote`
  position: relative;
  p {
    font-size: 0.875rem; /* text-sm */
    line-height: 1.625; /* leading-relaxed */
    color: ${colors.ink[700]};
  }
`;

export const Figcaption = styled.figcaption`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid ${colors.ink[950]}1A;
  padding-top: 1.25rem;
`;

export const ClientInfo = styled.div`
  div {
    font-size: 0.875rem; /* text-sm */
    font-weight: 600; /* font-semibold */
    color: ${colors.ink[950]};
  }
  .role {
    font-size: 0.75rem; /* text-xs */
    color: ${colors.ink[700]};
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${colors.accent[500]};

  svg {
    height: 1rem;
    width: 1rem;
  }
`;

export const TestimonialsCtaContainer = styled.div`
  margin-top: 3rem; /* mt-12 */
  display: flex;
  justify-content: center;
`;

export const TestimonialsCtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.ink[950]};
  background-color: transparent;
  padding: 0.85rem 2rem;
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${colors.ink[950]};
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${colors.ink[950]};
    color: white;
  }
`;

export const TestimonialsSectionDivider = styled.div`
  margin-top: 3.5rem; /* mt-14 */
  height: 1px; /* h-px */
  width: 100%;
  background-color: ${colors.sand[200]};
`;

// --- CTA FINAL ---
export const FinalCtaSection = styled.section`
  background-color: white;
`;

export const FinalCtaWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;

  @media (min-width: ${breakpoints.sm}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

export const FinalCtaCard = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid ${colors.ink[950]}1A;
  background-color: ${colors.sand[50]};
`;

export const FinalCtaContent = styled.div`
  position: relative;
  padding: 3rem 1.5rem;

  @media (min-width: ${breakpoints.sm}) {
    padding: 3.5rem 2.5rem;
  }
  @media (min-width: ${breakpoints.lg}) {
    padding: 3.5rem 3.5rem;
  }
`;

export const FinalCtaTextBlock = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  text-align: center;

  p.badge {
    font-family: ${fonts.mono};
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${colors.accent[500]};
  }

  h2 {
    margin-top: 0.75rem;
    font-family: ${fonts.serif};
    font-size: 1.875rem;
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.2;

    @media (min-width: ${breakpoints.sm}) {
      font-size: 2.25rem;
    }
  }

  p.description {
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 1.625;
    color: ${colors.ink[700]};

    @media (min-width: ${breakpoints.sm}) {
      font-size: 1.125rem;
    }
  }
`;

export const FinalCtaActions = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
  }
`;

export const FinalCtaPrimaryButton = styled.a`
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background-color: ${colors.ink[950]};
  padding: 0.85rem 1.75rem;
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.moss[700]};
  }

  @media (min-width: ${breakpoints.sm}) {
    width: auto;
  }

  svg {
    height: 1rem;
    width: 1rem;
  }
`;

export const FinalCtaSecondaryButton = styled.a`
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.ink[950]}33;
  background-color: transparent;
  padding: 0.85rem 1.75rem;
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${colors.ink[950]};
  text-decoration: none;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${colors.ink[950]};
  }

  @media (min-width: ${breakpoints.sm}) {
    width: auto;
  }
`;

export const FinalCtaNote = styled.p`
  margin-top: 1.25rem;
  font-family: ${fonts.mono};
  font-size: 0.7rem;
  letter-spacing: 0.03em;
  color: ${colors.ink[700]};
`;