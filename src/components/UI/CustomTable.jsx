import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const CustomTable = ({ name, data, size }) => {
  return (
    <TableContainer component={Paper} align="center" elevation={5}>
      <Table size={size ? size : "medium"} sx={{ maxWidth: 400 }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography>{name}</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography>Amount</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="center">{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
