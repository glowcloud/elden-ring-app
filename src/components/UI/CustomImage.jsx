import Box from "@mui/material/Box";

const CustomImage = ({ name, image }) => {
  return (
    <Box
      my={2}
      component="img"
      sx={{
        objectFit: "contain",
        maxHeight: { xs: "300px", sm: "400px", md: "400px" },
        maxWidth: "400px",
      }}
      alt={name}
      src={image}
    />
  );
};

export default CustomImage;
