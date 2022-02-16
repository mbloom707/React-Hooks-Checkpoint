import Grid from '@mui/material/Grid';
import Products from './Products';

export default function Main({ products }) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {products.map(product => <Products key={product.id} product={product} />)}
        </Grid>
      </Grid>
    </>
  );
}