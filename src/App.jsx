import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

import {
  Home,
  Builds,
  Build,
  Category,
  Login,
  Ammo,
  Armor,
  Ash,
  Boss,
  CharClass,
  Creature,
  Item,
  Location,
  NPC,
  Shield,
  Spirit,
  Talisman,
  Weapon,
  CreateBuild,
  Spell,
} from "./pages";
import Layout from "./components/Layout/Layout";

import { useAuthContext } from "./hooks/useAuthContext";

const categoryPaths = [
  { path: "/ammos", component: <Ammo /> },
  { path: "/armors", component: <Armor /> },
  { path: "/ashes", component: <Ash /> },
  { path: "/bosses", component: <Boss /> },
  { path: "/classes", component: <CharClass /> },
  { path: "/creatures", component: <Creature /> },
  { path: "/incantations", component: <Spell /> },
  { path: "/items", component: <Item /> },
  { path: "/locations", component: <Location /> },
  { path: "/npcs", component: <NPC /> },
  { path: "/shields", component: <Shield /> },
  { path: "/sorceries", component: <Spell /> },
  { path: "/spirits", component: <Spirit /> },
  { path: "/talismans", component: <Talisman /> },
  { path: "/weapons", component: <Weapon /> },
];

function App() {
  const { user } = useAuthContext();

  const theme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#8d6e63",
      },
      secondary: {
        main: "#f4c430",
      },
      text: {
        primary: "rgba(255, 255, 255, 0.87)",
      },
      background: {
        default: "#282c35",
        paper: "#323d49",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {categoryPaths.map((cat) => (
              <Route key={cat.path} path={cat.path} element={<Category />} />
            ))}
            {categoryPaths.map((cat) => (
              <Route
                key={cat.path}
                path={`${cat.path}/:id`}
                element={cat.component}
              />
            ))}
            <Route path="/builds" element={<Builds />} />
            <Route
              path="/builds/create"
              element={user ? <CreateBuild /> : <Navigate to="/login" />}
            />
            <Route path="/builds/:id" element={<Build />} />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
