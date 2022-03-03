import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from '../data/product';
import { useShoppingCart } from '../hooks/useShoppingCart';

  export const ShoppingPage = () => {
    const {shoppingCart, onProductCountChange} = useShoppingCart();

    return (
    <div className="font-Poppins">
      <h1 className="text-xl mb-2">Shopping Store</h1>

      <hr className="w-10/12 h-0.5 bg-white" />

      <div className="w-full flex flex-row justify-around flex-wrap pr-36">
        {
          products.map(product=>(
            <ProductCard key={product.id} product={product} 
            onChange = {(evento) => onProductCountChange(evento)}
            value = {shoppingCart[product.id]?shoppingCart[product.id]?.count:0} >
              <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row justify-center ">
                <ProductImage  />
                <ProductTitle  />
              </div>
              <ProductButtons />
            </ProductCard>
          ))
        }
      </div>

      <div className="fixed top-0 right-2" >
        {
          Object.values(shoppingCart).map((product)=>(
                  <ProductCard key={product.id} product={product} style = {{
                    marginTop: '5px',
                    marginRight: '0px',
                    padding: '1%',
                    width: '9rem',
                    borderRadius: '0.6rem'
                  }} 
                  value = {product.count}
                  onChange = {onProductCountChange} >
                      <ProductImage style={{
                        width: '100%',
                        padding: '4%'
                      }} />
                      <ProductButtons className="text-sm" style={{
                        marginTop: '0px',
                        padding: '0.1rem 1rem'
                      }}
                      styleButtons = {{
                        width:'30%',
                        fontSize: '1rem',
                        padding: '0.3rem 0'
                      }}
                      styleDiv = {{
                        fontSize: '1rem'
                      }} />
                    </ProductCard>
            )
          )
        }
      </div>
    </div>
  )
}