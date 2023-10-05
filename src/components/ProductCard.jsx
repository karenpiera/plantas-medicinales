/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function ProductCard({ product }) {
  const {
    name,
    zona,
    usoMedicinal,
    contraindicacion,
    afecciones,
    description,
    image,
  } = product;

  return (
    <Link href={`/products/${product.id}`}>
      <div className="max-w-sm bg-gray-100 bg-opacity-75 border-4 border-blue-500/50 rounded-lg shadow-md hover:cursor-pointer hover:scale-105 transform transition-transform duration-300 dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg object-cover w-full h-48"
            src={image}
            alt={name}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-950 dark:text-gray-400">
            {description}
          </p>
          <Link
            href={`/products/${product.id}`}
            class="inline-block rounded-full px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-blue-500 shadow-[0_4px_9px_-4px_#0077cc] transition duration-150 ease-in-out hover:bg-blue-100 hover:shadow-[0_8px_9px_-4px_rgba(0,119,204,1.2),0_4px_18px_0_rgba(0,119,204,1.2)] focus:bg-blue-100 focus:shadow-[0_8px_9px_-4px_rgba(0,119,204,1.2),0_4px_18px_0_rgba(0,119,204,1.2)] focus:outline-none focus:ring-0 active:bg-blue-100 active:shadow-[0_8px_9px_-4px_rgba(0,77,128,1.2),0_4px_18px_0_rgba(0,119,204,1.2)] dark:shadow-[0_4px_9px_-4px_rgba(0,77,128,1.2)] dark:hover:shadow-[0_8px_9px_-4px_rgba(0,77,128,1.2),0_4px_18px_0_rgba(0,17,34,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(0,77,128,1.2),0_4px_18px_0_rgba(0,17,34,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(0,77,128,1.2),0_4px_18px_0_rgba(0,17,34,0.1)]">
            Ver Más
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
