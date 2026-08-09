export const imoveisQuery = `
  *[_type == "imovel"] | order(_createdAt desc) {
    _id,
    titulo,
    "slug": slug.current,
    preco,
    cidade,
    bairro,
    quartos,
    banheiros,
    vagas,
    area,
    destaque,
    imagemCapa
  }
`;

export const imovelBySlugQuery = `
  *[_type == "imovel" && slug.current == $slug][0] {
    _id,
    titulo,
    descricao,
    preco,
    cidade,
    bairro,
    quartos,
    banheiros,
    vagas,
    area,
    galeria,
    imagemCapa
  }
`;