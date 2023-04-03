import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Menu, Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

const Header = ({ setIsSidebarOpen }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <AppBar sx={{ backgroundColor: "#323d49" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => {
            setIsSidebarOpen(true);
          }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Elden Ring Companion
        </Typography>
        {user && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              navigate("/builds/create");
            }}
          >
            <Add />
          </IconButton>
        )}
        {!user && (
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        )}
        {user && (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
