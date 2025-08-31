import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Difusão Web",
  description:
    "Política de privacidade da Difusão Web e de todos os seus produtos.",
};

export default function LegalPrivacyPolicyPage() {
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
                Política de Privacidade
              </Typography>
              <Typography component="p" variant="subtitle1">
                Início efetivo: 31 de agosto de 2025
              </Typography>
            </Box>
            <Box
              sx={{
                mb: "60px",
              }}
            >
              <Typography>
                O aplicativo <b>Difusão Aracoiaba</b> valoriza a sua privacidade
                e está comprometido em proteger as informações pessoais
                fornecidas pelos usuários. Esta Política de Privacidade explica
                como coletamos, usamos e protegemos seus dados ao utilizar nosso
                aplicativo.
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
                1. Informações coletadas
              </Typography>
              <Typography>
                O <b>Difusão Aracoiaba</b> pode coletar as seguintes
                informações:
              </Typography>
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
                2. Uso das informações
              </Typography>
              <Typography>
                As informações coletadas são utilizadas para:
              </Typography>
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
                3. Acesso à galeria de fotos
              </Typography>
              <Typography>
                O aplicativo solicita permissão de acesso à galeria apenas para
                que você possa <b>selecionar imagens dos seus produtos</b>.
              </Typography>
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
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
