import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importe Link para estilizá-lo

// Defina as cores e fontes que você usava no Tailwind aqui,
// ou importe-as de um arquivo de tema global se você tiver um.
// Por simplicidade, vou replicar algumas das cores que você usou.
const colors = {
  ink: {
    950: "#0B1220",
    700: "#334155",
  },
  sand: {
    200: "#E7E5E4",
  },
  'marilda-red': {
    500: "#B08B5A",
  },
};

const fonts = {
  sans: "'Inter', sans-serif",
  serif: "'Playfair Display', serif",
};

export const CardContainer = styled.article`
  border: 1px solid ${colors.sand[200]};
  border-radius: 0.75rem; /* rounded-xl */
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Exemplo de sombra, ajuste conforme 'shadow-soft' */
  display: flex;
  flex-direction: column;
  background-color: white;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px; /* Altura fixa para as imagens dos cards */
  object-fit: cover;
  display: block;
`;

export const CardBody = styled.div`
  padding: 1.5rem; /* p-6 */
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Para que o body ocupe o espaço restante */

  h3 {
    font-family: ${fonts.serif};
    font-size: 1.5rem; /* text-2xl */
    font-weight: 600; /* font-semibold */
    color: ${colors.ink[950]};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem; /* text-sm */
    color: ${colors.ink[700]};
    margin-bottom: 0.5rem;
  }

  .price {
    font-size: 1.25rem; /* text-xl */
    font-weight: 700; /* font-bold */
    color: ${colors.ink[950]};
    margin-top: auto; /* Empurra o preço para baixo */
    margin-bottom: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem; /* rounded-lg */
  background-color: ${colors.ink[950]};
  color: white;
  padding: 0.75rem 1.25rem; /* px-5 py-3 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.ink[700]};
  }
`;