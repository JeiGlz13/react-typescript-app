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
      <ProductCard product={product}>
        <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row justify-center ">
          <ProductImage />
          <ProductTitle />
        </div>
        <ProductButtons />
      </ProductCard>


      <ProductCard product={product}>
        <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row justify-center ">
          <ProductCard.Image />
          <ProductCard.Title title="cafe" desc="descripcion" />
        </div>
        <ProductCard.Buttons />
      </ProductCard>
    </div>
  </div>
)
