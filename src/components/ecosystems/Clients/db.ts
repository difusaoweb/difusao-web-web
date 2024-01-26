const NacionalidadePortuguesaImage =
  'http://localhost:3000/clients/nacionalidade-portuguesa.png'
const CiaDoEbookImage = 'http://localhost:3000/clients/cia-do-ebook.png'
const VisaoMarketingImage = 'http://localhost:3000/clients/visao-marketing.png'
const LinkOficialImage = 'http://localhost:3000/clients/link-oficial.png'
const ProEspumaImage = 'http://localhost:3000/clients/pro-espuma.png'
const SkinnaGrillImage = 'http://localhost:3000/clients/skinna-grill.png'
const ColecionameImage = 'http://localhost:3000/clients/colecioname.png'

export interface CardInterface {
  image: string
  title: string
}
export const db: CardInterface[] = [
  {
    image: NacionalidadePortuguesaImage,
    title: 'Nacionalidade Portuguesa'
  },
  {
    image: CiaDoEbookImage,
    title: 'Cia do Ebook'
  },
  {
    image: VisaoMarketingImage,
    title: 'Visão Marketing'
  },
  {
    image: LinkOficialImage,
    title: 'Link Oficial'
  },
  {
    image: ProEspumaImage,
    title: 'Pró-Espuma'
  },
  {
    image: SkinnaGrillImage,
    title: 'Skinna Grill'
  },
  {
    image: ColecionameImage,
    title: 'Colecioname'
  }
]
