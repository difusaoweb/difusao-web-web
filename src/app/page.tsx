import * as React from "react";
import { Box, Button, Container, Typography, colors } from "@mui/material";
import Image from "next/image";

import { H1Auto } from "@/components/atoms/H1Auto";

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(132deg, rgba(167,43,220,1) 0%, rgba(130,22,176,1) 25%, rgba(138,26,185,1) 50%, rgba(117,14,160,1) 75%)",
          color: "#fff",
          height: { xs: "100%", lg: "100vh" },
          justifyContent: "center",
          justifyItems: "center",
          display: "flex",
        }}
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
          <Box sx={{ width: { xs: "100%", lg: "70%" } }}>
            <H1Auto />
            <Typography
              component="p"
              variant="h5"
              sx={{
                // fontWeight: "700",
                mb: 5,
              }}
            >
              ⚛ Controle loja, na palma da sua mão. 👇
            </Typography>
            <Box
              sx={{
                padding: 3,
                backgroundColor: colors.red[400],
                color: "#fff",
                borderRadius: { xs: "9px", lg: 3 },
                borderTopLeftRadius: { xs: "9px", lg: 0 },
                borderBottomLeftRadius: { xs: "9px", lg: 0 },
                mb: 5,
              }}
            >
              <Typography component="p" variant="h6" gutterBottom>
                Está com problemas no fluxo de caixa? Suas campanhas não geram
                bons leads? Seus clientes conversam, mas não compram? Vendeu
                produtos que já não estão no estoque?
              </Typography>
            </Box>
            <Box sx={{ textAlign: { xs: "center", lg: "left" } }}>
              <Button variant="contained" size="large" sx={{ mb: 3 }}>
                Testar Grátis
              </Button>
            </Box>
            <Typography component="p" variant="h5" gutterBottom>
              Chegou o aplicativo que irá revolucionar a gestão da sua loja!
            </Typography>
            <Typography>
              Nosso aplicativo é um poderoso assistente para você lojista, ele
              acompanha suas vendas, gastos e lucros em tempo real, ajudando
              você a manter um controle absoluto da saúde do seu negócio.
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", lg: "30%" },
              paddingLeft: { xs: 0, lg: 5 },
            }}
          >
            <Image
              src="/tela-smarphone.png"
              width={1080}
              height={2340}
              alt="Tela do aplicativo da Difusão Web"
              style={{ width: "100%", height: "auto", borderRadius: 9 }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}
