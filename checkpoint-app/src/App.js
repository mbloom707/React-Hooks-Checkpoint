import React, { useEffect, useState, createContext } from 'react';
import Main from './components/Main.js';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const ProductList = createContext();
export const FetchURL = createContext();

// async function getProductList() {
//   let url = await fetch('http://52.26.193.201:3000/products/list');
//   ProductList = await res.json();
// }
const url = 'http://52.26.193.201:3000/';

export default function App() {
  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState();

  const FetchURL = {
    productNames,
    productDetails,
    productStyles
  }

  // useEffect(() => {
  //   getProductList();a
  // }, []);

  useEffect(() => {
    async function fetchData() {
      let product = await productNames()
      setProducts(product)
    }
    fetchData()
  }, [])

  async function productNames() {
    let response = await fetch(`${url}products/list`)
    let data = await response.json()
    return data
  }

  async function productStyles(productId) {
    let response = await fetch(`${url}products/${productId}/styles`)
    let data = await response.json()
    return data
  }

  async function productDetails(productId) {
    let response = await fetch(`${url}products/${productId}`)
    let data = await response.json()
    return data
  }

  return (
    <FetchURL.Provider value={FetchURL}>
      <Box sx={{ flexgrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Hook Checkpoint
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Main products={products} />
      </div>
      </FetchURL.Provider>
  );
}