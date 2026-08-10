import React from 'react';
import { useEffect, useState } from "react";
import { sanityClient, urlFor } from "../../lib/sanity";
import { imoveisDestaqueQuery } from "../../lib/queries";
import heroImage from '../../assets/hero.jpg'; // O bundler vai processar e dar o caminho correto
import aboutImage from '../../assets/about.jpg'; // O bundler vai processar e dar o caminho correto

// Importe todos os Styled Components
import {
  HeroSection, HeroGrid, HeroTextCol, HeroEyebrow, HeroTitle, HeroDescription,
  HeroActions, PrimaryButton, SecondaryButton, HeroSpecs, HeroSpecItem,
  HeroImageCol, HeroFigure, HeroImage, HeroTag,

  PropertiesSection, PropertiesWrapper, PropertiesHeader, PropertiesEyebrow,
  PropertiesTitle, PropertiesGrid, PropertyCard, PropertyLink, PropertyImageWrap,
  PropertyImage, PropertyBadge, PropertyOverlay, PropertyPrice, PropertyPriceBlock,
  PropertyTypeTag, PropertyMeta, PropertyTitle, PropertyFeatures, PropertyFeatureTag,

  AboutSection, AboutWrapper, AboutGrid, AboutImageColumn, AboutFigure,
  AboutImage, AboutTextColumn, AboutParagraphs, AboutSocialLinks, SocialLinkButton,
  AboutNote,

ServicesSection, ServicesWrapper, ServicesHeader, ServicesDescription, FeaturesGrid, FeatureCard,
FeatureCardContent, FeatureIndex, FeatureIconWrapper, FeatureCardText, ServicesCtaContainer, ServicesCtaButton,
ServicesSectionDivider,

  TestimonialsSection, TestimonialsWrapper, TestimonialsHeader, TestimonialsGrid, TestimonialCard,
  QuoteIcon, Blockquote, Figcaption, ClientInfo, Rating, TestimonialsCtaContainer, TestimonialsCtaButton,
  TestimonialsSectionDivider,

  FinalCtaSection, FinalCtaWrapper, FinalCtaCard, FinalCtaContent, FinalCtaTextBlock,
  FinalCtaActions, FinalCtaPrimaryButton, FinalCtaSecondaryButton, FinalCtaNote,
  AboutTag,
  PropertiesStateText,
  PropertiesCtaContainer,
  PropertiesCtaButton
} from './HomePage.styles';
import { FaWhatsapp } from 'react-icons/fa';

function HomePage() {
 const [imoveisDestaque, setImoveisDestaque] = useState(null);

  useEffect(() => {
    sanityClient.fetch(imoveisDestaqueQuery).then((data) => {
      setImoveisDestaque(data || []);
    });
  }, []);
  return (
    <>
    {/* HERO */}
<HeroSection>
  <HeroGrid>
    <HeroTextCol>
      <HeroEyebrow>Nº 01 — Consultoria Imobiliária</HeroEyebrow>
      <HeroTitle>
        Imóveis certos, <em>decisões</em> seguras — em Curitiba.
      </HeroTitle>
      <HeroDescription>
        Curadoria estratégica para quem busca morar bem ou investir com
        clareza. Do primeiro contato à assinatura, discrição e método em
        cada etapa.
      </HeroDescription>

      <HeroActions>
        <PrimaryButton href="#featured-properties">Ver imóveis selecionados</PrimaryButton>
        <SecondaryButton href="#contact">Solicitar avaliação</SecondaryButton>
      </HeroActions>

      <HeroSpecs>
        <HeroSpecItem><strong>15+</strong><span>anos de atuação</span></HeroSpecItem>
        <HeroSpecItem><strong>120+</strong><span>negociações conduzidas</span></HeroSpecItem>
        <HeroSpecItem><strong>CWB/PR</strong><span>atuação local</span></HeroSpecItem>
      </HeroSpecs>
    </HeroTextCol>

    <HeroImageCol>
      <HeroFigure>
        <HeroImage src={heroImage} alt="Marilda Souza, consultora imobiliária" loading="eager" />
        <HeroTag>Disponível esta semana</HeroTag>
      </HeroFigure>
    </HeroImageCol>
  </HeroGrid>
</HeroSection>

      {/* IMÓVEIS EM DESTAQUE */}
<PropertiesSection id="featured-properties">
  <PropertiesWrapper>
    <PropertiesHeader>
      <PropertiesEyebrow>Nº 02 — Seleção atual</PropertiesEyebrow>
      <PropertiesTitle>Imóveis em destaque</PropertiesTitle>
    </PropertiesHeader>

    {imoveisDestaque === null && (
      <PropertiesStateText>Carregando imóveis...</PropertiesStateText>
    )}

    {imoveisDestaque !== null && imoveisDestaque.length === 0 && (
      <PropertiesStateText>Nenhum imóvel em destaque no momento.</PropertiesStateText>
    )}

    {imoveisDestaque && imoveisDestaque.length > 0 && (
      <PropertiesGrid>
        {imoveisDestaque.map((imovel, index) => {
          const precoFormatado = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 0,
          }).format(imovel.preco || 0);

          return (
            <PropertyCard key={imovel._id} $featured={index === 0}>
              <PropertyLink to={`/imoveis/${imovel.slug}`}>
                <PropertyImageWrap $featured={index === 0}>
                  {imovel.imagemCapa && (
                    <PropertyImage
                      $featured={index === 0}
                      src={urlFor(imovel.imagemCapa)
                        .width(1200)
                        .height(index === 0 ? 900 : 600)
                        .url()}
                      alt={imovel.titulo}
                      loading="lazy"
                    />
                  )}
                  <PropertyOverlay>
  <PropertyMeta>{imovel.bairro} · {imovel.cidade}</PropertyMeta>
  <PropertyPriceBlock>
    <PropertyTypeTag>
      {imovel.tipoNegocio === 'aluguel' ? 'Aluguel' : 'Venda'}
    </PropertyTypeTag>
    <PropertyPrice>
      {precoFormatado}
      {imovel.tipoNegocio === 'aluguel' && <span>/mês</span>}
    </PropertyPrice>
  </PropertyPriceBlock>
</PropertyOverlay>
                </PropertyImageWrap>
                <PropertyTitle>{imovel.titulo}</PropertyTitle>
                <PropertyFeatures>
                  <PropertyFeatureTag>{imovel.area} m²</PropertyFeatureTag>
                  <PropertyFeatureTag>{imovel.quartos} quartos</PropertyFeatureTag>
                  <PropertyFeatureTag>{imovel.vagas} vagas</PropertyFeatureTag>
                </PropertyFeatures>
              </PropertyLink>
            </PropertyCard>
          );
        })}
      </PropertiesGrid>
    )}

    <PropertiesCtaContainer>
      <PropertiesCtaButton to="/imoveis">VER TODOS OS IMÓVEIS</PropertiesCtaButton>
    </PropertiesCtaContainer>
  </PropertiesWrapper>
</PropertiesSection>

      {/* SOBRE A MARILDA */}
<AboutSection id="about">
  <AboutWrapper>
    <AboutGrid>
      <AboutImageColumn>
        <AboutFigure>
          <AboutImage
            src={aboutImage}
            alt="Marilda Souza em atendimento a clientes"
            loading="lazy"
          />
          <AboutTag>Curitiba/PR</AboutTag>
        </AboutFigure>
      </AboutImageColumn>

      <AboutTextColumn>
        <p className="badge">Nº 03 — SOBRE MIM</p>
        <h2>Experiência, discrição e resultados</h2>

        <AboutParagraphs>
          <p>
            Com mais de 15 anos de experiência no mercado imobiliário de
            Curitiba, meu trabalho é simplificar o processo de compra e
            venda para clientes exigentes — de imóveis de médio padrão a
            propriedades de alto padrão.
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
          <SocialLinkButton href="https://wa.me/554184500589" target="_blank" rel="noreferrer">
          <FaWhatsapp/>
            {/* ícone do WhatsApp, mantém o mesmo svg que já existia */}
            WhatsApp
          </SocialLinkButton>
          <SocialLinkButton href="mailto:marysouza510@gmail.com">
            {/* ícone de e-mail, mantém o mesmo svg que já existia */}
            E-mail
          </SocialLinkButton>
          <SocialLinkButton href="https://instagram.com/" target="_blank" rel="noreferrer">
            {/* ícone do Instagram, mantém o mesmo svg que já existia */}
            Instagram
          </SocialLinkButton>
        </AboutSocialLinks>
      </AboutTextColumn>
    </AboutGrid>
  </AboutWrapper>
</AboutSection>

      {/* SECTION: Imóveis para Morar ou Investir */}
      <ServicesSection id="imoveis-morar-investir">
        <ServicesWrapper>
          {/* 1) Header Area */}
          <ServicesHeader>
           <p className="badge">Nº 04 — SERVIÇOS</p>

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
                <FeatureIndex>01</FeatureIndex>   {/* ADICIONE ESTA LINHA */}
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
                <FeatureIndex>02</FeatureIndex>   {/* ADICIONE ESTA LINHA */}
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
                <FeatureIndex>03</FeatureIndex>   {/* ADICIONE ESTA LINHA */}
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
            <ServicesCtaButton href="#contact">
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
            <p className="badge">Nº 05 — DEPOIMENTOS</p>
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
                  <div className="role">Compra • Curitiba</div>
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
                  <div className="role">Investimento • Curitiba</div>
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
                  <div className="role">Venda • Curitiba</div>
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
      <FinalCtaContent>
        <FinalCtaTextBlock>
          <p className="badge">Nº 06 — CONTATO</p>

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
              href="https://wa.me/554184500589"
              target="_blank"
              rel="noreferrer"
              aria-label="Falar com Marilda no WhatsApp"
            >
              <FaWhatsapp/>
              Falar no WhatsApp
            </FinalCtaPrimaryButton>

            {/* Secondary CTA */}
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