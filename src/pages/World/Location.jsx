import { useParams } from "react-router-dom";
import { Box, Typography, Paper, Grid, CircularProgress } from "@mui/material";

import { CustomBreadcrumbs, CustomImage } from "../../components/UI";
import useFetch from "../../hooks/useFetch";

const Location = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`locations/${id}`);

  return (
    <Box mx={{ md: 10, xs: 2 }} my={2}>
      <CustomBreadcrumbs category="locations" name={data?.name} />
      {!isLoading && (
        <Paper sx={{ pb: 2 }}>
          <Grid container spacing={2} px={2} mt={1} flexDirection="row-reverse">
            {/* NAME */}
            <Grid item md={12} mt={2} width="100%">
              <Typography align="center" variant="h5" gutterBottom>
                {data?.name}
              </Typography>
            </Grid>

            {/* IMAGE */}
            <Grid
              item
              lg={4}
              md={7}
              sm={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
            >
              <CustomImage name={data?.name} image={data?.image} />
            </Grid>

            {/* DESCRIPTION  */}
            <Grid item md={5} lg={8} sm={12}>
              <Box px={{ sm: 0, md: 2 }}>
                <Typography align="justify" mt={3} gutterBottom>
                  {data?.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}

      {isLoading && (
        <Box my={5} display="flex" alignItems="center" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default Location;
