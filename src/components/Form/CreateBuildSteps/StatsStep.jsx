import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import SelectInput from "../Inputs/SelectInput";
import StatsFields from "./StatsFields";
import TextInput from "../Inputs/TextInput";

const StatsStep = ({ control, setValue, getValues, classes, currentClass }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      py={2}
    >
      <Typography gutterBottom variant="h5">
        Name
      </Typography>
      <TextInput
        name="root.buildName"
        control={control}
        label="Build Name"
        defaultValue=""
        required={true}
      />

      <Typography gutterBottom variant="h5" sx={{ pt: 2 }}>
        Stats
      </Typography>

      {/* CLASS SELECTOR */}
      {classes && (
        <SelectInput
          name="root.classSelect"
          control={control}
          label="Class"
          defaultValue={""}
          values={classes}
          classSelect={true}
        />
      )}
      {/* DEFAULT / MIN VALUES BASED ON SELECTED CLASS */}
      {currentClass >= 0 && (
        <StatsFields
          values={
            getValues("stats")
              ? getValues("stats")
              : classes[currentClass].stats
          }
          control={control}
          setValue={setValue}
        />
      )}
    </Box>
  );
};

export default StatsStep;
