import { conn } from "../../libs/mysql";
import ProductCard from "../../components/ProductCard";
import axios from "axios";

async function loadProducts() {
  // const { data } = await axios.get(process.env.BASE_URL + "/api/products");
  // console.log(data);
  // return data;
  const products = await conn.query("SELECT * FROM product");
  return products;
}

async function ProductPage() {
  const products = await loadProducts();
  return (
    <div className="bg--400 p-8 bg-opacity-75">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
