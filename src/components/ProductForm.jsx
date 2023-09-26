/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    zona: "",
    usoMedicinal: "",
    contraindicacion: "",
    afecciones: "",
    description: "",
    image: "",
    nombreCientifico: "",
  });

  const form = useRef(null);
  const router = useRouter();
  const params = useParams();

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (params.id) {
      axios.get("/api/products/" + params.id).then((res) => {
        setProduct({
          name: res.data.name,
          zona: res.data.zona,
          usoMedicinal: res.data.usoMedicinal,
          contraindicacion: res.data.contraindicacion,
          afecciones: res.data.afecciones,
          description: res.data.description,
          nombreCientifico: res.data.nombreCientifico,
        });
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!params.id) {
      const res = await axios.post("/api/products", product);
    } else {
      const res = await axios.put("/api/products/" + params.id, product);
    }
    form.current.reset();
    router.refresh();
    router.push("/products");
  };

  return (
    <form
      className="bg-white shadow-md rounded-md px-8 pt-4 pb-4 mb-4"
      onSubmit={handleSubmit}
      ref={form}>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2">
            nombre
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter Name"
            onChange={handleChange}
            value={product.name}
            className="shadow appearance-none border rounded w-full py-2 px-3"
            autoFocus
          />
        </div>
        <div>
          <label
            htmlFor="nombreCientifico"
            className="block text-gray-700 text-sm font-bold mb-2">
            Nombre Científico
          </label>
          <input
            name="nombreCientifico"
            type="text"
            placeholder="Enter scientific name"
            onChange={handleChange}
            value={product.nombreCientifico}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>
        <div>
          <label
            htmlFor="zona"
            className="block text-gray-700 text-sm font-bold mb-2">
            zona
          </label>
          <input
            name="zona"
            type="text"
            placeholder="Enter product zona"
            onChange={handleChange}
            value={product.zona}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>
        <div>
          <label
            htmlFor="usoMedicinal"
            className="block text-gray-700 text-sm font-bold mb-2">
            UsoMedicinal
          </label>
          <input
            name="usoMedicinal"
            type="text"
            placeholder="Enter usoMedicinal"
            onChange={handleChange}
            value={product.usoMedicinal}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>
        <div>
          <label
            htmlFor="contraindicacion"
            className="block text-gray-700 text-sm font-bold mb-2">
            contraindicacion
          </label>
          <input
            name="contraindicacion"
            type="text"
            placeholder="Enter product contraindicacion"
            onChange={handleChange}
            value={product.contraindicacion}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>
        <div>
          <label
            htmlFor="afecciones"
            className="block text-gray-700 text-sm font-bold mb-2">
            afecciones
          </label>
          <input
            name="afecciones"
            type="text"
            placeholder="Enter afecciones"
            onChange={handleChange}
            value={product.afecciones}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            rows={3}
            placeholder="Enter description"
            onChange={handleChange}
            value={product.description}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input
            name="image"
            type="text"
            placeholder="Enter image URL"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
          {params.id ? "Update Product" : "Create Product"}
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
