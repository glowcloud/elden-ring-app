import { useState } from "react";
import { Box, Toolbar } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Header setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Box width="100%" py="2rem">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
