import { Typography, Breadcrumbs, Link } from "@mui/material";

const CustomBreadcrumbs = ({ category, name }) => {
  return (
    <Breadcrumbs>
      <Link underline="hover" href="/">
        HOME
      </Link>

      {name ? (
        <Link underline="hover" href={`/${category}`}>
          {category.toUpperCase()}
        </Link>
      ) : (
        <Typography color="text.primary">{category.toUpperCase()}</Typography>
      )}

      {name && <Typography color="text.primary">{name}</Typography>}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
