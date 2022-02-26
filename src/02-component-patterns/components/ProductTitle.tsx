import { useContext } from "react";
import { TitleInterface } from "../interfaces/ProductInterfaces";
import { ProductContext } from "./ProductCard";

export const ProductTitle = ({title, desc, classNameTitle, classNameDesc, styleDesc, styleTitle}: TitleInterface): JSX.Element =>{
    const {product} = useContext(ProductContext);

    return (
        <div className="lg:w-5/12  flex flex-col justify-center mt-2 pb-8 lg:pb-0">
            <h1 className={`text-gray-800 text-lg lg:text-2xl font-semibold ${classNameTitle}`} style = {styleTitle} >
                {title? title : product.title}
            </h1>

            <p className={`text-base leading-normal text-gray-600  mt-2 ${classNameDesc}`} style = {styleDesc} >
                {desc? desc :product.desc}
            </p>
        </div>
    )
}