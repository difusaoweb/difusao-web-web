import * as React from "react";
import { Box, Container, Typography } from "@mui/material";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de uso | Difusão Web",
  description: "Termos de uso da Difusão Web e de todos os seus produtos.",
};

export default function LegalCloudTermsOfServicePage() {
  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          justifyItems: "center",
          display: "flex",
          paddingTop: 5,
          paddingBottom: 5,
        }}
        component="section"
      >
        <Container
          maxWidth="xxl"
          sx={{
            justifyContent: "center",
            justifyItems: "center",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", lg: "70%" },
              justifContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", lg: "start" },
            }}
          >
            <Box
              sx={{
                mb: "60px",
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                sx={{
                  fontSize: { lg: "3rem" },
                  lineHeight: { lg: 1.167 },
                  letterSpacing: { lg: "0em" },
                  textAlign: { xs: "center", lg: "left" },
                  mb: 2,
                }}
              >
                Termos de Uso
              </Typography>
              <Typography component="p" variant="subtitle1">
                <b>Última atualização:</b> 29 de setembro de 2025
              </Typography>
            </Box>
            <Box
              sx={{
                mb: "60px",
              }}
            >
              <Typography>
                Bem-vindo ao aplicativo <b>Difusão Web</b>, um marketplace de
                vendas de produtos locais da cidade de Aracoiaba. Ao utilizar
                nosso aplicativo, você concorda com os seguintes termos e
                condições.
              </Typography>
            </Box>
            <Box
              sx={{
                mb: 2,
              }}
            >
              <Typography
                component="h2"
                variant="h5"
                sx={{
                  mb: 2,
                }}
              >
                1. Cadastro e Acesso
              </Typography>
              <ol>
                <li>
                  Para utilizar o aplicativo, o usuário deve realizar o cadastro
                  informando seu <b>número de telefone</b>.
                </li>
                <li>
                  <b>Produtos cadastrados:</b> informações inseridas por você ao
                  anunciar seus produtos (título, descrição, preço e fotos).
                </li>
                <li>
                  O processo de validação é feito via{" "}
                  <b>mensagem enviada ao WhatsApp</b>, contendo um{" "}
                  <b>código de verificação</b> que deve ser inserido no
                  aplicativo para ativar a conta.
                </li>
                <li>
                  O usuário é responsável por manter seus dados atualizados e
                  por não compartilhar o código de verificação com terceiros.
                </li>
              </ol>
            </Box>
            <Box
              sx={{
                mb: 2,
              }}
            >
              <Typography
                component="h2"
                variant="h5"
                sx={{
                  mb: 2,
                }}
              >
                2. Produtos Disponíveis
              </Typography>
              <ol>
                <li>
                  Todos os produtos anunciados no aplicativo são <b>novos</b> e
                  fornecidos por comerciantes locais parceiros.
                </li>
                <li>
                  As informações (descrição, preço, fotos e estoque) são de
                  responsabilidade dos vendedores.
                </li>
                <li>
                  A Difusão Web se compromete a verificar a conformidade das
                  ofertas, mas não garante que não ocorram erros de informação.
                </li>
              </ol>
            </Box>
            <Box
              sx={{
                mb: 2,
              }}
            >
              <Typography
                component="h2"
                variant="h5"
                sx={{
                  mb: 2,
                }}
              >
                3. Compras e Pagamentos
              </Typography>
              <ol>
                <li>
                  O usuário poderá selecionar produtos, adicioná-los ao carrinho
                  e finalizar a compra dentro do aplicativo.
                </li>
                <li>
                  As condições de pagamento disponíveis serão exibidas no
                  momento da compra.
                </li>
                <li>
                  Em caso de problemas com pagamento, o usuário deverá entrar em
                  contato com nosso suporte oficial.
                </li>
              </ol>
            </Box>
            <Box
              sx={{
                mb: 2,
              }}
            >
              <Typography
                component="h2"
                variant="h5"
                sx={{
                  mb: 2,
                }}
              >
                4. Entrega dos Produtos
              </Typography>
              <ol>
                <li>
                  A <b>entrega é de responsabilidade da Difusão Web</b>, que
                  garante que os produtos adquiridos serão entregues no endereço
                  informado pelo usuário dentro do prazo estipulado no momento
                  da compra.
                </li>
                <li>
                  É de responsabilidade do usuário informar corretamente o
                  endereço de entrega.
                </li>
                <li>
                  Caso não haja ninguém no local para receber o pedido, poderá
                  ser cobrada taxa adicional de reentrega.
                </li>
              </ol>
            </Box>
          </Box>
          {/* ## 5. Trocas e Devoluções

* Produtos com defeito de fabricação ou em desacordo com o pedido poderão ser devolvidos ou trocados, respeitando o prazo legal previsto no Código de Defesa do Consumidor.
* Para solicitar devolução ou troca, o usuário deve entrar em contato com o suporte oficial da Difusão Web.

---

## 6. Conduta do Usuário

* O usuário se compromete a utilizar o aplicativo apenas para fins legais e de acordo com estes Termos de Uso.
* É proibido:

  * Utilizar informações falsas no cadastro.
  * Praticar fraudes, tentar manipular preços ou burlar o sistema.
  * Utilizar o aplicativo para fins diferentes da compra de produtos disponibilizados.

---

## 7. Responsabilidades

* A Difusão Web se responsabiliza:

  * Pelo correto funcionamento do aplicativo.
  * Pela entrega dos produtos adquiridos no aplicativo.
  * Pelo suporte ao usuário em caso de dúvidas ou problemas.
* O usuário é responsável:

  * Pelas informações fornecidas em seu cadastro.
  * Pelo uso seguro de sua conta e código de validação.

---

## 8. Alterações dos Termos

A Difusão Web poderá modificar estes Termos de Uso a qualquer momento, mediante aviso no aplicativo. O uso contínuo da plataforma após a alteração implica aceitação das novas condições.

---

## 9. Contato

Em caso de dúvidas ou solicitações, entre em contato pelo WhatsApp oficial do suporte da Difusão Web: \[inserir número]. */}
        </Container>
      </Box>
    </>
  );
}
