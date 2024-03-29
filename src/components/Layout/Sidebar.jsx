import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "Ammos", path: "/ammos" },
  { name: "Armors", path: "/armors" },
  { name: "Ashes of War", path: "/ashes" },
  { name: "Bosses", path: "/bosses" },
  { name: "Builds", path: "/builds" },
  { name: "Classes", path: "/classes" },
  { name: "Creatures", path: "/creatures" },
  {
    name: "Incantations",
    path: "/incantations",
  },
  { name: "Items", path: "/items" },
  { name: "Locations", path: "/locations" },
  { name: "NPCs", path: "/npcs" },
  { name: "Shields", path: "/shields" },
  { name: "Sorceries", path: "/sorceries" },
  { name: "Spirits", path: "/spirits" },
  { name: "Talismans", path: "/talismans" },
  { name: "Weapons", path: "/weapons" },
];

const Sidebar = ({ isOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => setIsSidebarOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: "200px",
          mt: 8,
        },
      }}
    >
      <Box w={200} onClick={() => setIsSidebarOpen(false)}>
        <List>
          {pages.map((page) => (
            <ListItem key={page.name} disablePadding>
              <ListItemButton onClick={() => navigate(page.path)}>
                <ListItemText primary={page.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
