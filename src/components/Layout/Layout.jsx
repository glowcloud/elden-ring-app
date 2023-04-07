import { useState } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  padding: "1rem",
}));

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      {/* <StyledPage> */}
      <Box width="100%" py="2rem">
        <Offset />
        {children}
      </Box>
      {/* </StyledPage> */}
    </Box>
  );
};

export default Layout;
