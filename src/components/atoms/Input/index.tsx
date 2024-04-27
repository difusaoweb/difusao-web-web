import * as React from "react";
import { TextField } from "@mui/material";

import type { InputPropsTypes } from "@/components/atoms/Input/types";

export const Input = ({
  autoComplete,
  value = null,
  variant = null,
  errorZod = null,
  ...props
}: InputPropsTypes) => {
  const newAutoComplete = autoComplete === false ? "off" : autoComplete;
  return (
    <>
      <TextField
        {...props}
        fullWidth={true}
        variant={variant ?? "standard"}
        autoComplete={newAutoComplete}
        defaultValue={null}
        error={errorZod !== null}
        value={value ?? ""}
        onChange={(e) =>
          props.onChange(e.target.value.length === 0 ? null : e.target.value)
        }
        helperText={errorZod && errorZod.message}
        inputProps={{
          autoComplete: newAutoComplete,
        }}
      />
    </>
  );
};
