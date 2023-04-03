import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Grid,
  CircularProgress,
} from "@mui/material";

import { CustomBreadcrumbs, CustomPagination } from "../../components/UI";
import useFetch from "../../hooks/useFetch";

const Builds = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const { data: items, count, isLoading } = useFetch(`builds`, null, page);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <Box>
      <Grid container spacing={2} marginLeft={0} px="5rem">
        {/* BREADCRUMBS */}
        <Grid item xs={12}>
          <CustomBreadcrumbs category={"builds"} />
        </Grid>

        {/* SEARCH HERE */}


        {!isLoading && (
          <Grid item xs={12}>
            <List sx={{ mx: 2 }}>
              {items?.length > 0 &&
                items.map((item) => (
                  <ListItem key={item._id}>
                    <Paper elevation={6} sx={{ width: "100%" }}>
                      <ListItemButton
                        onClick={() => navigate(`/builds/${item._id}`)}
                      >
                        <ListItemText primary={item.buildName} />
                      </ListItemButton>
                    </Paper>
                  </ListItem>
                ))}
            </List>
          </Grid>
        )}

        {isLoading && (
          <Box
            my={5}
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress />
          </Box>
        )}

        {/* PAGINATION */}
        <Grid item xs={12}>
          <CustomPagination count={count} page={page} setPage={setPage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Builds;
