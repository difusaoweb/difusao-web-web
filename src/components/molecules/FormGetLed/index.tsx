"use client";
import * as React from "react";
import { Box, TextField } from "@mui/material";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/lab/LoadingButton";

import { useSession } from "@/components/atoms/SessionProvider";
import { Input } from "@/components/atoms/Input";
import { InputPhoneNumber } from "@/components/atoms/InputPhoneNumber";
import * as LeadService from "@/services/LeadService";

const ZOD_MESSAGES = {
  name: {
    required: "Insira o seu nome!",
    exists:
      "Esse nome já foi utilizado, se possível utilize seu nome completo.",
  },
  email: {
    required: "O email é obrigatório!",
    type: "Insira um e-mail válido.",
    exists: "Esse e-mail já foi utilizado, por favor digite outro.",
  },
  phoneNumber: {
    required: "Insira o número Celular/WhatsApp!",
    exists: "Esse número já foi utilizado, por favor digite outro.",
  },
};

const sendFormSchema = z.object({
  name: z.string({
    required_error: ZOD_MESSAGES.name.required,
    invalid_type_error: ZOD_MESSAGES.name.required,
  }),
  email: z
    .string({
      required_error: ZOD_MESSAGES.email.required,
      invalid_type_error: ZOD_MESSAGES.email.required,
    })
    .email({ message: ZOD_MESSAGES.email.type }),
  phoneNumber: z.string({
    required_error: ZOD_MESSAGES.phoneNumber.required,
    invalid_type_error: ZOD_MESSAGES.phoneNumber.required,
  }),
});

type SendFormDataTypes = z.infer<typeof sendFormSchema>;

export const FormGetLed = () => {
  const { setSession } = useSession();
  const [loading, setLoading] = React.useState(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SendFormDataTypes>({
    mode: "onChange",
    resolver: zodResolver(sendFormSchema),
  });

  const disabledSend = () => {
    for (var i in errors) {
      return true;
    }
    return false;
  };

  async function send(dataForm: SendFormDataTypes) {
    sendFormSchema.parse(dataForm);
    setLoading(true);
    try {
      // Validation passed
      const { success, failure } = await LeadService.store(dataForm);
      if (success === null) {
        if (failure !== null) {
          throw failure;
        }
        return;
      }

      setSession({ modal: "success" });
    } catch (err: any) {
      if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
        console.error(
          new Date(),
          "src/components/molecules/FormGetLed/index.tsx send"
        );
        console.error(err);
      }
      const failure = { code: "UNKNOWN" };
      if (err.code !== undefined) {
        failure.code = err.code;
      }
      switch (failure.code) {
        case "E_VALIDATION_ERROR":
          err.errors.map(
            ({
              rule,
              field,
              message,
              args,
            }: {
              rule: string;
              field: keyof z.infer<typeof sendFormSchema>;
              message: string;
              args: {};
            }) => {
              let errorMessage = message;
              if (rule === "database.unique") {
                errorMessage = ZOD_MESSAGES[field].exists;
              }
              setError(field, {
                type: "required_error",
                message: errorMessage,
              });
            }
          );
          // toast.error("Usuário ou senha inválidos!");
          break;
        // case "INCORRECT_PASSWORD":
        //   toast.error("Usuário ou senha inválidos!");
        //   break;
        // case "EMAIL_NOT_VALIDATED":
        //   toast.warning("Confirme seu email!");
        //   router.push(`/confirmation?email=${err.response?.data?.email}`);
        //   break;
        // case "UNAUTHORIZED_USER":
        //   toast.error("Usuário não autorizado.");
        //   break;
        // default:
        //   toast.error("Error ao logar, tente novamente mais tarde.");
      }
    }
    setLoading(false);
  }

  return (
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
      onSubmit={handleSubmit(send)}
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Nome"
            placeholder="Digite seu nome"
            variant="outlined"
            errorZod={errors.name}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="E-mail (obrigatório)"
            placeholder="Digite seu e-mail"
            variant="outlined"
            errorZod={errors.email}
          />
        )}
      />
      <Controller
        name="phoneNumber"
        control={control}
        render={({ field }) => (
          <InputPhoneNumber
            {...field}
            label="Celular/WhatsApp (obrigatório)"
            variant="outlined"
            errorZod={errors.phoneNumber}
          />
        )}
      />
      <Button
        variant="contained"
        size="large"
        color="secondary"
        style={{ backgroundColor: "#9300d1", width: "90%" }}
        type="submit"
        disabled={disabledSend()}
        loading={loading}
      >
        Quero ser informado
      </Button>
    </Box>
  );
};
