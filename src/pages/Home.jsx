import { Box, Grid } from "@mui/material";
import images from "../assets";
import { GridCard } from "../components/UI";

const playerItems = [
  { name: "Ammos", path: "/ammos", image: images.ammosImg },
  { name: "Armors", path: "/armors", image: images.armorsImg },
  { name: "Ashes of War", path: "/ashes", image: images.ashesImg },
  { name: "Bosses", path: "/bosses", image: images.bossesImg },
  { name: "Builds", path: "/builds", image: images.buildsImg },
  { name: "Classes", path: "/classes", image: images.classesImg },
  { name: "Creatures", path: "/creatures", image: images.creaturesImg },
  {
    name: "Incantations",
    path: "/incantations",
    image: images.incantationsImg,
  },
  { name: "Items", path: "/items", image: images.itemsImg },
  { name: "Locations", path: "/locations", image: images.locationsImg },
  { name: "NPCs", path: "/npcs", image: images.npcsImg },
  { name: "Shields", path: "/shields", image: images.shieldsImg },
  { name: "Sorceries", path: "/sorceries", image: images.sorceriesImg },
  { name: "Spirits", path: "/spirits", image: images.spiritsImg },
  { name: "Talismans", path: "/talismans", image: images.talismansImg },
  { name: "Weapons", path: "/weapons", image: images.weaponsImg },
];

const Home = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        px={{xs: "2rem", md: "5rem"}}
        display="flex"
        alignItems="stretch"
        justifyContent="center"
      >
        {playerItems.map((item) => (
          <GridCard key={item.name} item={item} path={item.path} />
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
