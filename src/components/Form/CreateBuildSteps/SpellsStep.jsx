import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";

import SelectInput from "../Inputs/SelectInput";

const SpellsStep = ({ control, incantations, sorceries }) => {
  const allSpells = incantations
    .concat(sorceries)
    .sort((a, b) => a.name.localeCompare(b.name));
  const spellSlots = new Array(12).join(".").split(".");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      py={2}
    >
      <Typography gutterBottom variant="h5">
        Spells
      </Typography>

      <Grid container spacing={1} justify="space-between" alignItems="stretch">
        {allSpells &&
          spellSlots.map((slot, index) => (
            <Grid item key={index} sm={12} md={6} flexGrow={1}>
              <SelectInput
                name={`spells.spellSelect${index}`}
                control={control}
                label={`Spell ${index + 1}`}
                defaultValue={""}
                values={allSpells}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default SpellsStep;
