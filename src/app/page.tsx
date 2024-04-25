import * as React from "react";
import { Box, Container, Typography, colors } from "@mui/material";

import { H1Auto } from "@/components/atoms/H1Auto";

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          paddingTop: 10,
          background:
            "linear-gradient(132deg, rgba(167,43,220,1) 0%, rgba(130,22,176,1) 25%, rgba(138,26,185,1) 50%, rgba(117,14,160,1) 75%)",
          color: "#fff",
        }}
      >
        <Container maxWidth="xxl">
          <H1Auto />
          <Typography
            component="p"
            variant="h5"
            sx={{
              // fontWeight: "700",
              textAlign: "center",
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
            }}
          >
            <Typography component="p" variant="h6" gutterBottom>
              Está com problemas no fluxo de caixa? Suas campanhas não geram
              bons leads? Seus clientes conversam, mas não compram? Vendeu
              produtos que já não estão no estoque?
            </Typography>
          </Box>
          <Typography component="p" variant="h5" gutterBottom>
            Chegou o aplicativo que irá revolucionar a gestão da sua loja!
          </Typography>
          <Typography>
            Nosso aplicativo é um poderoso assistente financeiro que acompanha
            suas vendas, gastos e lucros em tempo real, ajudando você a manter
            um controle absoluto da saúde do seu negócio.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
