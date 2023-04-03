import { useState, useEffect } from "react";
import { Box, CircularProgress, Grid, Pagination, Stack } from "@mui/material";

import { useLocation } from "react-router-dom";

import {
  CustomBreadcrumbs,
  CustomPagination,
  GridCard,
} from "../components/UI";

import useFetch from "../hooks/useFetch";

const Category = () => {
  const [page, setPage] = useState(0);

  const location = useLocation();

  const {
    data: items,
    count,
    isLoading,
  } = useFetch(location.pathname.replace("/", "") + `?page=${page}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location, page]);

  return (
    <Box>
      <Grid
        container
        spacing={2}
        marginLeft={0}
        px="5rem"
        display="flex"
        alignItems="stretch"
        justifyContent="center"
      >
        {/* BREADCRUMBS */}
        <Grid item xs={12}>
          <CustomBreadcrumbs category={location.pathname.replace("/", "")} />
        </Grid>

        {/* ITEMS */}
        {!isLoading &&
          items
            ?.sort((a, b) => a.name.localeCompare(b.name))
            ?.map((item) => (
              <GridCard key={item.id} item={item} path={location.pathname} />
            ))}

        {isLoading && (
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Grid>
        )}

        {/* PAGINATION */}
        <Grid item xs={12}>
          <CustomPagination count={count} page={page} setPage={setPage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Category;
