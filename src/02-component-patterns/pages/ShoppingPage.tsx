import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

const product = {
  id: '1',
  title: 'Coffee Mug',
  desc: 'Coffee is darkly colored, bitter, slightly acidic and has a stimulating effect in humans',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => (
  <div className="font-Poppins">
    <h1 className="text-xl mb-2">Shopping Store</h1>

    <hr className="w-full h-0.5 bg-white" />

    <div className="w-full flex flex-row justify-around flex-wrap">
      <ProductCard product={product} className = 'bg-gray-700' >
        <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row justify-center ">
          <ProductImage className="shadow-xl rounded-md w-11/12" />
          <ProductTitle classNameTitle = "text-gray-200" classNameDesc="text-gray-200" />
        </div>
        <ProductButtons className='text-gray-200' />
      </ProductCard>


      <ProductCard product={product} className = 'bg-gray-700' >
        <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row justify-center ">
          <ProductCard.Image className="shadow-xl rounded-md w-11/12"  />
          <ProductCard.Title 
            title="cafe" 
            desc="descripcion"
            classNameTitle = "text-gray-200" classNameDesc="text-gray-200" />
        </div>
        <ProductCard.Buttons className='text-gray-200' />
      </ProductCard>

      <ProductCard product={product} style = {{
        backgroundColor: '#212121'
      }} >
        <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row justify-center ">
          <ProductImage style={{
            borderRadius: '1rem'
          }} />
          <ProductTitle styleDesc={{
            color: '#f8f8f8'
          }} styleTitle={{
            color: '#f8f8f8'
          }} />
        </div>

        <ProductButtons style={{
          color: '#f8f8f8'
        }} />
      </ProductCard>


      <ProductCard product={product}  >
        <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row justify-center ">
          <ProductCard.Image   />
          <ProductCard.Title 
            title="cafe" 
            desc="descripcion"
             />
        </div>
        <ProductCard.Buttons  />
      </ProductCard>
    </div>
  </div>
)
