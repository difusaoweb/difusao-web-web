import { StaticImageData } from '../../../../node_modules/next/dist/client/image'
import NacionalidadePortuguesaDesenvolvimentoSistemaCadastroImage from '../../../assets/images/cases/nacionalidade-portuguesa/desenvolvimento-de-sistema-de-cadastro.png'
import CiaEbookCriacaoPluginImage from '../../../assets/images/cases/cia-do-ebook/criacao-de-plugin.png'
import VisaoMarketingCriacaoSiteImage from '../../../assets/images/cases/visao-marketing/criacao-de-site.png'
import LinkOficialCorrecaoErrosImage from '../../../assets/images/cases/link-oficial/correcao-de-erros.png'
import One7ShopCriacaoMeioPagamentoImage from '../../../assets/images/cases/one-7-shop/criacao-de-meio-de-pagamento.png'
import PrefeituraMunicipalBanzaeAlteracoesPluginImage from '../../../assets/images/cases/prefeitura-municipal-de-banzae/alteracoes-de-plugin.png'
import ProEspumaAtualizacaoSistemaImage from '../../../assets/images/cases/pro-espuma/atualizacao-de-sistema.png'
import SkinnaGrillAlteracoesPluginWordPressImage from '../../../assets/images/cases/skinna-grill/alteracoes-de-plugin-wordpress.png'
import ColecionameAlteracoesPluginWordPressImage from '../../../assets/images/cases/colecioname/alteracoes-de-plugin-wordpress.png'

import PPCCriacaoDeWidgetImage from '../../../assets/images/cases/ppc/criacao-de-widget.png'
import PPCCriacaoDeWidget2Image from '../../../assets/images/cases/ppc/criacao-de-widget-2.png'
import PPCCriacaoDeWidget3Image from '../../../assets/images/cases/ppc/criacao-de-widget-3.png'

export interface CardInterface {
  imagens: StaticImageData[]
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
