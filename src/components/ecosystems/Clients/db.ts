import { StaticImageData } from '../../../../node_modules/next/dist/client/image'
import NacionalidadePortuguesaImage from '../../../assets/images/clients/nacionalidade-portuguesa.png'
import CiaDoEbookImage from '../../../assets/images/clients/cia-do-ebook.png'
import VisaoMarketingImage from '../../../assets/images/clients/visao-marketing.png'
import LinkOficialImage from '../../../assets/images/clients/link-oficial.png'
import ProEspumaImage from '../../../assets/images/clients/pro-espuma.png'
import SkinnaGrillImage from '../../../assets/images/clients/skinna-grill.png'
import ColecionameImage from '../../../assets/images/clients/colecioname.png'

export interface CardInterface {
  image: StaticImageData
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
