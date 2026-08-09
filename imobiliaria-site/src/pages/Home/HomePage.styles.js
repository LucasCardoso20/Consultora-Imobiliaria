import styled from 'styled-components';

// --- CORES, FONTES E SOMBRAS DO SEU PROTÓTIPO ---
const colors = {
  ink: {
    950: "#0B1220", // Quase preto, para títulos e texto principal
    900: "#1A202C", // Um pouco mais suave que o 950
    700: "#4A5568", // Para textos secundários e detalhes
    500: "#718096", // Para textos de apoio e bordas sutis
  },
  sand: {
    50: "#FDFDFB", // Fundo muito claro
    100: "#F5F5F4", // Fundo claro
    200: "#E7E5E4", // Bordas e divisores
    300: "#D6D3D1", // Um tom mais escuro para elementos de fundo
  },
  accent: {
    500: "#B08B5A", // Cor de destaque para CTAs e elementos importantes
    600: "#9C7A4F", // Tom mais escuro para hover
  },
  emerald: {
    400: "#34D399", // Cor para o "Available today"
  }
};

const fonts = {
  sans: "'Inter', sans-serif",
  serif: "'Playfair Display', serif", // font-display no protótipo
};

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
};

const shadows = {
  soft: "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08)", // shadow-sm do Tailwind
  medium: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)", // shadow-md do Tailwind
  // O protótipo usa "shadow-medium" que é mais forte que o "soft" que eu tinha usado.
  // Ajustei para o equivalente do shadow-md do Tailwind.
};

const borderRadius = {
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  "4xl": "2rem", // 32px
};

// --- HERO SECTION ---
export const HeroSection = styled.section`
  position: relative;
`;

export const HeroContentWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem; /* max-w-5xl (1024px) */
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem; /* px-4 */
  padding-top: 3rem; /* py-12 */
  padding-bottom: 3rem; /* py-12 */

  @media (min-width: ${breakpoints.sm}) {
    padding-left: 1.5rem; /* sm:px-6 */
    padding-right: 1.5rem; /* sm:px-6 */
    padding-top: 4rem; /* sm:py-16 */
    padding-bottom: 4rem; /* sm:py-16 */
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-left: 2rem; /* lg:px-8 */
    padding-right: 2rem; /* lg:px-8 */
    padding-top: 4rem; /* lg:py-20 */
    padding-bottom: 5rem; /* lg:py-20 */
  }
`;

export const HeroTextBlock = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem; /* max-w-2xl */
  text-align: center;
`;

export const HeroTitle = styled.h1`
  margin-top: 1.5rem; /* mt-6 */
  margin-bottom: 0;
  font-family: ${fonts.serif}; /* font-display */
  font-size: 3rem; /* text-5xl */
  font-weight: 600; /* font-semibold */
  letter-spacing: -0.025em; /* tracking-tight */
  line-height: 1.2; /* text-balance */

  @media (min-width: ${breakpoints.sm}) {
    font-size: 3.75rem; /* sm:text-6xl */
  }
`;

export const HeroDescription = styled.p`
  margin-top: 1rem; /* mt-4 */
  font-size: 1rem; /* text-base */
  line-height: 1.625; /* leading-relaxed */
  color: ${colors.ink[700]};
  line-height: 1.5; /* text-pretty */

  @media (min-width: ${breakpoints.sm}) {
    font-size: 1.125rem; /* sm:text-lg */
  }
`;

export const HeroActions = styled.div`
  margin-top: 2rem; /* mt-8 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem; /* gap-3 */

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row; /* sm:flex-row */
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px; /* rounded-full */
  background-color: ${colors.accent[500]}; /* bg-accent-500 */
  padding-left: 1.5rem; /* px-6 */
  padding-right: 1.5rem; /* px-6 */
  padding-top: 0.75rem; /* py-3 */
  padding-bottom: 0.75rem; /* py-3 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  text-decoration: none; /* Remover sublinhado padrão */
  color: white;
  box-shadow: ${shadows.medium}; /* shadow-medium */
  transition: background-color 0.2s ease-in-out; /* transition-colors */
  &:hover {
    background-color: ${colors.accent[600]}; /* hover:bg-accent-600 */
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px; /* rounded-full */
  border: 1px solid ${colors.sand[200]};
  background-color: ${colors.sand[50]}; /* bg-sand-50 */
  padding-left: 1.5rem; /* px-6 */
  padding-right: 1.5rem; /* px-6 */
  padding-top: 0.75rem; /* py-3 */
  padding-bottom: 0.75rem; /* py-3 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  text-decoration: none; /* Remover sublinhado padrão */
  color: ${colors.ink[950]};
  transition: background-color 0.2s ease-in-out; /* transition-colors */
  &:hover {
    background-color: ${colors.sand[100]}; /* hover:bg-sand-100 */
  }
`;

export const FeaturedImageWrapper = styled.div`
  margin-top: 2.5rem; /* mt-10 */

  @media (min-width: ${breakpoints.sm}) {
    margin-top: 3rem; /* sm:mt-12 */
  }
`;

export const FeaturedImageRelativeContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 56rem; /* max-w-4xl (896px) */
`;

export const DecorativeFrame = styled.div`
  position: absolute;
  inset: -1rem; /* -inset-4 */
  z-index: -10;
  border-radius: 2rem; /* rounded-4xl (32px) */
  background: linear-gradient(to bottom, ${colors.sand[100]}, ${colors.sand[50]}); /* from-sand-100 to-sand-50 */
`;

export const FeaturedFigure = styled.figure`
  overflow: hidden;
  border-radius: 2rem; /* rounded-4xl (32px) */
  border: 1px solid ${colors.sand[200]};
  background-color: ${colors.sand[50]}; /* bg-sand-50 */
  box-shadow: ${shadows.medium}; /* shadow-medium */
`;

export const FeaturedImage = styled.img`
  height: 26.25rem; /* h-[420px] */
  width: 100%;
  object-fit: cover;

  @media (min-width: ${breakpoints.sm}) {
    height: 32.5rem; /* sm:h-[520px] */
  }
`;

export const FigcaptionOverlay = styled.figcaption`
  position: relative;
`;

export const OverlayGradient = styled.div`
  position: absolute;
  inset-x: 0;
  bottom: 0;
  height: 10rem; /* h-40 */
  background: linear-gradient(to top, rgba(11, 18, 32, 0.65), transparent); /* from-ink-950/65 to-transparent */
`;

export const OverlayContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem; /* p-6 */

  @media (min-width: ${breakpoints.sm}) {
    padding: 1.75rem; /* sm:p-7 */
  }
`;

export const OverlayFlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem; /* gap-4 */
`;

export const OverlayTextGroup = styled.div`
  line-height: 1.25; /* leading-tight */
`;

export const OverlayTitle = styled.div`
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  color: white;
`;

export const OverlaySubtitle = styled.div`
  font-size: 0.75rem; /* text-xs */
  color: rgba(255, 255, 255, 0.8); /* text-white/80 */
`;

export const AvailabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem; /* gap-2 */
  border-radius: 9999px; /* rounded-full */
  background-color: rgba(255, 255, 255, 0.1); /* bg-white/10 */
  padding-left: 0.75rem; /* px-3 */
  padding-right: 0.75rem; /* px-3 */
  padding-top: 0.25rem; /* py-1 */
  padding-bottom: 0.25rem; /* py-1 */
  font-size: 0.75rem; /* text-xs */
  font-weight: 500; /* font-medium */
  color: white;
  backdrop-filter: blur(8px); /* backdrop-blur */

  span {
    height: 0.375rem; /* h-1.5 */
    width: 0.375rem; /* w-1.5 */
    border-radius: 9999px; /* rounded-full */
    background-color: ${colors.emerald[400]};
  }
`;

export const MicroTrustRow = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem; /* mt-6 */
  display: grid;
  max-width: 56rem; /* max-w-4xl (896px) */
  grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */
  gap: 0.75rem; /* gap-3 */

  @media (min-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* sm:grid-cols-3 */
  }
`;

export const MicroTrustCard = styled.div`
  border-radius: 1.5rem; /* rounded-3xl (24px) */
  border: 1px solid ${colors.sand[200]};
  background-color: ${colors.sand[50]}; /* bg-sand-50 */
  padding: 1.25rem; /* p-5 */
  text-align: center;
  box-shadow: ${shadows.soft}; /* shadow-soft */
`;

export const MicroTrustTitle = styled.div`
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  color: ${colors.ink[950]};
`;

export const MicroTrustDescription = styled.div`
  margin-top: 0.25rem; /* mt-1 */
  font-size: 0.75rem; /* text-xs */
  color: ${colors.ink[700]};
`;

export const SectionDivider = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem; /* mt-12 */
  max-width: 80rem; /* max-w-7xl */

  div {
    height: 1px; /* h-px */
    width: 100%;
    background-color: ${colors.sand[200]};
  }
`;

// --- FEATURED PROPERTIES (Carousel) SECTION ---
export const FeaturedPropertiesSection = styled.section`
  background-color: ${colors.sand[50]}; /* bg-sand-50 */
`;

export const FeaturedPropertiesWrapper = styled.div`
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

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* gap-6 */

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row; /* sm:flex-row */
    align-items: flex-end; /* sm:items-end */
    justify-content: space-between; /* sm:justify-between */
  }
`;

export const HeaderTextBlock = styled.div`
  p {
    font-size: 0.75rem; /* text-xs */
    font-weight: 600; /* font-semibold */
    letter-spacing: 0.18em; /* tracking-[0.18em] */
    color: ${colors.ink[700]};
  }

  h2 {
    margin-top: 0.5rem; /* mt-2 */
    font-family: ${fonts.serif}; /* font-display */
    font-size: 1.875rem; /* text-3xl */
    font-weight: 600; /* font-semibold */
    letter-spacing: -0.025em; /* tracking-tight */
    line-height: 1.2; /* Adicionado para replicar o line-height padrão do Tailwind para text-3xl/4xl */
    color: ${colors.ink[950]};

    @media (min-width: ${breakpoints.sm}) {
      font-size: 2.25rem; /* sm:text-4xl */
      line-height: 1.2; /* Garantir line-height consistente */
    }
  }

  .description {
    margin-top: 0.5rem; /* mt-2 */
    max-width: 42rem; /* max-w-2xl */
    font-size: 1rem; /* text-base */
    line-height: 1.625; /* leading-relaxed */
    color: ${colors.ink[700]};
    text-wrap: pretty; /* Ou 'balance' se for mais adequado para o contexto */
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* gap-2 */
`;

export const CarouselButton = styled.button`
  display: inline-flex;
  height: 2.75rem; /* h-11 */
  width: 2.75rem; /* w-11 */
  align-items: center;
  justify-content: center;
  border-radius: 9999px; /* rounded-full */
  border: 1px solid ${colors.sand[200]};
  background-color: ${colors.sand[50]}; /* bg-sand-50 */
  color: ${colors.ink[950]};
  transition: background-color 0.2s ease-in-out; /* transition-colors */
  &:hover {
    background-color: ${colors.sand[100]}; /* hover:bg-sand-100 */
  }
`;

export const CarouselRelativeContainer = styled.div`
  position: relative;
  margin-top: 2.5rem; /* mt-10 */
`;

export const CarouselScrollContainer = styled.div`
  display: flex;
  gap: 1.25rem; /* gap-5 */
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 0.5rem; /* pb-2 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const CarouselCardArticle = styled.article`
  min-width: 82%; /* min-w-[82%] */
  scroll-snap-align: start;

  @media (min-width: ${breakpoints.sm}) {
    min-width: 52%; /* sm:min-w-[52%] */
  }
  @media (min-width: ${breakpoints.lg}) {
    min-width: 34%; /* lg:min-w-[34%] */
  }
`;

export const CarouselCardLink = styled.a`
  display: block;
  overflow: hidden;
  border-radius: 1.5rem; /* rounded-3xl (24px) */
  border: 1px solid ${colors.sand[200]};
  background-color: ${colors.sand[50]}; /* bg-sand-50 */
  box-shadow: ${shadows.soft}; /* Verifique se este valor corresponde EXATAMENTE ao shadow-soft do Tailwind */
`;

export const CardImageRelativeContainer = styled.div`
  position: relative;
`;

export const CardImageCarousel = styled.img`
  height: 16rem; /* h-64 */
  width: 100%;
  object-fit: cover;

  @media (min-width: ${breakpoints.sm}) {
    height: 18rem; /* sm:h-72 */
  }
`;

export const CardImageOverlayGradient = styled.div`
  position: absolute;
  inset-x: 0;
  bottom: 0;
  height: 7rem; /* h-28 */
  background: linear-gradient(to top, rgba(11, 18, 32, 0.65), transparent); /* from-ink-950/65 to-transparent */
`;

export const CardBadgesContainer = styled.div`
  position: absolute;
  left: 1rem; /* left-4 */
  top: 1rem; /* top-4 */
  display: flex;
  gap: 0.5rem; /* gap-2 */
`;

export const CardBadge = styled.span`
  border-radius: 9999px; /* rounded-full */
  background-color: rgba(255, 255, 255, 0.9); /* bg-white/90 */
  padding-left: 0.75rem; /* px-3 */
  padding-right: 0.75rem; /* px-3 */
  padding-top: 0.25rem; /* py-1 */
  padding-bottom: 0.25rem; /* py-1 - Adicionado para consistência com py-1 */
  font-size: 0.75rem; /* text-xs */
  font-weight: 600; /* font-semibold */
  color: ${colors.ink[950]};
  backdrop-filter: blur(8px); /* backdrop-blur */

  &.new-badge {
    background-color: rgba(176, 139, 90, 0.85); /* bg-accent-500/85 */
    color: white;
  }
`;

export const CardDetailsOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25rem; /* p-5 */
`;

export const CardDetailsFlex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem; /* gap-4 */
`;

export const CardDetailsText = styled.div`
  p {
    font-size: 0.875rem; /* text-sm */
    font-weight: 600; /* font-semibold */
    color: white;
  }
  .subtitle {
    font-size: 0.75rem; /* text-xs */
    color: rgba(255, 255, 255, 0.8); /* text-white/80 */
  }
`;

export const CardPrice = styled.p`
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  color: white;
`;

export const CardContentBody = styled.div`
  padding: 1.25rem; /* p-5 */
`;

export const CardTitle = styled.h3`
  font-family: ${fonts.serif}; /* Ajuste para a fonte serifada nos títulos */
  font-size: 1.125rem; /* text-lg */
  font-weight: 600; /* font-semibold */
  color: ${colors.ink[950]};
  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px; /* group-hover:underline group-hover:underline-offset-4 */
  }
`;

export const CardFeatures = styled.div`
  margin-top: 0.75rem; /* mt-3 */
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem; /* gap-2 */
  font-size: 0.75rem; /* text-xs */
  color: ${colors.ink[700]};
`;

export const FeatureBadge = styled.span`
  border-radius: 9999px; /* rounded-full */
  border: 1px solid ${colors.sand[200]};
  background-color: ${colors.sand[100]}; /* bg-sand-100 */
  padding-left: 0.75rem; /* px-3 */
  padding-right: 0.75rem; /* px-3 */
  padding-top: 0.25rem; /* py-1 */
  padding-bottom: 0.25rem; /* py-1 - Adicionado para consistência com py-1 */
`;

export const CarouselSectionDivider = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem; /* mt-12 */
  max-width: 80rem; /* max-w-7xl */

  div {
    height: 1px; /* h-px */
    width: 100%;
    background-color: ${colors.sand[200]};
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
  grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */
  gap: 3rem; /* gap-12 */

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr)); /* md:grid-cols-2 */
    gap: 4rem; /* md:gap-16 */
  }
`;

export const AboutImageColumn = styled.div`
  position: relative;
`;

export const AboutDecorativeFrame = styled.div`
  position: absolute;
  inset: -1rem; /* -inset-4 */
  z-index: -10;
  border-radius: ${borderRadius["4xl"]};
  background: linear-gradient(to bottom, ${colors.sand[100]}, ${colors.sand[50]}); /* from-sand-100 to-sand-50 */
`;

export const AboutFigure = styled.figure`
  overflow: hidden;
  border-radius: ${borderRadius["4xl"]};
  border: 1px solid ${colors.sand[200]};
  background-color: ${colors.sand[50]}; /* bg-sand-50 */
  box-shadow: ${shadows.soft};
`;

export const AboutImage = styled.img`
  height: 26.25rem; /* h-[420px] */
  width: 100%;
  object-fit: cover;

  @media (min-width: ${breakpoints.sm}) {
    height: 32.5rem; /* sm:h-[520px] */
  }
`;

export const AboutFigcaption = styled.figcaption`
  position: relative;
`;

export const AboutOverlayGradient = styled.div`
  position: absolute;
  inset-x: 0;
  bottom: 0;
  height: 10rem; /* h-40 */
  background: linear-gradient(to top, rgba(11, 18, 32, 0.65), transparent); /* from-ink-950/65 to-transparent */
`;

export const AboutOverlayContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem; /* p-6 */

  @media (min-width: ${breakpoints.sm}) {
    padding: 1.75rem; /* sm:p-7 */
  }
`;

export const AboutOverlayFlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem; /* gap-4 */
`;

export const AboutOverlayTextGroup = styled.div`
  line-height: 1.25; /* leading-tight */
`;

export const AboutOverlayTitle = styled.div`
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  color: white;
`;

export const AboutOverlaySubtitle = styled.div`
  font-size: 0.75rem; /* text-xs */
  color: rgba(255, 255, 255, 0.8); /* text-white/80 */
`;

export const AboutTextColumn = styled.div`
  p.badge {
    font-size: 0.75rem; /* text-xs */
    font-weight: 600; /* font-semibold */
    letter-spacing: 0.18em; /* tracking-[0.18em] */
    color: ${colors.ink[700]};
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

export const SocialLinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem; /* gap-2 */
  border-radius: 9999px; /* rounded-full */
  border: 1px solid ${colors.sand[200]};
  background-color: white;
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem; /* px-4 */
  padding-top: 0.5rem; /* py-2 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  color: ${colors.ink[950]};
  &:hover {
    background-color: ${colors.sand[50]};
  }

  svg {
    height: 1rem; /* h-4 */
    width: 1rem; /* w-4 */
  }
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
    font-size: 0.75rem; /* text-xs */
    font-weight: 600; /* font-semibold */
    letter-spacing: 0.18em; /* tracking-[0.18em] */
    color: ${colors.ink[700]};
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
  border-radius: ${borderRadius["3xl"]};
  border: 1px solid ${colors.sand[200]};
  background-color: white;
  padding: 1.75rem; /* p-7 */
  box-shadow: ${shadows.soft};
`;

export const FeatureCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem; /* gap-4 */
`;

export const FeatureIconWrapper = styled.div`
  display: grid;
  height: 3rem; /* h-12 */
  width: 3rem; /* w-12 */
  place-items: center;
  border-radius: ${borderRadius["2xl"]};
  background-color: ${colors.sand[50]};

  svg {
    height: 1.5rem; /* h-6 */
    width: 1.5rem; /* w-6 */
    color: ${colors.ink[950]};
  }
`;

export const FeatureCardText = styled.div`
  h3 {
    font-family: ${fonts.serif}; /* Ajuste para a fonte serifada nos títulos */
    font-size: 1.125rem; /* text-lg */
    font-weight: 600; /* font-semibold */
    letter-spacing: -0.025em; /* tracking-tight */
    color: ${colors.ink[950]};
  }

  p {
    margin-top: 0.5rem; /* mt-2 */
    font-size: 0.875rem; /* text-sm */
    line-height: 1.625; /* leading-relaxed */
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
  border-radius: 9999px; /* rounded-full */
  border: 1px solid ${colors.accent[500]}; /* border-marilda-red-500 */
  background-color: transparent;
  padding-left: 2rem; /* px-8 */
  padding-right: 2rem; /* px-8 */
  padding-top: 0.75rem; /* py-3 */
  font-size: 0.75rem; /* text-xs */
  font-weight: 600; /* font-semibold */
  letter-spacing: 0.22em; /* tracking-[0.22em] */
  color: ${colors.accent[500]}; /* text-marilda-red-500 */
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out; /* transition */
  &:hover {
    background-color: ${colors.accent[500]}1A; /* hover:bg-marilda-red-500/10 */
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${colors.accent[500]}4D; /* focus:ring-2 focus:ring-marilda-red-500/30 */
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
    font-size: 0.75rem; /* text-xs */
    font-weight: 600; /* font-semibold */
    letter-spacing: 0.18em; /* tracking-[0.18em] */
    color: ${colors.ink[700]};
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
  border-radius: ${borderRadius["3xl"]};
  border: 1px solid ${colors.sand[200]};
  background-color: white;
  padding: 1.75rem; /* p-7 */
  box-shadow: ${shadows.soft};
`;

export const QuoteIcon = styled.div`
  position: absolute;
  right: 1.5rem; /* right-6 */
  top: 1.5rem; /* top-6 */
  color: ${colors.sand[200]};
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
  margin-top: 1.5rem; /* mt-6 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem; /* gap-4 */
  border-top: 1px solid ${colors.sand[200]};
  padding-top: 1.25rem; /* pt-5 */
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
  gap: 0.25rem; /* gap-1 */
  color: ${colors.ink[950]};

  svg {
    height: 1rem; /* h-4 */
    width: 1rem; /* w-4 */
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
  border-radius: 9999px; /* rounded-full */
  border: 1px solid ${colors.accent[500]}; /* border-marilda-red-500 */
  background-color: transparent;
  padding-left: 2rem; /* px-8 */
  padding-right: 2rem; /* px-8 */
  padding-top: 0.75rem; /* py-3 */
  font-size: 0.75rem; /* text-xs */
  font-weight: 600; /* font-semibold */
  letter-spacing: 0.22em; /* tracking-[0.22em] */
  color: ${colors.accent[500]}; /* text-marilda-red-500 */
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out; /* transition */
  &:hover {
    background-color: ${colors.accent[500]}1A; /* hover:bg-marilda-red-500/10 */
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${colors.accent[500]}4D; /* focus:ring-2 focus:ring-marilda-red-500/30 */
  }
`;

export const TestimonialsSectionDivider = styled.div`
  margin-top: 3.5rem; /* mt-14 */
  height: 1px; /* h-px */
  width: 100%;
  background-color: ${colors.sand[200]};
`;

// --- FINAL CTA SECTION ---
export const FinalCtaSection = styled.section`
  background-color: white;
`;

export const FinalCtaWrapper = styled.div`
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

export const FinalCtaCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${borderRadius["4xl"]};
  border: 1px solid ${colors.sand[200]};
  background-color: white;
  box-shadow: ${shadows.soft};
`;

export const FinalCtaBackdrop = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;

  div {
    position: absolute;
    top: -6rem; /* -top-24 */
    left: 50%;
    height: 18rem; /* h-72 */
    width: 56rem; /* w-[56rem] */
    transform: translateX(-50%); /* -translate-x-1/2 */
    border-radius: 9999px; /* rounded-full */
    background: linear-gradient(to bottom, ${colors.sand[100]}, ${colors.sand[50]}); /* bg-gradient-to-b from-sand-100 to-sand-50 */
    filter: blur(2rem); /* blur-2xl */
  }
`;

export const FinalCtaContent = styled.div`
  position: relative;
  padding: 3rem 1.5rem; /* px-6 py-12 */

  @media (min-width: ${breakpoints.sm}) {
    padding: 3.5rem 2.5rem; /* sm:px-10 sm:py-14 */
  }
  @media (min-width: ${breakpoints.lg}) {
    padding: 3.5rem 3.5rem; /* lg:px-14 */
  }
`;

export const FinalCtaTextBlock = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem; /* max-w-2xl */
  text-align: center;

  p.badge {
    font-size: 0.75rem; /* text-xs */
    font-weight: 600; /* font-semibold */
    letter-spacing: 0.18em; /* tracking-[0.18em] */
    color: ${colors.ink[700]};
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

export const FinalCtaActions = styled.div`
  margin-top: 2rem; /* mt-8 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem; /* gap-3 */

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row; /* sm:flex-row */
  }
`;

export const FinalCtaPrimaryButton = styled.a`
  display: inline-flex;
  width: 100%; /* w-full */
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* gap-2 */
  border-radius: 9999px; /* rounded-full */
  background-color: ${colors.ink[950]};
  padding-left: 1.75rem; /* px-7 */
  padding-right: 1.75rem; /* px-7 */
  padding-top: 0.75rem; /* py-3 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  color: white;
  &:hover {
    background-color: ${colors.ink[900]};
  }

  @media (min-width: ${breakpoints.sm}) {
    width: auto; /* sm:w-auto */
  }

  svg {
    height: 1rem; /* h-4 */
    width: 1rem; /* w-4 */
  }
`;

export const FinalCtaSecondaryButton = styled.a`
  display: inline-flex;
  width: 100%; /* w-full */
  align-items: center;
  justify-content: center;
  border-radius: 9999px; /* rounded-full */
  border: 1px solid ${colors.accent[500]}; /* border-marilda-red-500 */
  background-color: transparent;
  padding-left: 1.75rem; /* px-7 */
  padding-right: 1.75rem; /* px-7 */
  padding-top: 0.75rem; /* py-3 */
  font-size: 0.75rem; /* text-xs */
  font-weight: 600; /* font-semibold */
  letter-spacing: 0.22em; /* tracking-[0.22em] */
  color: ${colors.accent[500]}; /* text-marilda-red-500 */
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out; /* transition */
  &:hover {
    background-color: ${colors.accent[500]}1A; /* hover:bg-marilda-red-500/10 */
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${colors.accent[500]}4D; /* focus:ring-2 focus:ring-marilda-red-500/30 */
  }

  @media (min-width: ${breakpoints.sm}) {
    width: auto; /* sm:w-auto */
  }
`;

export const FinalCtaNote = styled.p`
  margin-top: 1.25rem; /* mt-5 */
  font-size: 0.75rem; /* text-xs */
  color: ${colors.ink[700]};
`;