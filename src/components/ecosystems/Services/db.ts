import { StaticImageData } from '../../../../node_modules/next/dist/client/image'
import DesenvolvimentoSistemasWebImage from '../../../assets/images/services/desenvolvimento-de-sistemas-web.png'
import DesenvolvimentoAplicativoAndroidImage from '../../../assets/images/services/desenvolvimento-de-aplicativo-android.png'
import DesenvolvimentoLojasVirtuaisImage from '../../../assets/images/services/desenvolvimento-de-lojas-virtuais.png'
import DesenvolvimentoBlogsImage from '../../../assets/images/services/desenvolvimento-de-blogs.png'
import DesenvolvimentoLojasVirtuaisWoocommerceImage from '../../../assets/images/services/desenvolvimento-de-lojas-virtuais-woocommerce.png'
import DesenvolvimentoBlogsWordpressImage from '../../../assets/images/services/desenvolvimento-de-blogs-wordpress.png'
import DesenvolvimentoLandingPagesImage from '../../../assets/images/services/desenvolvimento-de-landing-pages.png'

export interface CardInterface {
  image: StaticImageData
  title: string
  list: string[]
}
export const db: CardInterface[] = [
  {
    image: DesenvolvimentoSistemasWebImage,
    title: 'Desenvolvimento de Sistemas Web',
    list: [
      'Redução de trabalho manual.',
      'Aumento de produtividade.',
      'Escalabilidade dos negócios.'
    ]
  },
  {
    image: DesenvolvimentoAplicativoAndroidImage,
    title: 'Desenvolvimento de Aplicativo Android',
    list: [
      'Aplicativos institucionais.',
      'Aplicativos de gerencia de negócios.',
      'Aplicativos de vendas de produtos ou serviços.'
    ]
  },
  {
    image: DesenvolvimentoLojasVirtuaisImage,
    title: 'Desenvolvimento de Lojas Virtuais',
    list: [
      'Funcionalidades únicas.',
      'Carregamento rápido.',
      'Desing especifico para seu negócio.'
    ]
  },
  {
    image: DesenvolvimentoBlogsImage,
    title: 'Desenvolvimento de Blogs',
    list: [
      'Melhore a brand de sua marca.',
      'Gere autoridade com posts.',
      'Esteja bem rankeado nos motores de busca.'
    ]
  },
  {
    image: DesenvolvimentoLojasVirtuaisWoocommerceImage,
    title: 'Desenvolvimento de Lojas Virtuais Woocommerce',
    list: [
      'Lojas simples.',
      'Plataforma Woocommerce + Wordpress.',
      'Diversos métodos de pagamentos.'
    ]
  },
  {
    image: DesenvolvimentoBlogsWordpressImage,
    title: 'Desenvolvimento de Blogs Wordpress',
    list: ['Utilize um CMS popular.']
  },
  {
    image: DesenvolvimentoLandingPagesImage,
    title: 'Desenvolvimento de Landing Pages',
    list: [
      'Anuncie seus serviços ou produtos',
      'Venda mais.',
      'Apresentação rápida.'
    ]
  }
]
