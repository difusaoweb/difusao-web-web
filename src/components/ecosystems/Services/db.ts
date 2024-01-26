const DesenvolvimentoSistemasWebImage =
  'http://localhost:3000/services/desenvolvimento-de-sistemas-web.png'
const DesenvolvimentoAplicativoAndroidImage =
  'http://localhost:3000/services/desenvolvimento-de-aplicativo-android.png'
const DesenvolvimentoLojasVirtuaisImage =
  'http://localhost:3000/services/desenvolvimento-de-lojas-virtuais.png'
const DesenvolvimentoBlogsImage =
  'http://localhost:3000/services/desenvolvimento-de-blogs.png'
const DesenvolvimentoLojasVirtuaisWoocommerceImage =
  'http://localhost:3000/services/desenvolvimento-de-lojas-virtuais-woocommerce.png'
const DesenvolvimentoBlogsWordpressImage =
  'http://localhost:3000/services/desenvolvimento-de-blogs-wordpress.png'
const DesenvolvimentoLandingPagesImage =
  'http://localhost:3000/services/desenvolvimento-de-landing-pages.png'

export interface CardInterface {
  image: string
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
