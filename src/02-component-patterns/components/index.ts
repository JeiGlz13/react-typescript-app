import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductHOCInterface } from '../interfaces/ProductInterfaces';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: ProductHOCInterface = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
})