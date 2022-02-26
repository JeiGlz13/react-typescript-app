import { useContext } from "react";

import noImage from '../assets/no-image.jpg';
import { ProductContext } from "./ProductCard";

export const ProductImage = ({img = ''}):JSX.Element =>{
    const {product} = useContext(ProductContext);

    let imgToShow: string;

    if (img) {
        imgToShow = img;
    }else if(product.img){
        imgToShow = product.img
    }else{
        imgToShow = noImage
    }
    

    return(
        <div className="lg:relative w-7/12 px-4 py-4 flex">
            <img src= {imgToShow} alt="Product" className="w-full rounded-3xl" />
        </div>
    )
}