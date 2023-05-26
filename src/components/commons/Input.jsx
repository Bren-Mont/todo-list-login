import * as React from "react";
import { Box, TextField } from "@mui/material";

export function Input({
  id,
  name,
  label,
  error,
  className,
  margin = "normal",
  required = true,
  fullWidth = true,
  ...rest
}) {
  return (
    <TextField
      error={Boolean(error)}
      id={id}
      name={name}
      label={label}
      margin={margin}
      required={required}
      className={className}
      fullWidth={fullWidth}
      {...rest}
    />
  );
}
