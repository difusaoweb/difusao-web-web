import * as React from "react";
import {
  Box,
  Button,
  Container,
  Modal,
  Typography,
  colors,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { H1Auto } from "@/components/atoms/H1Auto";
import { ButtonOpenModal } from "@/components/atoms/ButtonOpenModal";
import { ModalGetLed } from "@/components/molecules/ModalGetLed";

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
              ⚛ Controle sua loja, na palma da sua mão. 👇
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
            <Typography component="p" variant="h5" gutterBottom>
              Chegou o aplicativo que irá solucionar estes e seus demais
              problemas
            </Typography>
            <Typography sx={{ mb: 3 }}>
              Nós da Difusão Web estamos construindo um poderoso assistente para
              você lojista. Você poderá acompanhar suas transações, os pedidos
              dos clientes, visualização fácil dos clientes recorrentes,
              verificar suas campanhas e controlar o estoque da sua loja... Tudo
              isso e muito mais.
            </Typography>
            <Box sx={{ textAlign: { xs: "center", lg: "left" } }}>
              <ButtonOpenModal />
            </Box>
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
      <ModalGetLed />
    </>
  );
}
