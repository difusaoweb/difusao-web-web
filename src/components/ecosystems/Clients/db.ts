import NacionalidadePortuguesaImageUrl from '../../../assets/images/clients/nacionalidade-portuguesa.png?width=200&ts-ignore'
import CiaDoEbookImageUrl from '../../../assets/images/clients/cia-do-ebook.png?width=200&ts-ignore'
import VisaoMarketingImageUrl from '../../../assets/images/clients/visao-marketing.png?width=200&ts-ignore'
import LinkOficialImageUrl from '../../../assets/images/clients/link-oficial.png?width=200&ts-ignore'
import ProEspumaImageUrl from '../../../assets/images/clients/pro-espuma.png?width=200&ts-ignore'
import SkinnaGrillImageUrl from '../../../assets/images/clients/skinna-grill.png?width=200&ts-ignore'
import ColecionameImageUrl from '../../../assets/images/clients/colecioname.png?width=200&ts-ignore'

export interface CardInterface {
  image: string
  title: string
}
export const db: CardInterface[] = [
  {
    image: NacionalidadePortuguesaImageUrl,
    title: 'Nacionalidade Portuguesa'
  },
  {
    image: CiaDoEbookImageUrl,
    title: 'Cia do Ebook'
  },
  {
    image: VisaoMarketingImageUrl,
    title: 'Visão Marketing'
  },
  {
    image: LinkOficialImageUrl,
    title: 'Link Oficial'
  },
  {
    image: ProEspumaImageUrl,
    title: 'Pró-Espuma'
  },
  {
    image: SkinnaGrillImageUrl,
    title: 'Skinna Grill'
  },
  {
    image: ColecionameImageUrl,
    title: 'Colecioname'
  }
]
