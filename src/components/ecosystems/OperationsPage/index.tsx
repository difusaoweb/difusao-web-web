"use client";
import * as React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  WarningAmber as WarningIcon,
  WhatsApp as WhatsAppIcon,
  TrendingUp as TrendingUpIcon,
  Inventory2 as InventoryIcon,
  Receipt as ReceiptIcon,
  People as PeopleIcon,
  Smartphone as SmartphoneIcon,
} from "@mui/icons-material";

export const OperationsPage = () => {
  // Design tokens
  const colors = {
    primary: "#667eea",
    secondary: "#764ba2",
    success: "#27ae60",
    danger: "#e74c3c",
    background: "#f9f9f9",
    text: "#333333",
  };

  return (
    <Box sx={{ backgroundColor: colors.background, minHeight: "100vh" }}>
      {/* HEADER */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
          color: "white",
          py: { xs: 6, md: 8 },
          textAlign: "center",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Difusão Operations
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 300,
              opacity: 0.95,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Gestão simples. Lucro visível.
          </Typography>
        </Container>
      </Box>

      {/* MAIN CONTENT */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        {/* SEÇÃO: O PROBLEMA */}
        <Paper
          elevation={2}
          sx={{
            p: { xs: 3, md: 4 },
            mb: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              color: colors.primary,
              mb: 2,
              pb: 2,
              borderBottom: `3px solid ${colors.primary}`,
            }}
          >
            O Problema
          </Typography>
          <Typography sx={{ mb: 3, color: colors.text, lineHeight: 1.8 }}>
            Pequenos lojistas enfrentam desafios diários que impedem o
            crescimento:
          </Typography>

          <List sx={{ pl: 0 }}>
            <ListItem sx={{ pl: 0, mb: 2 }}>
              <ListItemIcon sx={{ color: colors.danger, minWidth: 40 }}>
                <WarningIcon sx={{ fontSize: 24 }} />
              </ListItemIcon>
              <ListItemText
                primary="Não sabem quanto realmente lucram"
                secondary="Vendem bastante, mas desconhecem a margem real"
                primaryTypographyProps={{ fontWeight: 600 }}
              />
            </ListItem>
            <ListItem sx={{ pl: 0, mb: 2 }}>
              <ListItemIcon sx={{ color: colors.danger, minWidth: 40 }}>
                <WarningIcon sx={{ fontSize: 24 }} />
              </ListItemIcon>
              <ListItemText
                primary="Perdem tempo gerenciando estoque manualmente"
                secondary="Planilhas, anotações, falta de sincronização"
                primaryTypographyProps={{ fontWeight: 600 }}
              />
            </ListItem>
            <ListItem sx={{ pl: 0, mb: 2 }}>
              <ListItemIcon sx={{ color: colors.danger, minWidth: 40 }}>
                <WarningIcon sx={{ fontSize: 24 }} />
              </ListItemIcon>
              <ListItemText
                primary="Não têm visibilidade de operações"
                secondary="Sem controle de produtos, preços, vendas"
                primaryTypographyProps={{ fontWeight: 600 }}
              />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemIcon sx={{ color: colors.danger, minWidth: 40 }}>
                <WarningIcon sx={{ fontSize: 24 }} />
              </ListItemIcon>
              <ListItemText
                primary="Precisam de ferramenta simples"
                secondary="Não querem sistemas complexos, querem algo que funcione no celular"
                primaryTypographyProps={{ fontWeight: 600 }}
              />
            </ListItem>
          </List>
        </Paper>

        {/* SEÇÃO: A SOLUÇÃO */}
        <Paper
          elevation={2}
          sx={{
            p: { xs: 3, md: 4 },
            mb: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              color: colors.primary,
              mb: 2,
              pb: 2,
              borderBottom: `3px solid ${colors.primary}`,
            }}
          >
            A Solução: Difusão Operations
          </Typography>
          <Typography sx={{ mb: 3, color: colors.text, lineHeight: 1.8 }}>
            Um sistema de gestão simples, intuitivo e poderoso para pequenos
            lojistas.
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: 700, mb: 3, color: colors.text }}
          >
            O que você ganha:
          </Typography>

          <Stack spacing={2}>
            {[
              {
                icon: <InventoryIcon />,
                title: "Controle Total do Estoque",
                desc: "Cadastre produtos uma única vez. Veja preço de custo, preço normal e preço de promoção. Tudo sincronizado em tempo real.",
              },
              {
                icon: <ReceiptIcon />,
                title: "Visibilidade de Lucro",
                desc: "Saiba exatamente quanto você lucrou essa semana, esse mês. Relatórios customizáveis por período — 7 dias, 30 dias, 90 dias, ou o período que quiser.",
              },
              {
                icon: <TrendingUpIcon />,
                title: "Vendas Organizadas",
                desc: "Registre cada venda no painel de PDV. O estoque atualiza automaticamente. Sem erros. Sem papel.",
              },
              {
                icon: <PeopleIcon />,
                title: "Gestão de Equipe",
                desc: "Adicione administradores ou usuários comuns. Controle quem acessa o quê.",
              },
              {
                icon: <SmartphoneIcon />,
                title: "Tudo no Celular ou Computador",
                desc: "Interface simples, design mobile-first. Trabalhe de qualquer lugar.",
              },
            ].map((benefit, idx) => (
              <Card
                key={idx}
                sx={{
                  borderLeft: `4px solid ${colors.primary}`,
                  boxShadow: "none",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <CardContent sx={{ display: "flex", gap: 2 }}>
                  <Box
                    sx={{
                      color: colors.primary,
                      display: "flex",
                      alignItems: "flex-start",
                      pt: 0.5,
                      flexShrink: 0,
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, color: colors.primary, mb: 0.5 }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.text }}>
                      {benefit.desc}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Paper>

        {/* SEÇÃO: POR QUE */}
        <Paper
          elevation={2}
          sx={{
            p: { xs: 3, md: 4 },
            mb: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              color: colors.primary,
              mb: 3,
              pb: 2,
              borderBottom: `3px solid ${colors.primary}`,
            }}
          >
            Por Que Difusão Operations
          </Typography>

          <Stack spacing={2.5}>
            {[
              {
                title: "Construído para lojista de verdade.",
                desc: "Não é um sistema genérico. É desenvolvido observando operação real de pequenas lojas. Cada feature existe porque lojista pediu, porque resolve um problema real.",
              },
              {
                title: "Simples, não complexo.",
                desc: "Sem botões desnecessários. Sem features que ninguém usa. Apenas o essencial: produtos, estoque, vendas, lucro.",
              },
              {
                title: "Suporte direto.",
                desc: "Não é chatbot. Não é ticket infinito. Você fala conosco, a gente resolve.",
              },
            ].map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  background:
                    "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                  p: 2.5,
                  borderRadius: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                }}
              >
                <Typography sx={{ fontWeight: 700, color: colors.text, mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Paper>

        {/* SEÇÃO: COMO FUNCIONA */}
        <Paper
          elevation={2}
          sx={{
            p: { xs: 3, md: 4 },
            mb: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              color: colors.primary,
              mb: 3,
              pb: 2,
              borderBottom: `3px solid ${colors.primary}`,
            }}
          >
            Como Funciona
          </Typography>

          <Stack spacing={2}>
            {[
              {
                step: 1,
                title: "Teste grátis por 14 dias",
                desc: "Sem cartão de crédito, sem compromisso",
              },
              {
                step: 2,
                title: "Onboarding via WhatsApp",
                desc: "A gente configura junto com você",
              },
              {
                step: 3,
                title: "Use de verdade",
                desc: "Venda, registre, acompanhe lucro",
              },
              {
                step: 4,
                title: "Décida continuar",
                desc: "Se funcionar (e funciona), contrate",
              },
            ].map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  p: 2,
                  backgroundColor: "#f9f9f9",
                  borderRadius: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                    backgroundColor: colors.primary,
                    color: "white",
                    borderRadius: "50%",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {item.step}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: colors.text }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Paper>

        {/* CTA SECTION */}
        <Paper
          elevation={2}
          sx={{
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
            color: "white",
            textAlign: "center",
            p: { xs: 4, md: 6 },
            borderRadius: 2,
            mb: 4,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              borderBottom: "3px solid rgba(255, 255, 255, 0.3)",
              pb: 2,
            }}
          >
            Próximo Passo
          </Typography>
          <Typography sx={{ mb: 1, lineHeight: 1.8 }}>
            Clique abaixo e teste{" "}
            <strong>Difusão Operations grátis por 14 dias.</strong>
          </Typography>
          <Typography sx={{ mb: 3, opacity: 0.95 }}>
            Acompanhe seu negócio crescer com clareza.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            href="https://wa.me/5585992910554?text=Ol%C3%A1%2C%20gostaria%20de%20testar%20o%20Difus%C3%A3o%20Core%20por%2014%20dias%20gr%C3%A1tis!"
            sx={{
              backgroundColor: "white",
              color: colors.primary,
              fontWeight: 700,
              fontSize: "1rem",
              py: 1.5,
              px: 5,
              "&:hover": {
                backgroundColor: "#f0f0f0",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.3)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Comece Agora no WhatsApp
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};
