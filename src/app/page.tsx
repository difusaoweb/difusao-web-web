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
          height: "100vh",
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
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Box width="70%">
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
                borderRadius: 9,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                mb: 5,
              }}
            >
              <Typography component="p" variant="h6" gutterBottom>
                Está com problemas no fluxo de caixa? Suas campanhas não geram
                bons leads? Seus clientes conversam, mas não compram? Vendeu
                produtos que já não estão no estoque?
              </Typography>
            </Box>
            <Button variant="contained" size="large" sx={{ mb: 3 }}>
              Testar Grátis
            </Button>
            <Typography component="p" variant="h5" gutterBottom>
              Chegou o aplicativo que irá revolucionar a gestão da sua loja!
            </Typography>
            <Typography>
              Nosso aplicativo é um poderoso assistente para você lojista, ele
              acompanha suas vendas, gastos e lucros em tempo real, ajudando
              você a manter um controle absoluto da saúde do seu negócio.
            </Typography>
          </Box>
          <Box width="30%" sx={{ paddingLeft: 5 }}>
            <Image
              src="/tela-smarphone.png"
              width={1080}
              height={2100}
              alt="Picture of the author"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}
