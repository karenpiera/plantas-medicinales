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
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:cursor-pointer hover:scale-105 transform transition-transform duration-300 dark:bg-gray-800 dark:border-gray-700">
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
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <a
            href={`/products/${product.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ver Más
          </a>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
