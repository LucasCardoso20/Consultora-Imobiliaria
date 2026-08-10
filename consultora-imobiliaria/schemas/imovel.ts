import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'imovel',
  title: 'Imóvel',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titulo', maxLength: 96 },
    }),
    defineField({
  name: 'tipoNegocio',
  title: 'Tipo de negócio',
  type: 'string',
  options: {
    list: [
      { title: 'Venda', value: 'venda' },
      { title: 'Aluguel', value: 'aluguel' },
    ],
    layout: 'radio',
  },
  initialValue: 'venda',
}),
    defineField({ name: 'descricao', title: 'Descrição', type: 'text' }),
    defineField({ name: 'preco', title: 'Preço', type: 'number' }),
    defineField({ name: 'cidade', title: 'Cidade', type: 'string' }),
    defineField({ name: 'bairro', title: 'Bairro', type: 'string' }),
    defineField({ name: 'quartos', title: 'Quartos', type: 'number' }),
    defineField({ name: 'banheiros', title: 'Banheiros', type: 'number' }),
    defineField({ name: 'vagas', title: 'Vagas', type: 'number' }),
    defineField({ name: 'area', title: 'Área (m²)', type: 'number' }),
    defineField({ name: 'destaque', title: 'Destaque', type: 'boolean' }),
    defineField({
      name: 'imagemCapa',
      title: 'Imagem de capa',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'galeria',
      title: 'Galeria',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
})