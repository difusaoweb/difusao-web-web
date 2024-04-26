"use client";
import * as React from "react";
import {
  Backdrop,
  Box,
  Card,
  CardContent,
  CardHeader,
  Fade,
  Modal,
  TextField,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

import { useSession } from "@/components/atoms/SessionProvider";

export const ModalGetLed = () => {
  const { session, setSession } = useSession();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={session.modalOpen}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={session.modalOpen}>
        <Card
          sx={{
            ...style,
            minWidth: { xs: "90%", lg: 700 },
            "& .MuiCardHeader-action": {
              margin: 0,
            },
          }}
        >
          <CardHeader
            action={
              <IconButton
                aria-label="close"
                style={{ color: "#fff", backgroundColor: "#9300d1" }}
                onClick={() => setSession({ modalOpen: false })}
              >
                <CloseIcon />
              </IconButton>
            }
            style={{
              paddingBottom: 0,
            }}
          />
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 0,
              marginTop: -20,
              textAlign: "center",
            }}
          >
            <Typography gutterBottom component="h2" variant="h4">
              😱 Chegou atrasado!
            </Typography>
            <Typography style={{ marginBottom: 20 }} component="p">
              {"Infelizmente as vagas para os "}
              <span style={{ fontWeight: "900" }}>testes BETA</span>
              {" acabaram,"}
              <br />
              {"mas preencha os campos abaixo com suas informações,"}
              <br />
              {"assim que disponibilizarmos mais vagas,"}
              <br />
              {"iremos lhe informar por WhatsApp e e-mail ;)"}
            </Typography>
            <Box
              component="form"
              sx={{ width: { xs: "90%", lg: "50%" } }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                label="Nome"
                placeholder="Digite seu nome"
                variant="outlined"
                fullWidth
              />
              <TextField
                label="E-mail (obrigatório)"
                placeholder="Digite seu e-mail"
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Celular/whatsapp (obrigatório)"
                variant="outlined"
                fullWidth
              />
              <Button
                variant="contained"
                size="large"
                color="secondary"
                style={{ backgroundColor: "#9300d1", width: "90%" }}
                onClick={() => setSession({ modalOpen: true })}
                type="submit"
              >
                Quero ser informado
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  );
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: 6,
};
