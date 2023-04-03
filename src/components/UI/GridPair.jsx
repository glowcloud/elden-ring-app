import { Grid, Box } from "@mui/material";

import GridCard from "./GridCard";

const GridPair = ({ item1, item2, path1, path2 }) => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="stretch"
        my={1}
      >
        <GridCard path={path1} item={item1} />
        {item2 && Object.keys(item2).length > 0 && (
          <GridCard path={path2} item={item2} />
        )}
      </Grid>
    </Box>
  );
};

export default GridPair;
