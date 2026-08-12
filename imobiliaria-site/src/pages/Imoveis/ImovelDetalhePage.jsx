import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sanityClient, urlFor } from "../../lib/sanity";
import { imovelBySlugQuery } from "../../lib/queries";
import {
  DetailSection, DetailWrapper, BackLink, DetailFigure, DetailImage, DetailTag,
  DetailGrid, DetailMain, DetailTitle, DetailLocation, DetailDescription,
  DetailSidebar, PriceLabel, PriceValue, SpecsList, SpecItem, ContactButton,
  StateText,
} from "./ImovelDetalhePage.styles";

export default function ImovelDetalhePage() {
  const { slug } = useParams();
  const [imovel, setImovel] = useState(null);

  useEffect(() => {
    sanityClient.fetch(imovelBySlugQuery, { slug }).then(setImovel);
  }, [slug]);

  if (!imovel) return <StateText>Carregando imóvel...</StateText>;

  const precoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(imovel.preco || 0);

  return (
    <DetailSection>
      <DetailWrapper>
        <BackLink href="/imoveis">← Voltar aos imóveis</BackLink>

        <DetailFigure>
          {imovel.imagemCapa && (
            <DetailImage
              src={urlFor(imovel.imagemCapa).width(1400).height(900).url()}
              alt={imovel.titulo}
            />
          )}
          <DetailTag>{imovel.bairro} · {imovel.cidade}</DetailTag>
        </DetailFigure>

        <DetailGrid>
          <DetailMain>
            <DetailTitle>{imovel.titulo}</DetailTitle>
            <DetailLocation>{imovel.bairro}, {imovel.cidade}</DetailLocation>
            <DetailDescription>{imovel.descricao}</DetailDescription>
          </DetailMain>

          <DetailSidebar>
            <PriceLabel>Valor</PriceLabel>
            <PriceValue>{precoFormatado}</PriceValue>

            <SpecsList>
              <SpecItem><span>Quartos</span><strong>{imovel.quartos}</strong></SpecItem>
              <SpecItem><span>Banheiros</span><strong>{imovel.banheiros}</strong></SpecItem>
              <SpecItem><span>Vagas</span><strong>{imovel.vagas}</strong></SpecItem>
              <SpecItem><span>Área</span><strong>{imovel.area} m²</strong></SpecItem>
            </SpecsList>

            <ContactButton
              href={`https://wa.me/554184500589?text=Tenho%20interesse%20no%20im%C3%B3vel:%20${encodeURIComponent(imovel.titulo)}`}
              target="_blank"
              rel="noreferrer"
            >
              Tenho interesse
            </ContactButton>
          </DetailSidebar>
        </DetailGrid>
      </DetailWrapper>
    </DetailSection>
  );
}