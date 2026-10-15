import * as React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Difusão Web",
  description:
    "Política de privacidade da Difusão Web e de todos os seus produtos.",
};

export default function LegalPrivacyPolicyPage() {
  return (
    <>
      <div>
        <div className="container-xxl">
          <div>
            <div>
              <h1 className="text-3xl font-bold mb-4">
                Política de Privacidade
              </h1>
              <p className="mb-3 leading-relaxed text-gray-700">
                Início efetivo: 31 de agosto de 2025
              </p>
            </div>
            <div>
              <p className="mb-3 leading-relaxed text-gray-700">
                O aplicativo <b>Difusão Aracoiaba</b> valoriza a sua privacidade
                e está comprometido em proteger as informações pessoais
                fornecidas pelos usuários. Esta Política de Privacidade explica
                como coletamos, usamos e protegemos seus dados ao utilizar nosso
                aplicativo.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mt-8 mb-3">
                1. Informações coletadas
              </h2>
              <p className="mb-3 leading-relaxed text-gray-700">
                O <b>Difusão Aracoiaba</b> pode coletar as seguintes
                informações:
              </p>
              <ol>
                <li>
                  <b>Dados de cadastro:</b> nome, e-mail, telefone e demais
                  informações necessárias para criar e gerenciar sua conta.
                </li>
                <li>
                  <b>Produtos cadastrados:</b> informações inseridas por você ao
                  anunciar seus produtos (título, descrição, preço e fotos).
                </li>
                <li>
                  <b>Imagens do dispositivo:</b> quando você escolhe adicionar
                  fotos de seus produtos, o aplicativo solicita acesso à
                  <b>galeria do seu telefone</b> por meio da permissão{" "}
                  <i>photosPermission</i>.
                </li>
                <li>
                  <b>Informações de uso:</b> dados sobre como você interage com
                  o aplicativo, como páginas visitadas, anúncios visualizados e
                  ações realizadas.
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-bold mt-8 mb-3">
                2. Uso das informações
              </h2>
              <p className="mb-3 leading-relaxed text-gray-700">
                As informações coletadas são utilizadas para:
              </p>
              <ol>
                <li>
                  Permitir o <b>cadastro e gerenciamento de produtos</b>;
                </li>
                <li>Exibir anúncios no marketplace do aplicativo;</li>
                <li>
                  Melhorar a experiência do usuário, personalizando
                  recomendações e resultados;
                </li>
                <li>
                  Garantir a <b>segurança e integridade</b> do aplicativo;
                </li>
                <li>
                  Cumprir requisitos legais ou regulatórios, quando aplicável.
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-bold mt-8 mb-3">
                3. Acesso à galeria de fotos
              </h2>
              <p className="mb-3 leading-relaxed text-gray-700">
                O aplicativo solicita permissão de acesso à galeria apenas para
                que você possa <b>selecionar imagens dos seus produtos</b>.
              </p>
              <ol>
                <li>
                  Permitir o <b>cadastro e gerenciamento de produtos</b>;
                </li>
                <li>Exibir anúncios no marketplace do aplicativo;</li>
                <li>
                  Melhorar a experiência do usuário, personalizando
                  recomendações e resultados;
                </li>
                <li>
                  Garantir a <b>segurança e integridade</b> do aplicativo;
                </li>
                <li>
                  Cumprir requisitos legais ou regulatórios, quando aplicável.
                </li>
              </ol>
            </div>
            {/* * Esse acesso é **limitado às imagens escolhidas por você**;
* O aplicativo **não acessa automaticamente** todas as suas fotos;
* Nenhuma imagem é utilizada sem o seu consentimento.

---

## 4. Compartilhamento de informações

O **Difusão Aracoiaba** não vende nem compartilha suas informações pessoais com terceiros, exceto:

* Quando necessário para cumprir **obrigações legais**;
* Quando for necessário para o funcionamento do aplicativo (ex.: serviços de hospedagem e armazenamento em nuvem).

---

## 5. Armazenamento e segurança

* Suas informações são armazenadas em servidores seguros;
* Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou uso indevido;
* Apesar dos nossos esforços, nenhum sistema é 100% seguro, e não podemos garantir segurança absoluta.

---

## 6. Direitos do usuário

Você pode, a qualquer momento:

* Acessar, corrigir ou atualizar seus dados pessoais;
* Solicitar a exclusão de sua conta e dados relacionados;
* Revogar a permissão de acesso à galeria diretamente nas configurações do dispositivo.

---

## 7. Alterações nesta política

Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você a consulte regularmente para estar informado sobre como protegemos suas informações.

---

## 8. Contato

Se tiver dúvidas ou solicitações relacionadas a esta Política de Privacidade, entre em contato pelo e-mail:
📧 **\[coloque o e-mail de suporte aqui]**

---

👉 Essa versão está em conformidade com boas práticas de apps que usam **permissão de fotos** no Expo e com **LGPD (Lei Geral de Proteção de Dados do Brasil)**.

Quer que eu prepare também uma **versão curta** dessa política para enviar à **Play Aracoiaba/App Aracoiaba**, já que elas exigem um resumo objetivo? */}
          </div>
        </div>
      </div>
    </>
  );
}
