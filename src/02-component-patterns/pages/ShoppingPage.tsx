import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from '../data/product';

  export const ShoppingPage = () => {
    const product = products[0];
    return (
    <div className="font-Poppins">
      <h1 className="text-xl mb-2">Shopping Store</h1>

      <hr className="w-10/12 h-0.5 bg-white" />

      <div className="w-full flex flex-row justify-around flex-wrap pr-36">
     
            <ProductCard key={product.id} product={product} 
            initialValues = {{
              count: 4,
              maxCount: 10
              }} >
                {
                ({reset, increaseBy, isMaxCountReached, count})=>(
                    <>
                      <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row justify-center ">
                        <ProductImage  />
                        <ProductTitle  />
                      </div>
                      <ProductButtons />

                      <div className="w-full flex flex-row justify-center flex-wrap" >
                        <button onClick={()=>increaseBy(-2)} className = 'text-black font-Poppins text-base border border-solid border-black px-4 py-1 mx-2 my-4 rounded-xl bg-transparent' >-2</button>
                        <button onClick={reset} className = 'text-black font-Poppins text-base border border-solid border-black px-4 py-1 mx-2 my-4 rounded-xl bg-transparent' >Reset</button>
                        {
                          (!isMaxCountReached)&&(<button onClick={()=>increaseBy(2)}
                            className = 'text-black font-Poppins text-base border border-solid border-black px-4 py-1 mx-2 my-4 rounded-xl bg-transparent' >
                              +2
                            </button>)
                        }
                      </div>

                      <h1 className="text-base text-black font-Poppins text-center " >{count}</h1>
                    </>
                  )
                }
            </ProductCard>
       
      </div>

    </div>
  )
}