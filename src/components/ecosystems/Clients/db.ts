import NacionalidadePortuguesaImage from '../../../assets/images/clients/nacionalidade-portuguesa.png?width=200&ts-ignore'
import CiaDoEbookImage from '../../../assets/images/clients/cia-do-ebook.png?width=200&ts-ignore'
import VisaoMarketingImage from '../../../assets/images/clients/visao-marketing.png?width=200&ts-ignore'
import LinkOficialImage from '../../../assets/images/clients/link-oficial.png?width=200&ts-ignore'
import ProEspumaImage from '../../../assets/images/clients/pro-espuma.png?width=200&ts-ignore'
import SkinnaGrillImage from '../../../assets/images/clients/skinna-grill.png?width=200&ts-ignore'
import ColecionameImage from '../../../assets/images/clients/colecioname.png?width=200&ts-ignore'

export interface CardInterface {
  image: string
  title: string
}
export const db: CardInterface[] = [
  {
    image: NacionalidadePortuguesaImage.src,
    title: 'Nacionalidade Portuguesa'
  },
  {
    image: CiaDoEbookImage.src,
    title: 'Cia do Ebook'
  },
  {
    image: VisaoMarketingImage.src,
    title: 'Visão Marketing'
  },
  {
    image: LinkOficialImage.src,
    title: 'Link Oficial'
  },
  {
    image: ProEspumaImage.src,
    title: 'Pró-Espuma'
  },
  {
    image: SkinnaGrillImage.src,
    title: 'Skinna Grill'
  },
  {
    image: ColecionameImage.src,
    title: 'Colecioname'
  }
]
