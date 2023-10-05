/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
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
    <div className="bg-gray-200 text-black  bg-opacity-75 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-lg">
            <span className="font-semibold text-blue-800">
              Nombre Cientifico:
            </span>{" "}
            {product.nombreCientifico}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-800">Zona:</span>{" "}
            {product.zona}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-800">Uso Medicinal:</span>{" "}
            {product.usoMedicinal}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-800">
              Contraindicación:
            </span>{" "}
            {product.contraindicacion}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-800">Afecciones:</span>{" "}
            {product.afecciones}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-800">Descripción:</span>{" "}
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
      <br />
      <Link
        href="/products"
        class="inline-block rounded-full px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-blue-800 shadow-[0_4px_9px_-4px_#0077cc] transition duration-150 ease-in-out hover:bg-blue-100 hover:shadow-[0_8px_9px_-4px_rgba(0,119,204,1.2),0_4px_18px_0_rgba(0,119,204,1.2)] focus:bg-blue-100 focus:shadow-[0_8px_9px_-4px_rgba(0,119,204,1.2),0_4px_18px_0_rgba(0,119,204,1.2)] focus:outline-none focus:ring-0 active:bg-blue-100 active:shadow-[0_8px_9px_-4px_rgba(0,77,128,1.2),0_4px_18px_0_rgba(0,119,204,1.2)] dark:shadow-[0_4px_9px_-4px_rgba(0,77,128,1.2)] dark:hover:shadow-[0_8px_9px_-4px_rgba(0,77,128,1.2),0_4px_18px_0_rgba(0,17,34,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(0,77,128,1.2),0_4px_18px_0_rgba(0,17,34,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(0,77,128,1.2),0_4px_18px_0_rgba(0,17,34,0.1)]">
        Atras
      </Link>
    </div>
  );
}

export default ProductPage;
