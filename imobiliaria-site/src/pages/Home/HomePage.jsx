import React, { useEffect, useRef } from 'react';
import { sanityClient } from "../../lib/sanity"; // Certifique-se de que o client está configurado
import imageUrlBuilder from '@sanity/image-url';
import heroImage from '../../assets/hero.jpg'; // O bundler vai processar e dar o caminho correto
import aboutImage from '../../assets/about.jpg'; // O bundler vai processar e dar o caminho correto

// Importe todos os Styled Components
import {
  HeroSection, HeroContentWrapper, HeroTextBlock, HeroTitle, HeroDescription, HeroActions,
  PrimaryButton, SecondaryButton, FeaturedImageWrapper, FeaturedImageRelativeContainer,
  DecorativeFrame, FeaturedFigure, FeaturedImage, FigcaptionOverlay, OverlayGradient, OverlayContent,
  OverlayFlexWrapper, OverlayTextGroup, OverlayTitle, OverlaySubtitle, AvailabilityBadge, MicroTrustRow,
  MicroTrustCard, MicroTrustTitle, MicroTrustDescription, SectionDivider,

  FeaturedPropertiesSection, FeaturedPropertiesWrapper, SectionHeader, HeaderTextBlock, ControlsContainer,
  CarouselButton, CarouselRelativeContainer, CarouselScrollContainer, CarouselCardArticle, CarouselCardLink,
  CardImageRelativeContainer, CardImageCarousel, CardImageOverlayGradient, CardBadgesContainer, CardBadge,
  CardDetailsOverlay, CardDetailsFlex, CardDetailsText, CardPrice, CardContentBody, CardTitle, CardFeatures,
  FeatureBadge, CarouselSectionDivider,

  AboutSection, AboutWrapper, AboutGrid, AboutImageColumn, AboutDecorativeFrame, AboutFigure, AboutImage,
  AboutFigcaption, AboutOverlayGradient, AboutOverlayContent, AboutOverlayFlexWrapper, AboutOverlayTextGroup,
  AboutOverlayTitle, AboutOverlaySubtitle, AboutTextColumn, AboutParagraphs, AboutSocialLinks, SocialLinkButton,
  AboutNote,

  ServicesSection, ServicesWrapper, ServicesHeader, ServicesDescription, FeaturesGrid, FeatureCard,
  FeatureCardContent, FeatureIconWrapper, FeatureCardText, ServicesCtaContainer, ServicesCtaButton,
  ServicesSectionDivider,

  TestimonialsSection, TestimonialsWrapper, TestimonialsHeader, TestimonialsGrid, TestimonialCard,
  QuoteIcon, Blockquote, Figcaption, ClientInfo, Rating, TestimonialsCtaContainer, TestimonialsCtaButton,
  TestimonialsSectionDivider,

  FinalCtaSection, FinalCtaWrapper, FinalCtaCard, FinalCtaBackdrop, FinalCtaContent, FinalCtaTextBlock,
  FinalCtaActions, FinalCtaPrimaryButton, FinalCtaSecondaryButton, FinalCtaNote
} from './HomePage.styles';

// Inicializa o builder de URL de imagem
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function HomePage() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scroll = (direction) => {
      const scrollAmount = carousel.clientWidth * 0.8; // Scroll 80% da largura do carousel
      if (direction === 'prev') {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    const prevButton = document.querySelector('[data-carousel-prev]');
    const nextButton = document.querySelector('[data-carousel-next]');

    if (prevButton) {
      prevButton.onclick = () => scroll('prev');
    }
    if (nextButton) {
      nextButton.onclick = () => scroll('next');
    }

    // Limpeza dos event listeners
    return () => {
      if (prevButton) prevButton.onclick = null;
      if (nextButton) nextButton.onclick = null;
    };
  }, []);

  return (
    <>
      {/* HERO (single column, centered text, image below) */}
      <HeroSection>
        <HeroContentWrapper>
          {/* Text block */}
          <HeroTextBlock>
            <HeroTitle>
              Marilda Souza
            </HeroTitle>

            <HeroDescription>
              A modern, elegant real estate experience—guiding buyers and
              sellers with clarity, discretion, and confidence from first visit
              to final signature.
            </HeroDescription>

            <HeroActions>
              <PrimaryButton href="#listings">
                View featured listings
              </PrimaryButton>
              <SecondaryButton href="#contact">
                Get a property valuation
              </SecondaryButton>
            </HeroActions>
          </HeroTextBlock>

          {/* Featured image below */}
          <FeaturedImageWrapper>
            <FeaturedImageRelativeContainer>
              {/* Decorative frame */}
              <DecorativeFrame></DecorativeFrame>

              <FeaturedFigure>
                {/* Replace with Marilda's real photo when available */}
                <FeaturedImage
                  src={heroImage}
                  alt="Marilda Souza, real estate consultant (featured portrait)"
                  loading="eager"
                />

                {/* Minimal overlay caption */}
                <FigcaptionOverlay>
                  <OverlayGradient></OverlayGradient>
                  <OverlayContent>
                    <OverlayFlexWrapper>
                      <OverlayTextGroup>
                        <OverlayTitle>
                          Marilda Souza
                        </OverlayTitle>
                        <OverlaySubtitle>
                          Real Estate Consultant • Premium service
                        </OverlaySubtitle>
                      </OverlayTextGroup>
                      <AvailabilityBadge aria-label="Availability status">
                        <span></span>
                        Available today
                      </AvailabilityBadge>
                    </OverlayFlexWrapper>
                  </OverlayContent>
                </FigcaptionOverlay>
              </FeaturedFigure>

              {/* Optional micro-trust row (kept minimal) */}
              <MicroTrustRow>
                <MicroTrustCard>
                  <MicroTrustTitle>Buy</MicroTrustTitle>
                  <MicroTrustDescription>
                    Shortlist + efficient viewings
                  </MicroTrustDescription>
                </MicroTrustCard>
                <MicroTrustCard>
                  <MicroTrustTitle>Sell</MicroTrustTitle>
                  <MicroTrustDescription>
                    Pricing + premium presentation
                  </MicroTrustDescription>
                </MicroTrustCard>
                <MicroTrustCard>
                  <MicroTrustTitle>
                    Negotiate
                  </MicroTrustTitle>
                  <MicroTrustDescription>
                    Strategy with discretion
                  </MicroTrustDescription>
                </MicroTrustCard>
              </MicroTrustRow>
            </FeaturedImageRelativeContainer>
          </FeaturedImageWrapper>

          {/* Divider */}
          <SectionDivider>
            <div></div>
          </SectionDivider>
        </HeroContentWrapper>
      </HeroSection>

      {/* FEATURED PROPERTIES (Carousel) */}
      <FeaturedPropertiesSection id="featured-properties">
        <FeaturedPropertiesWrapper>
          {/* Section header */}
          <SectionHeader>
            <HeaderTextBlock>
              <p>FEATURED PROPERTIES</p>
              <h2>Handpicked listings</h2>
              <p className="description">
                A curated selection with strong photos, great location, and
                pricing clarity.
              </p>
            </HeaderTextBlock>

            {/* Controls */}
            <ControlsContainer>
              <CarouselButton
                type="button"
                aria-label="Previous properties"
                data-carousel-prev
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </CarouselButton>

              <CarouselButton
                type="button"
                aria-label="Next properties"
                data-carousel-next
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </CarouselButton>
            </ControlsContainer>
          </SectionHeader>

          {/* Carousel */}
          <CarouselRelativeContainer>
            <CarouselScrollContainer
              ref={carouselRef}
              data-carousel
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {/* Card 1 */}
              <CarouselCardArticle style={{ scrollSnapAlign: 'start' }}>
                <CarouselCardLink href="#">
                  <CardImageRelativeContainer>
                    <CardImageCarousel
                      src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80"
                      alt="Modern house with garden"
                      loading="lazy"
                    />
                    <CardImageOverlayGradient></CardImageOverlayGradient>

                    <CardBadgesContainer>
                      <CardBadge>For sale</CardBadge>
                      <CardBadge className="new-badge">New</CardBadge>
                    </CardBadgesContainer>

                    <CardDetailsOverlay>
                      <CardDetailsFlex>
                        <CardDetailsText>
                          <p>Jardins • São Paulo</p>
                          <p className="subtitle">Townhouse • 3 bed • 2 bath</p>
                        </CardDetailsText>
                        <CardPrice>R$ 2.450.000</CardPrice>
                      </CardDetailsFlex>
                    </CardDetailsOverlay>
                  </CardImageRelativeContainer>

                  <CardContentBody>
                    <CardTitle>
                      Light-filled townhouse with private outdoor area
                    </CardTitle>

                    <CardFeatures>
                      <FeatureBadge>140 m²</FeatureBadge>
                      <FeatureBadge>2 parking</FeatureBadge>
                      <FeatureBadge>Near parks</FeatureBadge>
                    </CardFeatures>
                  </CardContentBody>
                </CarouselCardLink>
              </CarouselCardArticle>

              {/* Card 2 */}
              <CarouselCardArticle style={{ scrollSnapAlign: 'start' }}>
                <CarouselCardLink href="#">
                  <CardImageRelativeContainer>
                    <CardImageCarousel
                      src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80"
                      alt="Elegant apartment interior"
                      loading="lazy"
                    />
                    <CardImageOverlayGradient></CardImageOverlayGradient>

                    <CardBadgesContainer>
                      <CardBadge>For sale</CardBadge>
                      <CardBadge>Prime</CardBadge>
                    </CardBadgesContainer>

                    <CardDetailsOverlay>
                      <CardDetailsFlex>
                        <CardDetailsText>
                          <p>Itaim Bibi • São Paulo</p>
                          <p className="subtitle">Apartment • 2 bed • 2 bath</p>
                        </CardDetailsText>
                        <CardPrice>R$ 1.980.000</CardPrice>
                      </CardDetailsFlex>
                    </CardDetailsOverlay>
                  </CardImageRelativeContainer>

                  <CardContentBody>
                    <CardTitle>
                      Minimal apartment with panoramic city views
                    </CardTitle>

                    <CardFeatures>
                      <FeatureBadge>98 m²</FeatureBadge>
                      <FeatureBadge>1 parking</FeatureBadge>
                      <FeatureBadge>Concierge</FeatureBadge>
                    </CardFeatures>
                  </CardContentBody>
                </CarouselCardLink>
              </CarouselCardArticle>

              {/* Card 3 */}
              <CarouselCardArticle style={{ scrollSnapAlign: 'start' }}>
                <CarouselCardLink href="#">
                  <CardImageRelativeContainer>
                    <CardImageCarousel
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
                      alt="Contemporary house facade"
                      loading="lazy"
                    />
                    <CardImageOverlayGradient></CardImageOverlayGradient>

                    <CardBadgesContainer>
                      <CardBadge>For sale</CardBadge>
                      <CardBadge className="new-badge">Open house</CardBadge>
                    </CardBadgesContainer>

                    <CardDetailsOverlay>
                      <CardDetailsFlex>
                        <CardDetailsText>
                          <p>Alphaville • Barueri</p>
                          <p className="subtitle">House • 4 bed • 5 bath</p>
                        </CardDetailsText>
                        <CardPrice>R$ 4.900.000</CardPrice>
                      </CardDetailsFlex>
                    </CardDetailsOverlay>
                  </CardImageRelativeContainer>

                  <CardContentBody>
                    <CardTitle>
                      Contemporary home with pool and gourmet area
                    </CardTitle>

                    <CardFeatures>
                      <FeatureBadge>140 m²</FeatureBadge>
                      <FeatureBadge>2 parking</FeatureBadge>
                      <FeatureBadge>Near parks</FeatureBadge>
                    </CardFeatures>
                  </CardContentBody>
                </CarouselCardLink>
              </CarouselCardArticle>
            </CarouselScrollContainer>
          </CarouselRelativeContainer>

          <CarouselSectionDivider>
            <div></div>
          </CarouselSectionDivider>
        </FeaturedPropertiesWrapper>
      </FeaturedPropertiesSection>

      {/* SECTION: About Marilda */}
      <AboutSection id="about">
        <AboutWrapper>
          <AboutGrid>
            {/* Left column: Image */}
            <AboutImageColumn>
              <AboutDecorativeFrame></AboutDecorativeFrame>
              <AboutFigure>
                <AboutImage
                  src={aboutImage}
                  alt="Marilda Souza in a professional setting"
                  loading="lazy"
                />
                <AboutFigcaption>
                  <AboutOverlayGradient></AboutOverlayGradient>
                  <AboutOverlayContent>
                    <AboutOverlayFlexWrapper>
                      <AboutOverlayTextGroup>
                        <AboutOverlayTitle>
                          Marilda Souza
                        </AboutOverlayTitle>
                        <AboutOverlaySubtitle>
                          Real Estate Consultant • São Paulo
                        </AboutOverlaySubtitle>
                      </AboutOverlayTextGroup>
                    </AboutOverlayFlexWrapper>
                  </AboutOverlayContent>
                </AboutFigcaption>
              </AboutFigure>
            </AboutImageColumn>

            {/* Right column: Text and social links */}
            <AboutTextColumn>
              <p className="badge">SOBRE MIM</p>
              <h2>
                Experiência, discrição e resultados
              </h2>
              <AboutParagraphs>
                <p>
                  Com mais de 15 anos de experiência no mercado imobiliário de
                  alto padrão em São Paulo, meu trabalho é simplificar o
                  processo de compra e venda para clientes exigentes.
                </p>
                <p>
                  Minha abordagem é baseada em uma curadoria rigorosa,
                  negociação estratégica e um atendimento que prioriza a
                  confiança e a discrição.
                </p>
                <p>
                  Seja para encontrar o lar ideal ou para um investimento
                  inteligente, meu compromisso é com a sua satisfação e com
                  resultados que superem as expectativas.
                </p>
              </AboutParagraphs>

              <AboutSocialLinks>
                <SocialLinkButton
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 3C9.383 3 4 8.275 4 14.77c0 2.362.726 4.67 2.104 6.64L4.7 28.6l7.48-1.34A12.2 12.2 0 0 0 16 26.54c6.617 0 12-5.275 12-11.77C28 8.275 22.617 3 16 3Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M12.8 11.2c.23-.52.48-.53.71-.54h.61c.2 0 .48.08.73.56.25.48.84 1.66.91 1.78.07.12.12.27.02.48-.1.21-.15.34-.3.52-.15.18-.31.4-.44.54-.15.15-.3.31-.13.6.17.29.77 1.22 1.65 1.98 1.13.98 2.08 1.28 2.37 1.43.29.15.46.13.63-.07.17-.2.72-.81.91-1.09.19-.28.38-.23.63-.14.25.09 1.59.72 1.86.85.27.13.45.2.52.31.07.11.07.65-.16 1.27-.23.62-1.33 1.2-1.84 1.25-.47.05-.89.17-3.02-.61-2.57-.93-4.23-3.18-4.36-3.35-.13-.17-1.04-1.38-1.04-2.64 0-1.26.69-1.88.94-2.14Z"
                      fill="currentColor"
                      opacity="0.9"
                    />
                  </svg>
                  WhatsApp
                </SocialLinkButton>
                <SocialLinkButton
                  href="mailto:marilda@example.com"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m22 8-10 7L2 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  E-mail
                </SocialLinkButton>
                <SocialLinkButton
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
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
                  Instagram
                </SocialLinkButton>
              </AboutSocialLinks>

              <AboutNote>
                Replace the phone/email/Instagram URL with Marilda’s real
                contact details.
              </AboutNote>
            </AboutTextColumn>
          </AboutGrid>
        </AboutWrapper>
      </AboutSection>

      {/* SECTION: Imóveis para Morar ou Investir */}
      <ServicesSection id="imoveis-morar-investir">
        <ServicesWrapper>
          {/* 1) Header Area */}
          <ServicesHeader>
            <p className="badge">SERVIÇOS</p>

            <h2>
              Imóveis para Morar ou Investir
            </h2>

            <ServicesDescription>
              <p>
                Atendimento personalizado, estratégico e transparente para
                ajudar você a encontrar imóveis com potencial de valorização,
                qualidade e segurança.
              </p>
              <p>
                Da busca à decisão final, eu cuido da curadoria e da orientação
                para que cada passo seja claro — e cada escolha, bem
                fundamentada.
              </p>
            </ServicesDescription>
          </ServicesHeader>

          {/* 2) Three-Column Features Grid */}
          <FeaturesGrid>
            {/* Left: Investment */}
            <FeatureCard>
              <FeatureCardContent>
                <FeatureIconWrapper>
                  {/* Bar chart icon */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 19.5h16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 19.5v-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 19.5v-10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M17 19.5v-13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </FeatureIconWrapper>

                <FeatureCardText>
                  <h3>
                    Oportunidades de Investimento
                  </h3>
                  <p>
                    Conecto você a imóveis com potencial estratégico para morar
                    ou investir, com foco em segurança, liquidez e valorização
                    ao longo do tempo.
                  </p>
                </FeatureCardText>
              </FeatureCardContent>
            </FeatureCard>

            {/* Middle: Guidance */}
            <FeatureCard>
              <FeatureCardContent>
                <FeatureIconWrapper>
                  {/* House outline icon */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.5 11.5 12 4.5l8.5 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.5 10.5V19.5h11V10.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 19.5v-6h4v6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </FeatureIconWrapper>

                <FeatureCardText>
                  <h3>
                    Orientação Imobiliária
                  </h3>
                  <p>
                    Um imóvel vai além da compra: é conquista. Meu trabalho é
                    identificar oportunidades que unam realização pessoal e
                    localização estratégica — com clareza em cada decisão.
                  </p>
                </FeatureCardText>
              </FeatureCardContent>
            </FeatureCard>

            {/* Right: Ideal property */}
            <FeatureCard>
              <FeatureCardContent>
                <FeatureIconWrapper>
                  {/* Magnifying glass + key icon (custom minimalist) */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    {/* Lens */}
                    <circle
                      cx="10"
                      cy="10"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    {/* Handle */}
                    <path
                      d="M13.8 13.8 20 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    {/* Key teeth integrated near end */}
                    <path
                      d="M18.2 18.2h2.2m-3.6 0h.9m-.9 0v1.1m2.3-1.1v1.1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </FeatureIconWrapper>

                <FeatureCardText>
                  <h3>
                    Escolha do Imóvel Ideal
                  </h3>
                  <p>
                    Comprar um imóvel envolve memórias, sonhos e propósito. Eu
                    ajudo você a conectar emoção e estratégia — transformando
                    possibilidades em escolhas certas.
                  </p>
                </FeatureCardText>
              </FeatureCardContent>
            </FeatureCard>
          </FeaturesGrid>

          {/* 3) CTA Area */}
          <ServicesCtaContainer>
            <ServicesCtaButton href="#contato">
              QUERO CONHECER
            </ServicesCtaButton>
          </ServicesCtaContainer>

          {/* Divider */}
          <ServicesSectionDivider></ServicesSectionDivider>
        </ServicesWrapper>
      </ServicesSection>

      {/* TESTIMONIALS */}
      <TestimonialsSection id="testimonials">
        <TestimonialsWrapper>
          {/* Header */}
          <TestimonialsHeader>
            <p className="badge">DEPOIMENTOS</p>
            <h2>
              Experiências reais, decisões seguras
            </h2>
            <p className="description">
              Um processo imobiliário premium deve ser claro, humano e bem
              conduzido. Aqui estão algumas histórias de clientes que buscaram
              tranquilidade — e encontraram o imóvel certo.
            </p>
          </TestimonialsHeader>

          {/* Grid */}
          <TestimonialsGrid>
            {/* Card 1 */}
            <TestimonialCard>
              <QuoteIcon aria-hidden="true">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M10.2 11.2c0 3-1.7 6.1-5.2 7.1-.4.1-.8-.1-.9-.5l-.2-.6c-.1-.4.1-.8.5-.9 1.8-.6 2.6-1.7 2.8-2.9H5.6c-.9 0-1.6-.7-1.6-1.6V8.6C4 7.7 4.7 7 5.6 7h2.9c.9 0 1.6.7 1.6 1.6v2.6Zm10 0c0 3-1.7 6.1-5.2 7.1-.4.1-.8-.1-.9-.5l-.2-.6c-.1-.4.1-.8.5-.9 1.8-.6 2.6-1.7 2.8-2.9h-1.6c-.9 0-1.6-.7-1.6-1.6V8.6c0-.9.7-1.6 1.6-1.6h2.9c.9 0 1.6.7 1.6 1.6v2.6Z"
                  />
                </svg>
              </QuoteIcon>

              <Blockquote>
                <p>
                  A Marilda foi impecável do início ao fim. Entendeu
                  exatamente o que eu buscava e filtrou opções que realmente
                  faziam sentido — sem perda de tempo e com muita segurança na
                  negociação.
                </p>
              </Blockquote>

              <Figcaption>
                <ClientInfo>
                  <div>
                    Camila R.
                  </div>
                  <div className="role">
                    Compra • São Paulo
                  </div>
                </ClientInfo>

                {/* subtle rating */}
                <Rating aria-label="5 out of 5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17.3 6.2 20.6l1.6-6.6L2.6 9.7l6.8-.6L12 2.8l2.6 6.3 6.8.6-5.2 4.3 1.6 6.6z"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17.3 6.2 20.6l1.6-6.6L2.6 9.7l6.8-.6L12 2.8l2.6 6.3 6.8.6-5.2 4.3 1.6 6.6z"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17.3 6.2 20.6l1.6-6.6L2.6 9.7l6.8-.6L12 2.8l2.6 6.3 6.8.6-5.2 4.3 1.6 6.6z"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17.3 6.2 20.6l1.6-6.6L2.6 9.7l6.8-.6L12 2.8l2.6 6.3 6.8.6-5.2 4.3 1.6 6.6z"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17.3 6.2 20.6l1.6-6.6L2.6 9.7l6.8-.6L12 2.8l2.6 6.3 6.8.6-5.2 4.3 1.6 6.6z"
                    />
                  </svg>
                </Rating>
              </Figcaption>
            </TestimonialCard>

            {/* Card 2 */}
            <TestimonialCard>
              <QuoteIcon aria-hidden="true">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M10.2 11.2c0 3-1.7 6.1-5.2 7.1-.4.1-.8-.1-.9-.5l-.2-.6c-.1-.4.1-.8.5-.9 1.8-.6 2.6-1.7 2.8-2.9H5.6c-.9 0-1.6-.7-1.6-1.6V8.6C4 7.7 4.7 7 5.6 7h2.9c.9 0 1.6.7 1.6 1.6v2.6Zm10 0c0 3-1.7 6.1-5.2 7.1-.4.1-.8-.1-.9-.5l-.2-.6c-.1-.4.1-.8.5-.9 1.8-.6 2.6-1.7 2.8-2.9h-1.6c-.9 0-1.6-.7-1.6-1.6V8.6c0-.9.7-1.6 1.6-1.6h2.9c.9 0 1.6.7 1.6 1.6v2.6Z"
                  />
                </svg>
              </QuoteIcon>

              <Blockquote>
                <p>
                  O diferencial foi a curadoria e a visão estratégica. Eu
                  queria investir com segurança e a Marilda trouxe opções com
                  potencial real de valorização, sempre explicando prós e
                  contras com transparência.
                </p>
              </Blockquote>

              <Figcaption>
                <ClientInfo>
                  <div>
                    Ricardo M.
                  </div>
                  <div className="role">
                    Investimento • SP
                  </div>
                </ClientInfo>

                <Rating aria-label="5 out of 5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17.3 6.2 20.6l1.6-6.6L2.6 9.7l6.8-.6L12 2.8l2.6 6.3 6.8.6-5.2 4.3 1.6 6.6z"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17.3 6.2 20.6l1.6-6.6L2.6 9.7l6.8-.6L12 2.8l2.6 6.3 6.8.6-5.2 4.3 1.6 6.6z"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17.3 6.2 20.6l1.6-6.6L2.6 9.7l6.8-.6L12 2.8l2.6 6.3 6.8.6-5.2 4.3 1.6 6.6z"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17.3 6.2 20.6l1.6-6.6L2.6 9.7l6.8-.6L12 2.8l2.6 6.3 6.8.6-5.2 4.3 1.6 6.6z"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17.3 6.2 20.6l1.6-6.6L2.6 9.7l6.8-.6L12 2.8l2.6 6.3 6.8.6-5.2 4.3 1.6 6.6z"
                    />
                  </svg>
                </Rating>
              </Figcaption>
            </TestimonialCard>

            {/* Card 3 */}
            <TestimonialCard>
              <QuoteIcon aria-hidden="true">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M10.2 11.2c0 3-1.7 6.1-5.2 7.1-.4.1-.8-.1-.9-.5l-.2-.6c-.1-.4.1-.8.5-.9 1.8-.6 2.6-1.7 2.8-2.9H5.6c-.9 0-1.6-.7-1.6-1.6V8.6C4 7.7 4.7 7 5.6 7h2.9c.9 0 1.6.7 1.6 1.6v2.6Zm10 0c0 3-1.7 6.1-5.2 7.1-.4.1-.8-.1-.9-.5l-.2-.6c-.1-.4.1-.8.5-.9 1.8-.6 2.6-1.7 2.8-2.9h-1.6c-.9 0-1.6-.7-1.6-1.6V8.6c0-.9.7-1.6 1.6-1.6h2.9c.9 0 1.6.7 1.6 1.6v2.6Z"
                  />
                </svg>
              </QuoteIcon>

              <Blockquote>
                <p>
                  Eu estava insegura com a venda, mas foi tudo muito bem
                  conduzido. A comunicação foi clara e o posicionamento do
                  imóvel fez diferença. Resultado: vendeu no prazo que
                  combinamos.
                </p>
              </Blockquote>

              <Figcaption>
                <ClientInfo>
                  <div>
                    Fernanda L.
                  </div>
                  <div className="role">
                    Venda • São Paulo
                  </div>
                </ClientInfo>

                <Rating aria-label="5 out of 5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17.3 6.2 20.6l1.6-6.6L2.6 9.7l6.8-.6L12 2.8l2.6 6.3 6.8.6-5.2 4.3 1.6 6.6z"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17.3 6.2 20.6l1.6-6.6L2.6 9.7l6.8-.6L12 2.8l2.6 6.3 6.8.6-5.2 4.3 1.6 6.6z"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17.3 6.2 20.6l1.6-6.6L2.6 9.7l6.8-.6L12 2.8l2.6 6.3 6.8.6-5.2 4.3 1.6 6.6z"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17.3 6.2 20.6l1.6-6.6L2.6 9.7l6.8-.6L12 2.8l2.6 6.3 6.8.6-5.2 4.3 1.6 6.6z"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 17.3 6.2 20.6l1.6-6.6L2.6 9.7l6.8-.6L12 2.8l2.6 6.3 6.8.6-5.2 4.3 1.6 6.6z"
                    />
                  </svg>
                </Rating>
              </Figcaption>
            </TestimonialCard>
          </TestimonialsGrid>

          {/* Optional subtle CTA (keeps it premium) */}
          <TestimonialsCtaContainer>
            <TestimonialsCtaButton href="#contact">
              QUERO FALAR COM A MARILDA
            </TestimonialsCtaButton>
          </TestimonialsCtaContainer>

          <TestimonialsSectionDivider></TestimonialsSectionDivider>
        </TestimonialsWrapper>
      </TestimonialsSection>

      {/* FINAL CTA */}
      <FinalCtaSection id="contact">
        <FinalCtaWrapper>
          <FinalCtaCard>
            {/* subtle backdrop */}
            <FinalCtaBackdrop>
              <div></div>
            </FinalCtaBackdrop>

            <FinalCtaContent>
              <FinalCtaTextBlock>
                <p className="badge">CONTATO</p>

                <h2>
                  Vamos encontrar o imóvel certo para você.
                </h2>

                <p className="description">
                  Me conte o que você busca (ou o que quer vender). Eu retorno
                  com curadoria, próximos passos e uma estratégia clara.
                </p>

                <FinalCtaActions>
                  {/* Primary CTA */}
                  <FinalCtaPrimaryButton
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Falar com Marilda no WhatsApp"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M16 3C9.383 3 4 8.275 4 14.77c0 2.362.726 4.67 2.104 6.64L4.7 28.6l7.48-1.34A12.2 12.2 0 0 0 16 26.54c6.617 0 12-5.275 12-11.77C28 8.275 22.617 3 16 3Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M12.8 11.2c.23-.52.48-.53.71-.54h.61c.2 0 .48.08.73.56.25.48.84 1.66.91 1.78.07.12.12.27.02.48-.1.21-.15.34-.3.52-.15.18-.31.4-.44.54-.15.15-.3.31-.13.6.17.29.77 1.22 1.65 1.98 1.13.98 2.08 1.28 2.37 1.43.29.15.46.13.63-.07.17-.2.72-.81.91-1.09.19-.28.38-.23.63-.14.25.09 1.59.72 1.86.85.27.13.45.2.52.31.07.11.07.65-.16 1.27-.23.62-1.33 1.2-1.84 1.25-.47.05-.89.17-3.02-.61-2.57-.93-4.23-3.18-4.36-3.35-.13-.17-1.04-1.38-1.04-2.64 0-1.26.69-1.88.94-2.14Z"
                        fill="currentColor"
                        opacity="0.9"
                      />
                    </svg>
                    Falar no WhatsApp
                  </FinalCtaPrimaryButton>

                  {/* Secondary CTA (copper ghost) */}
                  <FinalCtaSecondaryButton
                    href="mailto:marilda@example.com?subject=Contato%20-%20Consultoria%20Imobili%C3%A1ria"
                    aria-label="Enviar e-mail para Marilda"
                  >
                    ENVIAR E-MAIL
                  </FinalCtaSecondaryButton>
                </FinalCtaActions>

                <FinalCtaNote>
                  Atendimento com discrição • Curadoria e estratégia • Resposta
                  em horário comercial
                </FinalCtaNote>
              </FinalCtaTextBlock>
            </FinalCtaContent>
          </FinalCtaCard>
        </FinalCtaWrapper>
      </FinalCtaSection>
    </>
  );
}

export default HomePage;