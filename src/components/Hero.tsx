import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage: "linear-gradient(180deg, #CEE5FD, #FFF)",
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            component="h1"
            variant="h2"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Loja virtual
            <Typography
              component="span"
              variant="h3"
              sx={{
                color: (theme) => "success.main",
              }}
            >
              +
            </Typography>
            <Typography
              component="span"
              variant="h2"
              sx={{
                color: (theme) => "primary.main",
              }}
            >
              Painel administrativo
            </Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            Tenha uma loja online completa, venda e fidelize seus clientes.
            <br />
            Administre o setor Finançeiro, Comercial, Marketing e Operacial de
            sua loja online.
          </Typography>
          <Button variant="contained" color="primary">
            Começar agora
          </Button>
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: "center",
            height: { xs: 200, sm: 700 },
            width: "100%",
            backgroundImage: 'url("/hero-light.png")',
            backgroundSize: "cover",
            borderRadius: "10px",
            outline: "1px solid",
            outlineColor: alpha("#BFCCD9", 0.5),
            boxShadow: `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`,
          })}
        />
      </Container>
    </Box>
  );
}
