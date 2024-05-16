import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Difusão Store | ⚛ Controle Financeiro, Marketing, Comercial e Operacional da sua loja",
  description:
    "⚛ Controle financeiro, marketing, comercial e operacional da sua loja, na palma da sua mão. 👇",
};

export default function StorePage() {
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
              mt: { lg: -10 },
              alignItems: { xs: "center", lg: "start" },
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
                mb: 3,
              }}
            >
              Controle sua loja,
              <br />
              na palma da sua mão.
            </Typography>
            <Typography
              component="p"
              variant="subtitle1"
              sx={{
                mb: { xs: 2, lg: 5 },
                fontWeight: { lg: 500 },
                fontSize: { lg: "1.25rem" },
                lineHeight: { lg: 1.6 },
                letterSpacing: { lg: "0.0075em" },
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              Nós da Difusão Web estamos construindo um poderoso assistente para
              você lojista. Você poderá acompanhar suas transações, os pedidos
              dos clientes, visualização fácil dos clientes recorrentes,
              verificar suas campanhas e controlar o estoque da sua loja... Tudo
              isso e muito mais.
            </Typography>
            <Link href="https://store.difusaoweb.com" passHref legacyBehavior>
              <Button
                variant="contained"
                size="large"
                sx={{
                  boxShadow: "none !important",
                  textTransform: "none",
                  maxWidth: "max-content",
                }}
              >
                Testar agora
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", lg: "30%" },
              paddingTop: { xs: 6, lg: 0 },
              paddingLeft: { xs: 0, lg: 5 },
            }}
          >
            <Image
              src="/difusão-store-smartphone.png"
              width={1180}
              height={2500}
              alt="Smartphone com o aplicativo da Difusão Store aberto"
              style={{ width: "100%", height: "auto", borderRadius: 9 }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}
