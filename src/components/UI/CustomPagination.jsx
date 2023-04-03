
import { Box, Grid, Pagination, Stack } from "@mui/material";

const CustomPagination = ({ count, page, setPage }) => {
  const handleChange = (event, value) => {
    setPage(value - 1);
  };

  return (
    <Stack alignItems="center" justifyContent="center">
      <Pagination
        count={Math.ceil(count / 20)}
        page={page + 1}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
};

export default CustomPagination;
