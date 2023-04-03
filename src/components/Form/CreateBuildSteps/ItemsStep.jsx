import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";

import SelectInput from "../Inputs/SelectInput";

const ItemsStep = ({ control, items, spirits }) => {
  const allItems = items
    // .filter((item) => item.type === "Reusable")
    .concat(spirits)
    .sort((a, b) => a.name.localeCompare(b.name));
  const itemSlots = new Array(10).join(".").split(".");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      py={2}
    >
      <Typography gutterBottom variant="h5">
        Items
      </Typography>

      <Grid
        container spacing={1} justify="space-between" alignItems="stretch"
      >
        {allItems &&
          itemSlots.map((slot, index) => (
            <Grid item key={index} sm={12} md={6} flexGrow={1}>
              <SelectInput
                name={`items.itemSelect${index}`}
                control={control}
                label={`Item ${index + 1}`}
                defaultValue={""}
                values={allItems}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default ItemsStep;
