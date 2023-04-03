import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Divider,
  CircularProgress,
} from "@mui/material";

import {
  CustomBreadcrumbs,
  CustomTable,
  CustomImage,
} from "../../components/UI";
import useFetch from "../../hooks/useFetch";

const CharClass = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`classes/${id}`);

  return (
    <Box mx={{ md: 10, xs: 2 }} my={2}>
      <CustomBreadcrumbs category="classes" name={data?.name} />

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
                  {data?.stats && (
                    <Box px={2}>
                      <CustomTable
                        data={[
                          { name: "Level", amount: data.stats["level"] },
                          { name: "Vigor", amount: data.stats["vigor"] },
                          { name: "Mind", amount: data.stats["mind"] },
                          {
                            name: "Endurance",
                            amount: data.stats["endurance"],
                          },
                          { name: "Strength", amount: data.stats["strength"] },
                          {
                            name: "Dexterity",
                            amount: data.stats["dexterity"],
                          },
                          {
                            name: "Intelligence",
                            amount: data.stats["intelligence"],
                          },
                          { name: "Faith", amount: data.stats["faith"] },
                          { name: "Arcane", amount: data.stats["arcane"] },
                        ]}
                        name="Stat"
                      />
                    </Box>
                  )}
                </Box>
              </Paper>
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

export default CharClass;
