import * as React from "react";
import { IMaskInput } from "react-imask";
import {
  FormControl,
  InputLabel,
  Input,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";

import type {
  InputPhoneNumberPropsTypes,
  CustomInputComponentPropsTypes,
} from "@/components/atoms/InputPhoneNumber/types";

const CustomInputComponent = React.forwardRef<
  HTMLElement,
  CustomInputComponentPropsTypes
>(function CustomInputComponent(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(00) 00000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      ref={ref}
      onAccept={(value: any) =>
        onChange({
          target: {
            name: props.name,
            value: value.length === 0 ? null : value,
          },
        })
      }
      overwrite
    />
  );
});

export const InputPhoneNumber = ({
  label,
  fullWidth = true,
  variant = null,
  errorZod = null,
  ...props
}: InputPhoneNumberPropsTypes) => {
  const id = "brainfit-vagas-input-phone-number";

  return (
    <>
      <FormControl
        variant={variant === null ? "standard" : variant}
        fullWidth={fullWidth}
        error={errorZod !== null}
        // size="small"
      >
        <InputLabel htmlFor={id}>{label}</InputLabel>
        {variant === "outlined" ? (
          <OutlinedInput
            {...props}
            id={id}
            inputComponent={CustomInputComponent as any}
            fullWidth={true}
            // size="small"
            label={label}
            placeholder="(99) 99999-9999"
          />
        ) : (
          <Input
            {...props}
            id={id}
            inputComponent={CustomInputComponent as any}
            fullWidth={true}
            // size="small"
            placeholder="(99) 99999-9999"
          />
        )}
        {errorZod && <FormHelperText error>{errorZod.message}</FormHelperText>}
      </FormControl>
    </>
  );
};
