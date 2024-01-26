const NacionalidadePortuguesaDesenvolvimentoSistemaCadastroImage =
  'http://localhost:3000/cases/nacionalidade-portuguesa/desenvolvimento-de-sistema-de-cadastro.png'
const CiaEbookCriacaoPluginImage =
  'http://localhost:3000/cases/cia-do-ebook/criacao-de-plugin.png'
const VisaoMarketingCriacaoSiteImage =
  'http://localhost:3000/cases/visao-marketing/criacao-de-site.png'
const LinkOficialCorrecaoErrosImage =
  'http://localhost:3000/cases/link-oficial/correcao-de-erros.png'
const One7ShopCriacaoMeioPagamentoImage =
  'http://localhost:3000/cases/one-7-shop/criacao-de-meio-de-pagamento.png'
const PrefeituraMunicipalBanzaeAlteracoesPluginImage =
  'http://localhost:3000/cases/prefeitura-municipal-de-banzae/alteracoes-de-plugin.png'
const ProEspumaAtualizacaoSistemaImage =
  'http://localhost:3000/cases/pro-espuma/atualizacao-de-sistema.png'
const SkinnaGrillAlteracoesPluginWordPressImage =
  'http://localhost:3000/cases/skinna-grill/alteracoes-de-plugin-wordpress.png'
const ColecionameAlteracoesPluginWordPressImage =
  'http://localhost:3000/cases/colecioname/alteracoes-de-plugin-wordpress.png'
const PPCCriacaoDeWidgetImage =
  'http://localhost:3000/cases/ppc/criacao-de-widget.png'
const PPCCriacaoDeWidget2Image =
  'http://localhost:3000/cases/ppc/criacao-de-widget-2.png'
const PPCCriacaoDeWidget3Image =
  'http://localhost:3000/cases/ppc/criacao-de-widget-3.png'

export interface CardInterface {
  imagens: string[]
  title: string
  description: string
}
export const db: CardInterface[] = [
  {
    imagens: [NacionalidadePortuguesaDesenvolvimentoSistemaCadastroImage],
    title: 'Nacionalidade Portuguesa',
    description:
      'Criação de sistema de cadastro de clientes com painel administrativo.'
  },
  {
    imagens: [CiaEbookCriacaoPluginImage],
    title: 'Cia do Ebook',
    description:
      'Criação de plugin de anti fraude de ePUBS, com conexão Dropbox e WooCommerce.'
  },
  {
    imagens: [VisaoMarketingCriacaoSiteImage],
    title: 'Visão Marketing',
    description: 'Criação de site para agência de marketing digital.'
  },
  {
    imagens: [LinkOficialCorrecaoErrosImage],
    title: 'Link Oficial',
    description:
      'Correção de bugs nos hiperlinks a versão Mobile e alteração no layout dos post no blog.'
  },
  {
    imagens: [One7ShopCriacaoMeioPagamentoImage],
    title: 'Link Oficial',
    description: 'Criação de Meio de Pagamento para Loja Virtual Woocommerce.'
  },
  {
    imagens: [PrefeituraMunicipalBanzaeAlteracoesPluginImage],
    title: 'Prefeitura Municipal de Banzae',
    description: 'Alterações de plugin, exibindo mais dados.'
  },
  {
    imagens: [ProEspumaAtualizacaoSistemaImage],
    title: 'Pró-Espuma',
    description: 'Alterações de plugin, exibindo mais dados.'
  },
  {
    imagens: [SkinnaGrillAlteracoesPluginWordPressImage],
    title: 'Skinna Grill',
    description:
      'Alterações de plugin WordPress para Aplicação Web Skinna Grill.'
  },
  {
    imagens: [ColecionameAlteracoesPluginWordPressImage],
    title: 'Colecioname',
    description:
      'Alterações de plugin WordPress para site de colecionador de cartas.'
  },
  {
    imagens: [
      PPCCriacaoDeWidgetImage,
      PPCCriacaoDeWidget2Image,
      PPCCriacaoDeWidget3Image
    ],
    title: 'Manzzanti - PPC',
    description:
      'Criação de widget para site Wordpress, com importação de dados do sistema.'
  }
]
