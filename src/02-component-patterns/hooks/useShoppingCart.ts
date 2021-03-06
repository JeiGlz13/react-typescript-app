import { useState } from "react";
import { ProductInCartInterface, ProductInterface } from '../interfaces/ProductInterfaces';

export const useShoppingCart = () =>{
    const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCartInterface}>({});

    const onProductCountChange = ({count, product}: {count: number, product: ProductInterface}) => {
          // if (count !== 0) {
          //          setShoppingCart(oldShoppingCart =>{
          //              return {
          //                ...oldShoppingCart,
          //                [product.id]: {
          //                  ...product,
          //                  count
          //                }}
          //            }
          //          )
            
          // } else {
          //   setShoppingCart(oldShoppingCart => {
          //     delete oldShoppingCart[product.id]
          //     return {
          //       ...oldShoppingCart
          //     }
          //   })
          // }

          setShoppingCart(oldShoppingCart =>{
            if (count === 0) {
              const {[product.id]: toDelete, ...rest} = oldShoppingCart;
              return rest;
            }
            return {
              ...oldShoppingCart,
              [product.id]: {
                ...product,
                count
              }}
          })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}