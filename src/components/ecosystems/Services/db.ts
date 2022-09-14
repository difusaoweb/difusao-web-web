import DesenvolvimentoAplicativoAndroidImage from '../../../assets/images/services/desenvolvimento-de-aplicativo-android.png?width=300&ts-ignore'
import DesenvolvimentoAplicativoIOSImage from '../../../assets/images/services/desenvolvimento-de-aplicativo-ios.png?width=300&ts-ignore'
import DesenvolvimentoLojasVirtuaisImage from '../../../assets/images/services/desenvolvimento-de-lojas-virtuais.png?width=300&ts-ignore'
import DesenvolvimentoLojasVirtuaisWoocommerceImage from '../../../assets/images/services/desenvolvimento-de-lojas-virtuais-woocommerce.png?width=300&ts-ignore'
import DesenvolvimentoSistemasWebImage from '../../../assets/images/services/desenvolvimento-de-sistemas-web.png?width=300&ts-ignore'
import DesenvolvimentoBlogsImage from '../../../assets/images/services/desenvolvimento-de-blogs.png?width=300&ts-ignore'
import DesenvolvimentoLandingPagesImage from '../../../assets/images/services/desenvolvimento-de-landing-pages.png?width=300&ts-ignore'

export interface CardInterface {
  image: string
  title: string
  list: string[]
}
export const db: CardInterface[] = [
  {
    image: DesenvolvimentoAplicativoAndroidImage.src,
    title: 'Desenvolvimento de Aplicativo Android',
    list: [
      'Aplicativos institucionais.',
      'Aplicativos de gerencia de negócios.',
      'Aplicativos de vendas de produtos ou serviços.'
    ]
  },
  {
    image: DesenvolvimentoAplicativoIOSImage.src,
    title: 'Desenvolvimento de Aplicativo IOS',
    list: [
      'Aplicativos institucionais.',
      'Aplicativos de gerencia de negócios.',
      'Aplicativos de vendas de produtos ou serviços.'
    ]
  },
  {
    image: DesenvolvimentoLojasVirtuaisImage.src,
    title: 'Desenvolvimento de Lojas Virtuais',
    list: [
      'Funcionalidades únicas.',
      'Carregamento rápido.',
      'Desing especifico para seu negócio.'
    ]
  },
  {
    image: DesenvolvimentoLojasVirtuaisWoocommerceImage.src,
    title: 'Desenvolvimento de Lojas Virtuais Woocommerce',
    list: [
      'Lojas simples.',
      'Plataforma Woocommerce + Wordpress.',
      'Diversos métodos de pagamentos.'
    ]
  },
  {
    image: DesenvolvimentoSistemasWebImage.src,
    title: 'Desenvolvimento de Sistemas Web',
    list: [
      'Redução de trabalho manual.',
      'Aumento de produtividade.',
      'Escalabilidade dos negócios.'
    ]
  },
  {
    image: DesenvolvimentoBlogsImage.src,
    title: 'Desenvolvimento de Blogs',
    list: [
      'Melhore a brand de sua marca.',
      'Gere autoridade com posts.',
      'Esteja bem rankeado nos motores de busca.'
    ]
  },
  {
    image: DesenvolvimentoLandingPagesImage.src,
    title: 'Desenvolvimento de Landing Pages',
    list: [
      'Anuncie seus serviços ou produtos',
      'Venda mais.',
      'Apresentação rápida.'
    ]
  }
]
