import styled from 'styled-components';

const colors = {
  ink: { 950: "#0B1220", 900: "#1A202C", 700: "#4A5568", 600: "#3A4454" },
  sand: { 50: "#FDFDFB", 100: "#F5F5F4", 200: "#E7E5E4" },
  accent: { 500: "#B08B5A" },
  moss: { 700: "#2B3A2E" },
};

const fonts = {
  serif: "'Fraunces', 'Playfair Display', serif",
  mono: "'IBM Plex Mono', monospace",
};

const breakpoints = { sm: '640px', md: '768px', lg: '1024px' };

export const DetailSection = styled.section`
  background: white;
  min-height: 60vh;
`;

export const DetailWrapper = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 2rem 1.25rem 4rem;

  @media (min-width: ${breakpoints.lg}) {
    padding: 2.5rem 2.5rem 6rem;
  }
`;

export const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${colors.ink[700]};
  text-decoration: none;
  margin-bottom: 1.5rem;

  &:hover {
    color: ${colors.ink[950]};
  }
`;

export const DetailFigure = styled.figure`
  position: relative;
  border: 1px solid ${colors.ink[950]}1A;
  overflow: hidden;
`;

export const DetailImage = styled.img`
  width: 100%;
  height: 22rem;
  object-fit: cover;
  filter: grayscale(0.1) contrast(1.02);

  @media (min-width: ${breakpoints.sm}) {
    height: 30rem;
  }
`;

export const DetailTag = styled.figcaption`
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

export const DetailGrid = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 1.6fr 1fr;
    gap: 3.5rem;
  }
`;

export const DetailMain = styled.div``;

export const DetailTitle = styled.h1`
  font-family: ${fonts.serif};
  font-size: 1.9rem;
  font-weight: 600;
  color: ${colors.ink[950]};
  letter-spacing: -0.01em;

  @media (min-width: ${breakpoints.sm}) {
    font-size: 2.4rem;
  }
`;

export const DetailLocation = styled.p`
  margin-top: 0.5rem;
  font-family: ${fonts.mono};
  font-size: 0.8rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${colors.accent[500]};
`;

export const DetailDescription = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 1.7;
  color: ${colors.ink[700]};
`;

export const DetailSidebar = styled.aside`
  border: 1px solid ${colors.ink[950]}1A;
  padding: 1.75rem;
  height: fit-content;

  @media (min-width: ${breakpoints.lg}) {
    position: sticky;
    top: 6rem;
  }
`;

export const PriceLabel = styled.p`
  font-family: ${fonts.mono};
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${colors.ink[700]};
`;

export const PriceValue = styled.p`
  margin-top: 0.4rem;
  font-family: ${fonts.serif};
  font-size: 1.8rem;
  font-weight: 600;
  color: ${colors.ink[950]};
`;

export const SpecsList = styled.ul`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${colors.ink[950]}1A;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const SpecItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: ${colors.ink[700]};

  strong {
    font-family: ${fonts.mono};
    color: ${colors.ink[950]};
  }
`;

export const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  background: ${colors.ink[950]};
  color: white;
  padding: 0.85rem 1.5rem;
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${colors.moss[700]};
  }
`;

export const StateText = styled.p`
  font-family: ${fonts.mono};
  font-size: 0.85rem;
  color: ${colors.ink[700]};
  padding: 3rem 1.25rem;
`;