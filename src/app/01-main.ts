import axios from "axios"

import { Product } from "./models/product.model"
;(async () => {
  // Tipado externo solo el resultado
  // async function getProducts(): Promise<Product[]> {
  //   const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  //   return data;
  // }

  // Tipado interno. En caso que la libreria no seporte tipado se puede hacer un cast
  // async function getProducts() {
  //   const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
  //   const data = rta.data as Product[];
  //   return data;
  // }

  // Tipado interno cuando la libreria soperta el tipado
  async function getProducts() {
    const { data } = await axios.get<Product[]>(
      "https://api.escuelajs.co/api/v1/products"
    )

    return data
  }

  const products = await getProducts()
  console.log(products.map((item) => item.title))
})()
