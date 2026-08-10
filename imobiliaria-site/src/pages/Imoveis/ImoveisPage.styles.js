import styled from 'styled-components';

const colors = {
  ink: { 950: "#0B1220", 900: "#1A202C", 700: "#4A5568", 500: "#718096" },
  sand: { 50: "#FDFDFB", 100: "#F5F5F4", 200: "#E7E5E4" },
  accent: { 500: "#B08B5A" },
};

const fonts = {
  serif: "'Fraunces', 'Playfair Display', serif",
  mono: "'IBM Plex Mono', monospace",
};

const breakpoints = { sm: '640px', md: '768px', lg: '1024px' };

export const PageSection = styled.section`
  background: white;
  min-height: 60vh;
`;

export const PageWrapper = styled.div`
  max-width: 84rem;
  margin: 0 auto;
  padding: 3rem 1.25rem 4rem;

  @media (min-width: ${breakpoints.lg}) {
    padding: 4rem 2.5rem 6rem;
  }
`;

export const PageHeader = styled.div`
  margin-bottom: 2.5rem;
  border-bottom: 1px solid ${colors.ink[950]}14;
  padding-bottom: 2rem;
`;

export const PageEyebrow = styled.p`
  font-family: ${fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${colors.accent[500]};
  margin-bottom: 0.75rem;
`;

export const PageTitle = styled.h1`
  font-family: ${fonts.serif};
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.ink[950]};

  @media (min-width: ${breakpoints.sm}) {
    font-size: 2.6rem;
  }
`;

export const PageDescription = styled.p`
  margin-top: 0.75rem;
  max-width: 34rem;
  font-size: 1rem;
  line-height: 1.6;
  color: ${colors.ink[700]};
`;

export const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StateText = styled.p`
  font-family: ${fonts.mono};
  font-size: 0.85rem;
  color: ${colors.ink[700]};
  padding: 2rem 0;
`;