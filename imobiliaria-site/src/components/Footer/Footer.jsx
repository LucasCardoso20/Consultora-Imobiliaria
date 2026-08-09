import React from 'react';
import { StyledFooter, FooterContainer, Divider, ContentWrapper, CopyrightText, InstagramLink } from './Footer.styles';

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <Divider />

        <ContentWrapper>
          <CopyrightText>
            © 2026 Marilda Souza Imóveis
          </CopyrightText>

          <InstagramLink
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg
              className="h-5 w-5" // Mantendo classes para o SVG, ou você pode estilizar o SVG diretamente
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M17.2 6.9h.01"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </InstagramLink>
        </ContentWrapper>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;