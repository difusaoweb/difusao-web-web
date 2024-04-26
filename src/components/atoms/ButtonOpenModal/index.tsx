"use client";
import * as React from "react";
import { Button } from "@mui/material";

import { useSession } from "@/components/atoms/SessionProvider";

export const ButtonOpenModal = () => {
  const { setSession } = useSession();

  return (
    <Button
      variant="contained"
      size="large"
      color="success"
      sx={{ mb: 3 }}
      onClick={() => setSession({ modalOpen: true })}
    >
      Testar grátis por 3 dias
    </Button>
  );
};
