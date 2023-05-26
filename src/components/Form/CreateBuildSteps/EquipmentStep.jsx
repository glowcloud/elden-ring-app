import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";

import SelectInput from "../Inputs/SelectInput";

const EquipmentStep = ({
  control,
  ammos,
  talismans,
  weapons,
  ashes,
  shields,
}) => {
  const allWeapons = weapons
    .concat(shields)
    .sort((a, b) => a.name.localeCompare(b.name));
  const sortedAshes = ashes.sort((a, b) => a.name.localeCompare(b.name));
  const ammoSlots = new Array(4).join(".").split(".");
  const talismanSlots = new Array(4).join(".").split(".");
  const rightWeaponSlots = new Array(3).join(".").split(".");
  const leftWeaponSlots = new Array(3).join(".").split(".");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      py={2}
    >
      <Typography gutterBottom variant="h5">
        Equipment
      </Typography>

      {/* WEAPON SELECTS */}
      <Typography gutterBottom variant="h6" sx={{ p: 2 }}>
        Weapons
      </Typography>

      <Grid container spacing={1} justify="space-between" alignItems="stretch">
        {weapons &&
          rightWeaponSlots.map((slot, index) => (
            <Grid item key={index} xs={12} md={12} flexGrow={1}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="stretch"
                flexDirection={{ xs: "column", md: "row" }}
              >
                <Box flexGrow={1} mr={{ sm: 0, md: 1 }}>
                  <SelectInput
                    name={`equipment.rightWeaponSelect${index}`}
                    control={control}
                    label={`Right Weapon ${index + 1}`}
                    defaultValue={""}
                    values={allWeapons}
                  />
                </Box>
                <Box flexGrow={1}>
                  <SelectInput
                    name={`equipment.rightWeaponAshSelect${index}`}
                    control={control}
                    label={`Right Weapon Ash ${index + 1}`}
                    defaultValue={""}
                    values={sortedAshes}
                  />
                </Box>
              </Box>
            </Grid>
          ))}

        {weapons &&
          leftWeaponSlots.map((slot, index) => (
            <Grid item key={index} md={12} flexGrow={1}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="stretch"
                flexDirection={{ xs: "column", md: "row" }}
              >
                <Box flexGrow={1} mr={{ sm: 0, md: 1 }}>
                  <SelectInput
                    name={`equipment.leftWeaponSelect${index}`}
                    control={control}
                    label={`Left Weapon${index + 1}`}
                    defaultValue={""}
                    values={allWeapons}
                  />
                </Box>
                <Box flexGrow={1}>
                  <SelectInput
                    name={`equipment.leftWeaponAshSelect${index}`}
                    control={control}
                    label={`Left Weapon Ash ${index + 1}`}
                    defaultValue={""}
                    values={sortedAshes}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>

      {/* TALISMAN SELECTS */}
      <Typography gutterBottom variant="h6" sx={{ p: 2 }}>
        Talismans
      </Typography>

      <Grid container spacing={1} justify="space-between" alignItems="stretch">
        {talismans &&
          talismanSlots.map((slot, index) => (
            <Grid item key={index} sm={12} md={6} flexGrow={1}>
              <SelectInput
                name={`equipment.talismanSelect${index}`}
                control={control}
                label={`Talisman ${index + 1}`}
                defaultValue={""}
                values={talismans.sort((a, b) => a.name.localeCompare(b.name))}
              />
            </Grid>
          ))}
      </Grid>

      {/* AMMO SELECTS */}
      <Typography gutterBottom variant="h6" sx={{ p: 2 }}>
        Ammos
      </Typography>

      <Grid container spacing={1} justify="space-between" alignItems="stretch">
        {ammos &&
          ammoSlots.map((slot, index) => (
            <Grid item key={index} sm={12} md={6} flexGrow={1}>
              <SelectInput
                name={`equipment.ammoSelect${index}`}
                control={control}
                label={`Ammo ${index + 1}`}
                defaultValue={""}
                values={ammos.sort((a, b) => a.name.localeCompare(b.name))}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default EquipmentStep;
