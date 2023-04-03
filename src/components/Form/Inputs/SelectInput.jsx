import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import { Controller } from "react-hook-form";

const SelectInput = ({
  name,
  control,
  label,
  defaultValue,
  values,
  classSelect,
}) => {
  return (
    <Box minWidth="200px" mb={3}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: "text.primary" }}>{label}</InputLabel>
        <Controller
          name={name}
          defaultValue={defaultValue}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select onChange={onChange} value={value}>
              {values.map((val, key) => (
                <MenuItem key={key} value={classSelect ? key : val.id}>
                  {val.name}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    </Box>
  );
};

export default SelectInput;
