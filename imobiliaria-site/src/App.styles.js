import styled from 'styled-components';

export const GlowBackdrop = styled.div`
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: -10;
`;

export const GlowShape = styled.div`
  position: absolute;
  left: 50%;
  top: -140px;
  height: 520px;
  width: 980px;
  transform: translateX(-50%);
  border-radius: 9999px;
  background: linear-gradient(to bottom, #F5F5F4, #FFFFFF);
  filter: blur(64px);
`;
