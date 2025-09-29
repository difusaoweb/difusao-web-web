import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export const SectionDifusaoAracoiaba = () => {
  return (
    <Link
      href="/aracoiaba"
      style={{
        textDecoration: "none",
        color: "unset",
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
          Difusão Aracoiaba
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
          Aplicativo de shopping em Aracoiaba.
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
          <Link href="https://aracoiaba.difusaoweb.com" passHref legacyBehavior>
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
  );
};
