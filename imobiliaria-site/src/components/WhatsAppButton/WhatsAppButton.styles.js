import styled from 'styled-components';

export const FloatingButton = styled.a`
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 9999px;
  background-color: #25D366;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.06);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);
  }

  svg {
    height: 1.8rem;
    width: 1.8rem;
  }
`;