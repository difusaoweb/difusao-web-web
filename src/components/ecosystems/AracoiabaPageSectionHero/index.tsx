import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export const AracoiabaPageSectionHero = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        justifyItems: "center",
        display: "flex",
        paddingTop: 5,
        paddingBottom: 5,
        height: "85vh",
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
          gap: 8,
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
            Compre em Aracoiaba
            <br />
            sem sair de casa.
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
            Nosso marketplace conecta você aos melhores produtos locais da
            cidade de Aracoiaba, oferecendo praticidade e comodidade. Com apenas
            alguns cliques, você encontra e compra diretamente de produtores e
            comerciantes da região, sem precisar sair de casa. É a maneira mais
            fácil e rápida de valorizar o comércio local, receber produtos de
            qualidade e apoiar a economia da nossa cidade.
          </Typography>
          <Link href="https://aracoiaba.difusaoweb.com" passHref legacyBehavior>
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
          }}
        >
          <Image
            src="/difusão-aracoiaba-smartphone.png"
            width={1180}
            height={2500}
            alt="Smartphone com o aplicativo da Difusão Aracoiaba aberto"
            style={{ width: "auto", height: "600px" }}
          />
        </Box>
      </Container>
    </Box>
  );
};
