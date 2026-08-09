import React from 'react';
import { urlFor } from "../../lib/sanity";
import { CardContainer, CardImage, CardBody, StyledLink } from './ImovelCard.styles';

export default function ImovelCard({ imovel }) {
  return (
    <CardContainer>
      {imovel?.imagemCapa && (
        <CardImage
          src={urlFor(imovel.imagemCapa).width(800).height(500).url()}
          alt={imovel.titulo}
        />
      )}
      <CardBody>
        <h3>{imovel.titulo}</h3>
        <p>
          {imovel.bairro}, {imovel.cidade}
        </p>
        <p className="price">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 0,
          }).format(imovel.preco || 0)}
        </p>
        <StyledLink to={`/imoveis/${imovel.slug}`}>
          Ver detalhes
        </StyledLink>
      </CardBody>
    </CardContainer>
  );
}