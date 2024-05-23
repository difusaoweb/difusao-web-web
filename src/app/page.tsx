import * as React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          background: "#333",
          color: "#fff",
          justifyContent: "center",
          justifyItems: "center",
          display: "flex",
          paddingTop: { xs: 8, lg: 25 },
          paddingBottom: { xs: 8, lg: 25 },
        }}
        component="section"
      >
        <Container
          maxWidth="xxl"
          sx={{
            justifyContent: "center",
            justifyItems: "center",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{
              textAlign: "center",
              mb: 5,
              fontSize: { xs: "2.5rem", lg: "3.75rem" },
            }}
          >
            Ferramentas para lojistas
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { lg: "1.25rem" },
              fontWeight: { lg: 500 },
              lineHeight: { lg: 1.6 },
              letterSpacing: { lg: "0.0075em" },
            }}
            component="p"
            variant="body1"
          >
            Fundada com a missão de impulsionar o sucesso de pequenas lojas, a
            Difusão Web entende que administrar uma loja vai muito além do ato
            de vender produtos. É preciso uma gestão forte em todos os setores
            de uma loja, desde de marketing com a atração do público, passando
            pelo comercial para a conversão em vendas, consequentemente no
            operacional com a entrega dos produtos, até o setor financeiro com a
            gestão de caixa.
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { lg: "1.25rem" },
              fontWeight: { lg: 500 },
              lineHeight: { lg: 1.6 },
              letterSpacing: { lg: "0.0075em" },
            }}
            component="p"
            variant="body1"
          >
            Com essa visão, a Difusão Web desenvolveu uma solução para auxiliar
            lojistas em todas as áreas de sua loja.
          </Typography>
        </Container>
      </Box>
      <Link
        href="/store"
        style={{
          textDecoration: "none",
          color: "unset",
          // backgroundImage: "url(/tela-smarphone.png)",
        }}
      >
        <Container
          maxWidth="xxl"
          sx={{
            justifyContent: "center",
            justifyItems: "center",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            paddingTop: 5,
            paddingBottom: { xs: 30, lg: 42 },
            backgroundImage: 'url("/background-tela-smarphone.png")',
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: { xs: "200%", lg: "contain" },
          }}
          component="section"
        >
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            sx={{
              textAlign: "center",
              fontSize: { xs: "2rem", lg: "3rem" },
              fontWeight: { lg: 400 },
              lineHeight: { lg: 1.167 },
              letterSpacing: { lg: "0em" },
            }}
          >
            Difusão Store
          </Typography>
          <Typography
            sx={{
              mb: 2,
              textAlign: "center",
              fontSize: { lg: "1.25rem" },
              fontWeight: { lg: 500 },
              lineHeight: { lg: 1.6 },
              letterSpacing: { lg: "0.0075em" },
            }}
            component="p"
            variant="body1"
          >
            Controle financeiro, marketing, comercial e operacional da sua loja,
            na palma da sua mão.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{ boxShadow: "none !important", textTransform: "none" }}
            >
              Saiba mais
            </Button>
            <Link href="https://store.difusaoweb.com/login" passHref legacyBehavior>
              <Button
                variant="outlined"
                sx={{ boxShadow: "none !important", textTransform: "none" }}
              >
                Testar agora
              </Button>
            </Link>
          </Box>
        </Container>
      </Link>
    </>
  );
}
