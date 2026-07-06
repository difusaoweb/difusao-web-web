"use client";
import * as React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Alert,
  Chip,
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon,
  Warning as WarningIcon,
  Lightbulb as LightbulbIcon,
  VisibilityOff as VisibilityOffIcon,
  Schedule as ScheduleIcon,
  Check as CheckIcon,
} from "@mui/icons-material";

export const BlogPostPage = () => {
  const colors = {
    primary: "#667eea",
    secondary: "#764ba2",
    success: "#27ae60",
    warning: "#f39c12",
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
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Chip
            label="Meta Ads • Estratégia Digital"
            size="small"
            sx={{
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "white",
              mb: 2,
              fontWeight: 600,
            }}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            Públicos Personalizados no Meta Ads
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 300,
              opacity: 0.95,
              maxWidth: "600px",
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Aprenda a segmentar seus públicos corretamente e multiplique seus
            resultados em vendas
          </Typography>
        </Container>
      </Box>

      {/* MAIN CONTENT */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        {/* META INFO */}
        <Box sx={{ mb: 4, display: "flex", gap: 3, flexWrap: "wrap" }}>
          <Box>
            <Typography
              variant="caption"
              sx={{ color: "#999", display: "block" }}
            >
              Tempo de leitura
            </Typography>
            <Typography sx={{ fontWeight: 600, color: colors.text }}>
              8 minutos
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="caption"
              sx={{ color: "#999", display: "block" }}
            >
              Data
            </Typography>
            <Typography sx={{ fontWeight: 600, color: colors.text }}>
              04 de julho 2026
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="caption"
              sx={{ color: "#999", display: "block" }}
            >
              Nível
            </Typography>
            <Typography sx={{ fontWeight: 600, color: colors.text }}>
              Intermediário
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* INTRODUCÃO */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 4,
            backgroundColor: "rgba(102, 126, 234, 0.05)",
            borderLeft: `4px solid ${colors.primary}`,
          }}
        >
          <Typography
            sx={{ color: colors.text, lineHeight: 1.8, fontSize: "1.05rem" }}
          >
            Se você está rodando anúncios no Meta Ads (Facebook e Instagram) e
            não está utilizando públicos personalizados de forma estratégica,
            está deixando dinheiro na mesa. Neste artigo, vamos explorar como
            criar, segmentar e utilizar públicos personalizados para maximizar
            suas conversões e reduzir custos de campanha.
          </Typography>
        </Paper>

        {/* ÍNDICE */}
        <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, mb: 2, color: colors.primary }}
          >
            Neste artigo:
          </Typography>
          <List sx={{ pl: 0 }}>
            <ListItem sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: colors.primary }} />
              </ListItemIcon>
              <ListItemText primary="O que é um público personalizado" />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: colors.primary }} />
              </ListItemIcon>
              <ListItemText primary="A importância do fator tempo" />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: colors.primary }} />
              </ListItemIcon>
              <ListItemText primary="Estratégia por tipo de interação" />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckCircleIcon sx={{ color: colors.primary }} />
              </ListItemIcon>
              <ListItemText primary="Erros comuns e como evitá-los" />
            </ListItem>
          </List>
        </Paper>

        {/* SEÇÃO 1 */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: colors.primary,
              mb: 2,
              pb: 1,
              borderBottom: `2px solid ${colors.primary}`,
            }}
          >
            O que é um Público Personalizado?
          </Typography>
          <Typography sx={{ color: colors.text, lineHeight: 1.8, mb: 2 }}>
            Um público personalizado é como uma caixa digital onde você coloca
            pessoas que interagiram de alguma forma com seu perfil ou conteúdo
            no Instagram ou Facebook. Essas pessoas:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon sx={{ color: colors.primary, minWidth: 40 }}>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Enviaram mensagem para sua conta" />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: colors.primary, minWidth: 40 }}>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Salvaram seus posts" />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: colors.primary, minWidth: 40 }}>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Curtiram, comentaram ou compartilharam seu conteúdo" />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: colors.primary, minWidth: 40 }}>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Visitaram seu perfil" />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: colors.primary, minWidth: 40 }}>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Assistiram seus vídeos" />
            </ListItem>
          </List>

          <Alert severity="info" sx={{ mt: 3 }}>
            <strong>Dica:</strong> Você pode usar esses públicos como referência
            para encontrar pessoas semelhantes (público semelhante) ou
            direcioná-los diretamente em campanhas de vendas e remarketing.
          </Alert>
        </Box>

        {/* SEÇÃO 2 */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: colors.primary,
              mb: 2,
              pb: 1,
              borderBottom: `2px solid ${colors.primary}`,
            }}
          >
            A Importância do Fator Tempo
          </Typography>
          <Typography sx={{ color: colors.text, lineHeight: 1.8, mb: 3 }}>
            <strong>Esta é a lição mais importante do artigo:</strong> Os
            públicos personalizados não são algo estático. A recência da
            interação faz uma diferença ENORME nos resultados e custos de sua
            campanha.
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 3,
              backgroundColor: "rgba(233, 212, 96, 0.1)",
              borderLeft: `4px solid ${colors.warning}`,
              mb: 3,
            }}
          >
            <Typography sx={{ fontWeight: 700, color: colors.warning, mb: 1 }}>
              <WarningIcon
                sx={{ fontSize: 18, mr: 1, verticalAlign: "middle" }}
              />
              Quanto mais recente a interação, melhor e mais barato
            </Typography>
            <Typography sx={{ color: colors.text, mt: 2, lineHeight: 1.8 }}>
              Uma pessoa que enviou mensagem há 7 dias está "quentíssima" —
              muito engajada e próxima de fazer uma compra. O custo para
              alcançá-la (CPM) é significativamente menor. Ao contrário, alguém
              que interagiu há 1 ano é um público "frio" e vai custar bem mais
              caro para tentar trazer de volta.
            </Typography>
          </Paper>

          <Typography sx={{ color: colors.text, lineHeight: 1.8, mb: 2 }}>
            <strong>Por quê?</strong> Imagine que é uma questão de distância.
            Quando alguém está longe de você (tempo distante), você precisa
            "gritar" para ser ouvido. Essa distância custa dinheiro ao Meta.
          </Typography>

          <Card
            sx={{
              borderLeft: `4px solid ${colors.primary}`,
              boxShadow: "none",
              mb: 3,
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontWeight: 700, color: colors.primary, mb: 2 }}
              >
                Estratégia: Segmentação por Tempo
              </Typography>
              <Stack spacing={1.5}>
                <Box>
                  <Typography sx={{ fontWeight: 600, color: colors.text }}>
                    7-30 dias: Público Muito Quente
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Alta propensão a comprar. Menor CPM. Prioridade máxima.
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, color: colors.text }}>
                    30-90 dias: Público Morno
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Moderada propensão. CPM moderado. Boa oportunidade.
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, color: colors.text }}>
                    90-180 dias: Público Frio
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Bom para remarketing. CPM mais alto. Menos eficiente.
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, color: colors.text }}>
                    180-365 dias: Público Muito Frio
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Apenas para campanhas específicas. Evitar se possível.
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        {/* SEÇÃO 3 */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: colors.primary,
              mb: 2,
              pb: 1,
              borderBottom: `2px solid ${colors.primary}`,
            }}
          >
            Estratégia por Tipo de Interação
          </Typography>

          <Typography sx={{ color: colors.text, lineHeight: 1.8, mb: 3 }}>
            Diferentes tipos de interação indicam diferentes níveis de
            engajamento. Aqui está como categorizar cada uma:
          </Typography>

          {[
            {
              title: "1. Quem Enviou Mensagem",
              icon: <CheckCircleIcon />,
              importance: "MÁXIMA",
              description:
                "A interação mais valiosa. Essa pessoa demonstrou interesse específico e está pronta para converter.",
              timeframe: "Recomendado: 7-30 dias",
              color: colors.success,
            },
            {
              title: "2. Quem Salvou Seu Post",
              icon: <CheckCircleIcon />,
              importance: "ALTA",
              description:
                "Salvou o post para ver depois. Demonstra interesse real, mas menor que mensagem.",
              timeframe: "Recomendado: 30-120 dias",
              color: colors.primary,
            },
            {
              title:
                "3. Quem Interagiu (Curtida, Comentário, Compartilhamento)",
              icon: <TrendingUpIcon />,
              importance: "MÉDIA",
              description:
                "Interação básica. Pode ser genuína ou apenas por hábito. Menos preditiva de venda.",
              timeframe: "Recomendado: 30-90 dias",
              color: colors.primary,
            },
            {
              title: "4. Quem Visitou Seu Perfil",
              icon: <WarningIcon />,
              importance: "BAIXA",
              description:
                "Pode ter visitado por acidente ou curiosidade. Muito menos preditivo de venda.",
              timeframe: "Recomendado: 30 dias ou menos",
              color: colors.warning,
            },
          ].map((item, idx) => (
            <Card
              key={idx}
              sx={{
                borderLeft: `4px solid ${item.color}`,
                boxShadow: "none",
                mb: 2,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Box sx={{ color: item.color, flexShrink: 0 }}>
                    {item.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{ fontWeight: 700, color: colors.text, mb: 0.5 }}
                    >
                      {item.title}
                    </Typography>
                    <Chip
                      label={`Importância: ${item.importance}`}
                      size="small"
                      sx={{
                        backgroundColor: item.color,
                        color: "white",
                        fontWeight: 600,
                        mb: 1,
                      }}
                    />
                  </Box>
                </Box>
                <Typography sx={{ color: "#666", mb: 1, lineHeight: 1.6 }}>
                  {item.description}
                </Typography>
                <Typography sx={{ color: "#999", fontSize: "0.9rem" }}>
                  <strong>Janela de Tempo:</strong> {item.timeframe}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* SEÇÃO 4 */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: colors.primary,
              mb: 2,
              pb: 1,
              borderBottom: `2px solid ${colors.primary}`,
            }}
          >
            Estratégia Avançada: Segmentação por Visualização de Vídeo
          </Typography>

          <Typography sx={{ color: colors.text, lineHeight: 1.8, mb: 3 }}>
            Se você usa vídeos em suas campanhas, pode criar públicos ainda mais
            específicos baseado na porcentagem do vídeo que a pessoa assistiu:
          </Typography>

          <Card
            sx={{
              borderLeft: `4px solid ${colors.primary}`,
              boxShadow: "none",
              mb: 3,
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontWeight: 700, color: colors.primary, mb: 2 }}
              >
                Lógica: Quanto Viu vs. Quando Viu
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    Viu 95% do vídeo (7-30 dias)
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Muito quente. Viu tudo, estava altamente engajado e é
                    recente.
                  </Typography>
                </Box>
                <Divider />
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    Viu 75% do vídeo (45-60 dias)
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Quente. Viu bastante mas pode estar um pouco mais distante
                    no tempo.
                  </Typography>
                </Box>
                <Divider />
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    Viu 50% do vídeo (60-75 dias)
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Morno. Interesse moderado, dê mais tempo para o Meta
                    encontrá-los.
                  </Typography>
                </Box>
                <Divider />
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    Viu 25% do vídeo (75+ dias)
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Frio. Interesse baixo, use apenas para remarketing.
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <Alert severity="warning" icon={<LightbulbIcon />}>
            <strong>Por que variar o tempo?</strong> Você está isolando a
            variável "recência" para medir sua verdadeira importância. Se uma
            pessoa viu 95% mas há muito tempo, pode ser que não tenha gostado
            (apenas terminou de ver). Pessoas que veem menos mas mais
            recentemente podem converter melhor.
          </Alert>
        </Box>

        {/* SEÇÃO 5 */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: colors.primary,
              mb: 2,
              pb: 1,
              borderBottom: `2px solid ${colors.primary}`,
            }}
          >
            Erros Comuns a Evitar
          </Typography>

          <Stack spacing={2}>
            {[
              {
                error: 'Usar "Qualquer Um" sem segmentação',
                consequence:
                  "Mistura públicos quentes e frios, resultando em CPM alto e conversão baixa.",
                solution: "Sempre segmente por tipo de interação e tempo.",
              },
              {
                error: 'Ficar preso ao público "Interagiram"',
                consequence:
                  "Meta oferece isso pronto, mas agrupa demais sem diferenciação clara.",
                solution:
                  "Crie públicos específicos com critérios bem definidos.",
              },
              {
                error: "Janelas de tempo muito longas para públicos quentes",
                consequence:
                  "Perde a oportunidade de converter enquanto o interesse é alto.",
                solution:
                  "Use 7-30 dias para mensagens, 30-60 para interações.",
              },
              {
                error: 'Usar público "Visitaram o Perfil" como primário',
                consequence:
                  "Muitas dessas visitas são acidentais, com baixíssima conversão.",
                solution: "Use apenas como complemento, nunca como foco.",
              },
              {
                error: "Não revisar e otimizar seus públicos",
                consequence:
                  "Segue a mesma estratégia indefinidamente, mesmo que não funcione.",
                solution:
                  "Teste diferentes segmentações e meça resultados (ROAS).",
              },
            ].map((item, idx) => (
              <Card key={idx} sx={{ borderLeft: `4px solid ${colors.danger}` }}>
                <CardContent>
                  <Typography
                    sx={{ fontWeight: 700, color: colors.danger, mb: 1 }}
                  >
                    ❌ {item.error}
                  </Typography>
                  <Typography
                    sx={{ color: "#666", mb: 1.5, fontSize: "0.95rem" }}
                  >
                    <strong>Consequência:</strong> {item.consequence}
                  </Typography>
                  <Typography
                    sx={{ color: colors.success, fontSize: "0.95rem" }}
                  >
                    <strong>✓ Solução:</strong> {item.solution}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>

        {/* SEÇÃO 6 */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: colors.primary,
              mb: 2,
              pb: 1,
              borderBottom: `2px solid ${colors.primary}`,
            }}
          >
            Resumo: Sua Estratégia de Públicos
          </Typography>

          <Card
            sx={{
              backgroundColor: "rgba(102, 126, 234, 0.05)",
              borderLeft: `4px solid ${colors.primary}`,
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontWeight: 700, color: colors.primary, mb: 2 }}
              >
                Públicos Essenciais para Vendas:
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    1. Enviaram Mensagem (7, 30, 90 dias)
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Prioridade #1. Use sempre para campanha de vendas.
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    2. Visualização de Vídeo (segmentada por %)
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Use para entender engajamento real com seu conteúdo.
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    3. Interação Geral (salvou + interagiu + visitou)
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Público complementar, 180 dias (mais abrangente).
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        {/* CONCLUSÃO */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            backgroundColor: "rgba(102, 126, 234, 0.05)",
            borderRadius: 2,
            border: `2px solid ${colors.primary}`,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: colors.primary,
              mb: 2,
            }}
          >
            Conclusão
          </Typography>
          <Typography sx={{ color: colors.text, lineHeight: 1.8 }}>
            Públicos personalizados bem segmentados são o diferencial entre
            campanhas que queimam dinheiro e campanhas que geram ROI
            consistente. O fator tempo é a chave: quanto mais recente a
            interação, melhor e mais barato alcançar. Implemente as estratégias
            acima, teste, meça seus resultados (ROAS) e otimize continuamente.
          </Typography>
          <Typography sx={{ color: colors.text, lineHeight: 1.8, mt: 2 }}>
            Se você está rodando anúncios sem considerar tudo isso, comece hoje.
            A diferença pode ser de 2x a 5x no seu retorno.
          </Typography>
        </Paper>

        {/* CTA */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography sx={{ color: "#999", mb: 2 }}>
            Gostou deste conteúdo?
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="https://wa.me/5585992910554?text=Ol%C3%A1%2C%20gostaria%20de%20testar%20o%20Difus%C3%A3o%20Core%20por%2014%20dias%20gr%C3%A1tis!"
            sx={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
              color: "white",
              fontWeight: 700,
              py: 1.5,
              px: 5,
              fontSize: "1rem",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Compartilhe este Artigo
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
