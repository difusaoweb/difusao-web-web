import NacionalidadePortuguesaDesenvolvimentoSistemaCadastroImageUrl from '../../../assets/images/cases/nacionalidade-portuguesa/desenvolvimento-de-sistema-de-cadastro.png?width=300&ts-ignore'
import CiaEbookCriacaoPluginImageUrl from '../../../assets/images/cases/cia-do-ebook/criacao-de-plugin.png?width=300&ts-ignore'
import VisaoMarketingCriacaoSiteImageUrl from '../../../assets/images/cases/visao-marketing/criacao-de-site.png?width=300&ts-ignore'
import LinkOficialCorrecaoErrosImageUrl from '../../../assets/images/cases/link-oficial/correcao-de-erros.png?width=300&ts-ignore'
import One7ShopCriacaoMeioPagamentoImageUrl from '../../../assets/images/cases/one-7-shop/criacao-de-meio-de-pagamento.png?width=300&ts-ignore'
import PrefeituraMunicipalBanzaeAlteracoesPluginImageUrl from '../../../assets/images/cases/prefeitura-municipal-de-banzae/alteracoes-de-plugin.png?width=300&ts-ignore'
import ProEspumaAtualizacaoSistemaImageUrl from '../../../assets/images/cases/pro-espuma/atualizacao-de-sistema.png?width=300&ts-ignore'
import SkinnaGrillAlteracoesPluginWordPressImageUrl from '../../../assets/images/cases/skinna-grill/alteracoes-de-plugin-wordpress.png?width=300&ts-ignore'
import ColecionameAlteracoesPluginWordPressImageUrl from '../../../assets/images/cases/colecioname/alteracoes-de-plugin-wordpress.png?width=300&ts-ignore'

import PPCCriacaoDeWidgetImageUrl from '../../../assets/images/cases/ppc/criacao-de-widget.png?width=300&ts-ignore'
import PPCCriacaoDeWidget2ImageUrl from '../../../assets/images/cases/ppc/criacao-de-widget-2.png?width=300&ts-ignore'
import PPCCriacaoDeWidget3ImageUrl from '../../../assets/images/cases/ppc/criacao-de-widget-3.png?width=300&ts-ignore'

export interface CardInterface {
  imagens: string[]
  title: string
  description: string
}
export const db: CardInterface[] = [
  {
    imagens: [NacionalidadePortuguesaDesenvolvimentoSistemaCadastroImageUrl],
    title: 'Nacionalidade Portuguesa',
    description:
      'Criação de sistema de cadastro de clientes com painel administrativo.'
  },
  {
    imagens: [CiaEbookCriacaoPluginImageUrl],
    title: 'Cia do Ebook',
    description:
      'Criação de plugin de anti fraude de ePUBS, com conexão Dropbox e WooCommerce.'
  },
  {
    imagens: [VisaoMarketingCriacaoSiteImageUrl],
    title: 'Visão Marketing',
    description: 'Criação de site para agência de marketing digital.'
  },
  {
    imagens: [LinkOficialCorrecaoErrosImageUrl],
    title: 'Link Oficial',
    description:
      'Correção de bugs nos hiperlinks a versão Mobile e alteração no layout dos post no blog.'
  },
  {
    imagens: [One7ShopCriacaoMeioPagamentoImageUrl],
    title: 'Link Oficial',
    description: 'Criação de Meio de Pagamento para Loja Virtual Woocommerce.'
  },
  {
    imagens: [PrefeituraMunicipalBanzaeAlteracoesPluginImageUrl],
    title: 'Prefeitura Municipal de Banzae',
    description: 'Alterações de plugin, exibindo mais dados.'
  },
  {
    imagens: [ProEspumaAtualizacaoSistemaImageUrl],
    title: 'Pró-Espuma',
    description: 'Alterações de plugin, exibindo mais dados.'
  },
  {
    imagens: [SkinnaGrillAlteracoesPluginWordPressImageUrl],
    title: 'Skinna Grill',
    description:
      'Alterações de plugin WordPress para Aplicação Web Skinna Grill.'
  },
  {
    imagens: [ColecionameAlteracoesPluginWordPressImageUrl],
    title: 'Colecioname',
    description:
      'Alterações de plugin WordPress para site de colecionador de cartas.'
  },
  {
    imagens: [
      PPCCriacaoDeWidgetImageUrl,
      PPCCriacaoDeWidget2ImageUrl,
      PPCCriacaoDeWidget3ImageUrl
    ],
    title: 'Manzzanti - PPC',
    description:
      'Criação de widget para site Wordpress, com importação de dados do sistema.'
  }
]
