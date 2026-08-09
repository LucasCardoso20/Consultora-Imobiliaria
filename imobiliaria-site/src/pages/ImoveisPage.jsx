import { useEffect, useState } from "react";
import { sanityClient } from "../lib/sanity";
import { imoveisQuery } from "../lib/queries";
import ImovelCard from "../components/ImovelCard/ImovelCard";

export default function ImoveisPage() {
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    sanityClient.fetch(imoveisQuery).then((data) => setImoveis(data || []));
  }, []);

  return (
    <section>
      <h1>Todos os imóveis</h1>
      <div className="grid">
        {imoveis.map((imovel) => (
          <ImovelCard key={imovel._id} imovel={imovel} />
        ))}
      </div>
    </section>
  );
}