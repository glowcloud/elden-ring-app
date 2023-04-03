import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const GridCard = ({ item, path }) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} display="flex">
      <CardActionArea
        onClick={() => navigate(item.id ? `${path}/${item.id}` : path)}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            image={item?.image}
            alt={item.name}
            sx={{
              objectFit: "contain",
              backgroundColor: "#485461",
              backgroundImage:
                "linear-gradient(315deg, #485461 0%, #28313b 74%)",
              height: "305px",
            }}
          />
          <Divider />
          <CardContent
            sx={{
              pb: 0,
              display: "flex",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography gutterBottom variant="h6" textAlign="center">
              {item.name}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default GridCard;
