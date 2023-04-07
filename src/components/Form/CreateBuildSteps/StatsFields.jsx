import NumberInput from "../Inputs/NumberInput";
import { Grid } from "@mui/material";

const StatsFields = ({ values, control, setValue }) => {
  return (
    <Grid container spacing={1} justify="space-between" alignItems="stretch">
      {Object.keys(values).map((stat) => {
        if (stat !== "level")
          return (
            <Grid
              item
              key={stat}
              flexGrow={1}
              xs={12}
              md={6}
              lg={3}
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
