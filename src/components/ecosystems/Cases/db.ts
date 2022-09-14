import NacionalidadePortuguesaDesenvolvimentoSistemaCadastroImage from '../../../assets/images/cases/nacionalidade-portuguesa/desenvolvimento-de-sistema-de-cadastro.png?width=300&ts-ignore'
import CiaEbookCriacaoPluginImage from '../../../assets/images/cases/cia-do-ebook/criacao-de-plugin.png?width=300&ts-ignore'
import VisaoMarketingCriacaoSiteImage from '../../../assets/images/cases/visao-marketing/criacao-de-site.png?width=300&ts-ignore'
import LinkOficialCorrecaoErrosImage from '../../../assets/images/cases/link-oficial/correcao-de-erros.png?width=300&ts-ignore'
import One7ShopCriacaoMeioPagamentoImage from '../../../assets/images/cases/one-7-shop/criacao-de-meio-de-pagamento.png?width=300&ts-ignore'
import PrefeituraMunicipalBanzaeAlteracoesPluginImage from '../../../assets/images/cases/prefeitura-municipal-de-banzae/alteracoes-de-plugin.png?width=300&ts-ignore'
import ProEspumaAtualizacaoSistemaImage from '../../../assets/images/cases/pro-espuma/atualizacao-de-sistema.png?width=300&ts-ignore'
import SkinnaGrillAlteracoesPluginWordPressImage from '../../../assets/images/cases/skinna-grill/alteracoes-de-plugin-wordpress.png?width=300&ts-ignore'
import ColecionameAlteracoesPluginWordPressImage from '../../../assets/images/cases/colecioname/alteracoes-de-plugin-wordpress.png?width=300&ts-ignore'

import PPCCriacaoDeWidgetImage from '../../../assets/images/cases/ppc/criacao-de-widget.png?width=300&ts-ignore'
import PPCCriacaoDeWidget2Image from '../../../assets/images/cases/ppc/criacao-de-widget-2.png?width=300&ts-ignore'
import PPCCriacaoDeWidget3Image from '../../../assets/images/cases/ppc/criacao-de-widget-3.png?width=300&ts-ignore'

export interface CardInterface {
  imagens: string[]
  title: string
  description: string
}
export const db: CardInterface[] = [
  {
    imagens: [NacionalidadePortuguesaDesenvolvimentoSistemaCadastroImage.src],
    title: 'Nacionalidade Portuguesa',
    description:
      'Criação de sistema de cadastro de clientes com painel administrativo.'
  },
  {
    imagens: [CiaEbookCriacaoPluginImage.src],
    title: 'Cia do Ebook',
    description:
      'Criação de plugin de anti fraude de ePUBS, com conexão Dropbox e WooCommerce.'
  },
  {
    imagens: [VisaoMarketingCriacaoSiteImage.src],
    title: 'Visão Marketing',
    description: 'Criação de site para agência de marketing digital.'
  },
  {
    imagens: [LinkOficialCorrecaoErrosImage.src],
    title: 'Link Oficial',
    description:
      'Correção de bugs nos hiperlinks a versão Mobile e alteração no layout dos post no blog.'
  },
  {
    imagens: [One7ShopCriacaoMeioPagamentoImage.src],
    title: 'Link Oficial',
    description: 'Criação de Meio de Pagamento para Loja Virtual Woocommerce.'
  },
  {
    imagens: [PrefeituraMunicipalBanzaeAlteracoesPluginImage.src],
    title: 'Prefeitura Municipal de Banzae',
    description: 'Alterações de plugin, exibindo mais dados.'
  },
  {
    imagens: [ProEspumaAtualizacaoSistemaImage.src],
    title: 'Pró-Espuma',
    description: 'Alterações de plugin, exibindo mais dados.'
  },
  {
    imagens: [SkinnaGrillAlteracoesPluginWordPressImage.src],
    title: 'Skinna Grill',
    description:
      'Alterações de plugin WordPress para Aplicação Web Skinna Grill.'
  },
  {
    imagens: [ColecionameAlteracoesPluginWordPressImage.src],
    title: 'Colecioname',
    description:
      'Alterações de plugin WordPress para site de colecionador de cartas.'
  },
  {
    imagens: [
      PPCCriacaoDeWidgetImage.src,
      PPCCriacaoDeWidget2Image.src,
      PPCCriacaoDeWidget3Image.src
    ],
    title: 'Manzzanti - PPC',
    description:
      'Criação de widget para site Wordpress, com importação de dados do sistema.'
  }
]
