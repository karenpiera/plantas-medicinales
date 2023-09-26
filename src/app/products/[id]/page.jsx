/* eslint-disable @next/next/no-img-element */
import { conn } from "../../../libs/mysql";
import Buttons from "./Buttons";

async function loadProduct(productId) {
  const [data] = await conn.query("SELECT * FROM product WHERE id = ?", [
    productId,
  ]);
  return data;
}

async function ProductPage({ params }) {
  const product = await loadProduct(params.id);

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-lg">
            <span className="font-semibold text-blue-500">
              Nombre Cientifico:
            </span>{" "}
            {product.nombreCientifico}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-500">Zona:</span>{" "}
            {product.zona}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-500">Uso Medicinal:</span>{" "}
            {product.usoMedicinal}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-500">
              Contraindicación:
            </span>{" "}
            {product.contraindicacion}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-500">Afecciones:</span>{" "}
            {product.afecciones}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-500">Descripción:</span>{" "}
            {product.description}
          </p>
        </div>
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <Buttons productId={product.id} />
    </div>
  );
}

export default ProductPage;
