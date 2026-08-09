import styled from 'styled-components';

// Defina as cores e breakpoints que você usava no Tailwind aqui,
// ou importe-as de um arquivo de tema global se você tiver um.
const colors = {
  ink: {
    950: "#0B1220",
    700: "#334155",
  },
  sand: {
    50: "#FAFAF9",
    200: "#E7E5E4",
  },
};

const breakpoints = {
  sm: '640px',
};

export const StyledFooter = styled.footer`
  background-color: white;
`;

export const FooterContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem; /* max-w-7xl */
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem; /* px-4 */
  padding-top: 2.5rem; /* py-10 */
  padding-bottom: 2.5rem; /* py-10 */

  @media (min-width: ${breakpoints.sm}) {
    padding-left: 1.5rem; /* sm:px-6 */
    padding-right: 1.5rem; /* sm:px-6 */
  }

  @media (min-width: 1024px) { /* lg:px-8 */
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const Divider = styled.div`
  height: 1px; /* h-px */
  width: 100%;
  background-color: ${colors.sand[200]};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem; /* gap-4 */
  padding-top: 2rem; /* pt-8 */

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row; /* sm:flex-row */
  }
`;

export const CopyrightText = styled.p`
  font-size: 0.875rem; /* text-sm */
  color: ${colors.ink[700]};
`;

export const InstagramLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px; /* rounded-full */
  border: 1px solid ${colors.sand[200]};
  background-color: white;
  padding: 0.5rem; /* p-2 */
  color: ${colors.ink[950]};
  &:hover {
    background-color: ${colors.sand[50]};
  }
`;