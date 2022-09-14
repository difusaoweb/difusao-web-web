import DesenvolvimentoSistemasWebImageUrl from '../../../assets/images/services/desenvolvimento-de-sistemas-web.png?width=300&ts-ignore'
import DesenvolvimentoAplicativoAndroidImageUrl from '../../../assets/images/services/desenvolvimento-de-aplicativo-android.png?width=300&ts-ignore'
import DesenvolvimentoLojasVirtuaisImageUrl from '../../../assets/images/services/desenvolvimento-de-lojas-virtuais.png?width=300&ts-ignore'
import DesenvolvimentoBlogsImageUrl from '../../../assets/images/services/desenvolvimento-de-blogs.png?width=300&ts-ignore'
import DesenvolvimentoLojasVirtuaisWoocommerceImageUrl from '../../../assets/images/services/desenvolvimento-de-lojas-virtuais-woocommerce.png?width=300&ts-ignore'
import DesenvolvimentoBlogsWordpressImageUrl from '../../../assets/images/services/desenvolvimento-de-blogs-wordpress.png?width=300&ts-ignore'
import DesenvolvimentoLandingPagesImageUrl from '../../../assets/images/services/desenvolvimento-de-landing-pages.png?width=300&ts-ignore'

export interface CardInterface {
  image: string
  title: string
  list: string[]
}
export const db: CardInterface[] = [
  {
    image: DesenvolvimentoSistemasWebImageUrl,
    title: 'Desenvolvimento de Sistemas Web',
    list: [
      'Redução de trabalho manual.',
      'Aumento de produtividade.',
      'Escalabilidade dos negócios.'
    ]
  },
  {
    image: DesenvolvimentoAplicativoAndroidImageUrl,
    title: 'Desenvolvimento de Aplicativo Android',
    list: [
      'Aplicativos institucionais.',
      'Aplicativos de gerencia de negócios.',
      'Aplicativos de vendas de produtos ou serviços.'
    ]
  },
  {
    image: DesenvolvimentoLojasVirtuaisImageUrl,
    title: 'Desenvolvimento de Lojas Virtuais',
    list: [
      'Funcionalidades únicas.',
      'Carregamento rápido.',
      'Desing especifico para seu negócio.'
    ]
  },
  {
    image: DesenvolvimentoBlogsImageUrl,
    title: 'Desenvolvimento de Blogs',
    list: [
      'Melhore a brand de sua marca.',
      'Gere autoridade com posts.',
      'Esteja bem rankeado nos motores de busca.'
    ]
  },
  {
    image: DesenvolvimentoLojasVirtuaisWoocommerceImageUrl,
    title: 'Desenvolvimento de Lojas Virtuais Woocommerce',
    list: [
      'Lojas simples.',
      'Plataforma Woocommerce + Wordpress.',
      'Diversos métodos de pagamentos.'
    ]
  },
  {
    image: DesenvolvimentoBlogsWordpressImageUrl,
    title: 'Desenvolvimento de Blogs Wordpress',
    list: [
      'Utilize um CMS popular.'
    ]
  },
  {
    image: DesenvolvimentoLandingPagesImageUrl,
    title: 'Desenvolvimento de Landing Pages',
    list: [
      'Anuncie seus serviços ou produtos',
      'Venda mais.',
      'Apresentação rápida.'
    ]
  }
]
