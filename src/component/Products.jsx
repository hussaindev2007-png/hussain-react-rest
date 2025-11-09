import ProductCard from "./ProductCard";


function Products({ products = [] }) {
  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      <div>
        
      </div>
        
    </div>
  );
}

export default Products;


