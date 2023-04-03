import { useEffect } from "react";

import { TextField, Box } from "@mui/material";
import { Controller } from "react-hook-form";

const NumberInput = ({ name, control, label, defaultValue, setValue }) => {
  useEffect(() => {
    setValue(name, defaultValue);
  }, [defaultValue]);

  return (
    <Box mb={3} minWidth="200px">
      <Controller
        name={name}
        defaultValue={defaultValue}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            fullWidth
            onChange={(event) => {
              onChange(+event.target.value);
            }}
            value={value}
            label={label}
            type="number"
            inputProps={{ min: defaultValue, max: 100 }}
            sx={{
              label: { color: "text.primary" },
              "& .Mui-disabled": {
                color: "text.primary",
                WebkitTextFillColor: "#eee",
              },
            }}
          />
        )}
      />
    </Box>
  );
};

export default NumberInput;
