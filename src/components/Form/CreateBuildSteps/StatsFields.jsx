import NumberInput from "../Inputs/NumberInput";
import { Grid } from "@mui/material";

const StatsFields = ({ values, control, setValue }) => {
  return (
    <Grid container spacing={2}>
      {Object.keys(values).map((stat) => {
        if (stat !== "level")
          return (
            <Grid
              display="flex"
              justifyContent="center"
              alignItems="center"
              item
              xs={12}
              md={3}
              key={stat}
              minWidth={{ xs: 200, md: 0 }}
            >
              <NumberInput
                name={`stats.${stat}`}
                control={control}
                label={stat}
                defaultValue={values[stat] * 1}
                setValue={setValue}
                disabled={stat === "level"}
              />
            </Grid>
          );
      })}
    </Grid>
  );
};

export default StatsFields;
