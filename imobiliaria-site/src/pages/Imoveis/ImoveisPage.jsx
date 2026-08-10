import { useEffect, useState } from "react";
import { sanityClient } from "../../lib/sanity";
import { imoveisQuery } from "../../lib/queries";
import ImovelCard from "../../components/ImovelCard/ImovelCard";
import {
  PageSection, PageWrapper, PageHeader, PageEyebrow, PageTitle,
  PageDescription, CatalogGrid, StateText,
} from "./ImoveisPage.styles";

export default function ImoveisPage() {
  const [imoveis, setImoveis] = useState(null);

  useEffect(() => {
    sanityClient.fetch(imoveisQuery).then((data) => setImoveis(data || []));
  }, []);

  return (
    <PageSection>
      <PageWrapper>
        <PageHeader>
          <PageEyebrow>Nº 00 — Catálogo</PageEyebrow>
          <PageTitle>Todos os imóveis</PageTitle>
          <PageDescription>
            Seleção completa de imóveis disponíveis, com curadoria e
            acompanhamento em cada etapa da negociação.
          </PageDescription>
        </PageHeader>

        {imoveis === null && <StateText>Carregando imóveis...</StateText>}

        {imoveis !== null && imoveis.length === 0 && (
          <StateText>Nenhum imóvel disponível no momento.</StateText>
        )}

        {imoveis && imoveis.length > 0 && (
          <CatalogGrid>
            {imoveis.map((imovel) => (
              <ImovelCard key={imovel._id} imovel={imovel} />
            ))}
          </CatalogGrid>
        )}
      </PageWrapper>
    </PageSection>
  );
}