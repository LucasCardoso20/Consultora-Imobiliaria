import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sanityClient, urlFor } from "../lib/sanity";
import { imovelBySlugQuery } from "../lib/queries";

export default function ImovelDetalhePage() {
  const { slug } = useParams();
  const [imovel, setImovel] = useState(null);

  useEffect(() => {
    sanityClient.fetch(imovelBySlugQuery, { slug }).then(setImovel);
  }, [slug]);

  if (!imovel) return <p>Carregando imóvel...</p>;

  return (
    <article>
      <h1>{imovel.titulo}</h1>
      {imovel.imagemCapa && (
        <img
          src={urlFor(imovel.imagemCapa).width(1200).height(700).url()}
          alt={imovel.titulo}
          className="detail-cover"
        />
      )}

      <p className="price">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
          maximumFractionDigits: 0,
        }).format(imovel.preco || 0)}
      </p>

      <p>
        {imovel.bairro}, {imovel.cidade}
      </p>

      <ul className="specs">
        <li>{imovel.quartos} quartos</li>
        <li>{imovel.banheiros} banheiros</li>
        <li>{imovel.vagas} vagas</li>
        <li>{imovel.area} m²</li>
      </ul>

      <p>{imovel.descricao}</p>
    </article>
  );
}