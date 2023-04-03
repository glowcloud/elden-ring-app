import { useNavigate, useParams } from "react-router-dom";

import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  CircularProgress,
} from "@mui/material";

import {
  CustomBreadcrumbs,
  GridCard,
  GridPair,
  CustomTable,
} from "../../components/UI";

import useFetch from "../../hooks/useFetch";
import useDelete from "../../hooks/useDelete";
import { useAuthContext } from "../../hooks/useAuthContext";

const Build = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: build, isLoading } = useFetch(`builds/`, id);
  const { data: isOwner } = useFetch(`builds/${id}/owner`);
  const { handleDelete, isLoading: deleteIsLoading, error } = useDelete();
  const { user } = useAuthContext();

  const deleteHandler = async () => {
    await handleDelete(id, user);

    if (!deleteIsLoading && !error) {
      navigate("/builds");
    }
  };

  return (
    <Box mx={{ md: 10, xs: 2 }} my={2}>
      <CustomBreadcrumbs category="builds" name={build?.buildName} />
      {!isLoading && (
        <Paper>
          {build && (
            <Grid
              container
              spacing={2}
              px={4}
              mt={1}
              flexDirection="row-reverse"
            >
              {/* BUTTONS - SHOW ONLY IF USER LOGGED IN */}
              {user && build.user_id && isOwner && (
                <Grid
                  item
                  xs={6}
                  display="flex"
                  alignItems="center"
                  justifyContent="end"
                >
                  <Button
                    disabled={deleteIsLoading}
                    variant="outlined"
                    onClick={deleteHandler}
                  >
                    DELETE
                  </Button>
                </Grid>
              )}

              {/* NAME */}
              <Grid
                item
                xs={12}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box>
                  <Typography variant="h4" gutterBottom>
                    {build?.buildName}
                  </Typography>
                </Box>
              </Grid>

              {/* STATS */}
              {build && build.stats && (
                <Grid item xs={12}>
                  <Paper elevation={8} sx={{ py: 2, px: { sm: 1, md: 0 } }}>
                    <Typography gutterBottom align="center" variant="h6">
                      Stats
                    </Typography>
                    <Grid
                      container
                      spacing={2}
                      justifyContent="center"
                      alignItems="center"
                      px={2}
                    >
                      <GridCard
                        key={build?.chosenClass?.id}
                        item={build?.chosenClass}
                        path="/classes"
                      />
                      <Grid item lg={3} md={4} xs={12} sm={12}>
                        <CustomTable
                          size="small"
                          data={[
                            { name: "Level", amount: build?.stats["level"] },
                            { name: "Vigor", amount: build?.stats["vigor"] },
                            { name: "Mind", amount: build?.stats["mind"] },
                            {
                              name: "Endurance",
                              amount: build?.stats["endurance"],
                            },
                            {
                              name: "Strength",
                              amount: build?.stats["strength"],
                            },
                            {
                              name: "Dexterity",
                              amount: build?.stats["dexterity"],
                            },
                            {
                              name: "Intelligence",
                              amount: build?.stats["intelligence"],
                            },
                            { name: "Faith", amount: build?.stats["faith"] },
                            { name: "Arcane", amount: build?.stats["arcane"] },
                          ]}
                          name="Stat"
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              )}

              {/* WEAPONS */}
              <Grid item md={12} sm={12} xs={12}>
                {/* RIGHT HAND */}
                {build?.rightWeapons?.filter((item) => item.weapon.type !== "")
                  .length > 0 && (
                  <Box mb={2}>
                    <Paper elevation={8} sx={{ py: 2, px: { sm: 1, md: 0 } }}>
                      <Typography gutterBottom align="center" variant="h6">
                        Right Hand Weapons
                      </Typography>
                      {build?.rightWeapons.map((item, index) => {
                        if (item.weapon.type) {
                          return (
                            <GridPair
                              key={index}
                              item1={item.weapon.item}
                              path1={`/${item.weapon.type}s`}
                              path2={`/ashes`}
                              item2={item.ash}
                            />
                          );
                        }
                      })}
                    </Paper>
                  </Box>
                )}
                {/* LEFT HAND */}
                {build?.leftWeapons?.filter((item) => item.weapon.type !== "")
                  .length > 0 && (
                  <Box mb={2}>
                    <Paper elevation={8} sx={{ py: 2 }}>
                      <Typography gutterBottom align="center" variant="h6">
                        Left Hand Weapons
                      </Typography>
                      {build?.leftWeapons.map((item, index) => {
                        if (item.weapon.type) {
                          return (
                            <GridPair
                              key={index}
                              item1={item.weapon.item}
                              path1={`/${item.weapon.type}s`}
                              path2={`/ashes`}
                              item2={item.ash}
                            />
                          );
                        }
                      })}
                    </Paper>
                  </Box>
                )}
              </Grid>

              {/* AMMOS */}
              {build?.ammos?.filter((item) => item !== null).length > 0 && (
                <Grid item md={12} sm={12} xs={12}>
                  <Box mb={2}>
                    <Paper elevation={8} sx={{ py: 2, px: { sm: 1, md: 0 } }}>
                      <Typography gutterBottom align="center" variant="h6">
                        Ammos
                      </Typography>
                      <Grid
                        container
                        spacing={2}
                        justifyContent="center"
                        alignItems="stretch"
                        px={2}
                      >
                        {build.ammos.map((item) => {
                          {
                            if (item) {
                              return (
                                <GridCard
                                  key={item.id}
                                  item={item}
                                  path="/ammos"
                                />
                              );
                            }
                          }
                        })}
                      </Grid>
                    </Paper>
                  </Box>
                </Grid>
              )}

              {/* TALISMANS */}
              {build?.talismans?.filter((item) => item !== null).length > 0 && (
                <Grid item md={12} sm={12} xs={12}>
                  <Box mb={2}>
                    <Paper elevation={8} sx={{ py: 2, px: { sm: 1, md: 0 } }}>
                      <Typography gutterBottom align="center" variant="h6">
                        Talismans
                      </Typography>
                      <Grid
                        container
                        spacing={2}
                        justifyContent="center"
                        alignItems="stretch"
                        px={2}
                      >
                        {build.talismans.map((item) => {
                          {
                            if (item) {
                              return (
                                <GridCard
                                  key={item.id}
                                  item={item}
                                  path="/talismans"
                                />
                              );
                            }
                          }
                        })}
                      </Grid>
                    </Paper>
                  </Box>
                </Grid>
              )}

              {/* SPELLS */}
              {build?.spells?.filter((item) => item.type !== "").length > 0 && (
                <Grid item md={12} sm={12} xs={12}>
                  <Box mb={2}>
                    <Paper elevation={8} sx={{ py: 2, px: { sm: 1, md: 0 } }}>
                      <Typography gutterBottom align="center" variant="h6">
                        Spells
                      </Typography>
                      <Grid
                        container
                        spacing={2}
                        justifyContent="center"
                        alignItems="stretch"
                        px={2}
                      >
                        {build?.spells.map((item, index) => {
                          if (item.type) {
                            return (
                              <GridCard
                                key={index}
                                item={item.item}
                                path={
                                  item.type === "sorcery"
                                    ? "/sorceries"
                                    : "/incantations"
                                }
                              />
                            );
                          }
                        })}
                      </Grid>
                    </Paper>
                  </Box>
                </Grid>
              )}

              {/* ITEMS */}
              {build?.ammos?.filter((item) => item !== null).length > 0 && (
                <Grid item md={12} sm={12} xs={12}>
                  <Box mb={2}>
                    <Paper elevation={8} sx={{ py: 2, px: { sm: 1, md: 0 } }}>
                      <Typography gutterBottom align="center" variant="h6">
                        Items
                      </Typography>
                      <Grid
                        container
                        spacing={2}
                        justifyContent="center"
                        alignItems="stretch"
                        px={2}
                      >
                        {build.items.map((item) => {
                          {
                            if (item) {
                              return (
                                <GridCard
                                  key={item.id}
                                  item={item}
                                  path="/items"
                                />
                              );
                            }
                          }
                        })}
                      </Grid>
                    </Paper>
                  </Box>
                </Grid>
              )}
            </Grid>
          )}
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

export default Build;
