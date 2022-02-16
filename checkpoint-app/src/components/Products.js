import { useContext, useEffect, useState } from 'react';
import { FetchURL } from '../App';
import {
  CardActionArea,
  CardMedia,
  IconButton,
  Skeleton,
  Grid,
  CircularProgress,
  Backdrop,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Products({ product }) {
  const [details, setDetails] = useState();
  const [img, setImg] = useState();
  const [open, setOpen] = useState(false);
  const GrabURL = useContext(FetchURL);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    GrabURL.productDetails(product.id).then(setDetails)
    GrabURL.prodcutStyle(product.id).then(style => {
      setImg(style?.results[0]?.photos[0]?.thumbnail_url)
    })
  }, [])

  return (
    <Grid
      container
      spacing={1}
      direction="column"
      justify="center"
    >
      <Card>
        <CardActionArea onClick={handleToggle}>
          <CardMedia
            component="img"
            image={img}
            alt={details}
          />
          <CardContent>
            <Typography variant="h4" component="div">
              {product.name}
            </Typography>
            <Typography variant="h5" component="div">
              $ {product.default_price}
            </Typography>
            <Typography variant="body1" component="div">
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}