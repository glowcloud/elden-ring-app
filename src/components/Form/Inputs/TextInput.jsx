import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

const TextInput = ({ name, control, label, defaultValue, required, type }) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          onChange={onChange}
          value={value}
          label={label}
          sx={{ label: { color: "text.primary" } }}
          required={required}
          type={type ? type : "text"}
        />
      )}
    />
  );
};

export default TextInput;
