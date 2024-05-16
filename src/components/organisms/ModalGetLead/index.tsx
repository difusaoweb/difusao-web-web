"use client";
import * as React from "react";
import {
  Backdrop,
  Card,
  CardContent,
  CardHeader,
  Fade,
  Modal,
  Typography,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

import { useSession } from "@/components/atoms/SessionProvider";
import { FormGetLed } from "@/components/molecules/FormGetLed";

export const ModalGetLed = () => {
  const { session, setSession } = useSession();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={session.modal !== "off"}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={session.modal !== "off"}>
        <Card
          sx={{
            ...style,
            // minWidth: { xs: "90%", lg: 700 },
            "& .MuiCardHeader-action": {
              margin: 0,
            },
            width: {
              xs: "96%",
              lg: 700,
            },
            height: {
              xs: "95%",
              lg: "auto",
            },
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <CardHeader
            action={
              <IconButton
                aria-label="close"
                style={{ color: "#fff", backgroundColor: "#9300d1" }}
                onClick={() => setSession({ modal: "off" })}
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
            {session.modal === "open" ? (
              <>
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
                <FormGetLed />
              </>
            ) : session.modal === "success" ? (
              <>
                <Typography gutterBottom component="h2" variant="h4">
                  Dados recebidos! 🤝
                </Typography>
                <Typography>
                  Muito obrigado! Assim que diponibilizarmos mais vagas para
                  testes BETA iremos lhe comunicar.
                  <br />
                  Fique de olho no seu WhatsApp e caixa de e-mail.
                </Typography>
              </>
            ) : (
              <></>
            )}
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
