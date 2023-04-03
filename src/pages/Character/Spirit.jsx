import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Divider,
  CircularProgress,
} from "@mui/material";

import { CustomBreadcrumbs, CustomImage } from "../../components/UI";
import useFetch from "../../hooks/useFetch";

const Spirit = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`spirits/${id}`);

  return (
    <Box mx={{ md: 10, xs: 2 }} my={2}>
      <CustomBreadcrumbs category="spirits" name={data?.name} />
      {!isLoading && (
        <Paper sx={{ pb: 2 }}>
          <Grid container spacing={2} px={2} mt={1} flexDirection="row-reverse">
            {/* NAME */}
            <Grid item md={12} mt={2} width="100%">
              <Typography align="center" variant="h5" gutterBottom>
                {data?.name}
              </Typography>
            </Grid>

            <Grid item lg={4} md={7} sm={12} xs={12}>
              <Paper
                elevation={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                {/* IMAGE */}
                <CustomImage name={data?.name} image={data?.image} />

                {/* STATS */}
                <Box display="flex" flexDirection="column" width="100%" mb={2}>
                  <Divider sx={{ my: 2 }} color="#eee" variant="middle" />
                  <Box px={4}>
                    <Typography gutterBottom>
                      FP Cost: {data?.fpCost}
                    </Typography>
                    <Typography gutterBottom>
                      HP Cost: {data?.hpCost}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            {/* DESCRIPTION  */}
            <Grid item md={5} lg={8} sm={12}>
              <Box px={{ sm: 0, md: 2 }}>
                <Typography align="justify" mt={3} gutterBottom>
                  {data?.description}
                </Typography>
                <Typography align="justify" mt={2} gutterBottom>
                  {data?.effects}
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

export default Spirit;
