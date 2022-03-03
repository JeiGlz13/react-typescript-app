import { ProductInterface } from "../interfaces/ProductInterfaces";

const product1: ProductInterface = {
    id: '1',
    title: 'Coffee Mug',
    desc: 'Coffee is darkly colored, bitter, slightly acidic and has a stimulating effect in humans',
    img: './coffee-mug.png'
  }
  
  const product2: ProductInterface = {
    id: '2',
    title: 'Coffee Meme',
    desc: 'Coffee cup made of glazed ceramic, and have a single handle for portability',
    img: './coffee-mug2.png'
  }
  export const products: ProductInterface[] =[product1, product2];