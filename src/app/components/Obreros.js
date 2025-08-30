// src/components/Obreros.js
import { client, urlFor } from "@/lib/sanity";

async function getObreros() {
  const query = `*[_type == "obrero"] | order(orden asc){
    _id,
    nombre,
    rol,
    orden,
    imagen
  }`;
  return await client.fetch(query);
}

export default async function Obreros() {
  const obreros = await getObreros();
  // console.log("obreros", obreros);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Nuestro equipo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {obreros.map((obrero) => (
            <div
              key={obrero._id}
              className="bg-white rounded-xl shadow p-6 text-center"
            >
              {obrero.imagen && (
                <img
                  src={urlFor(obrero.imagen).width(300).height(300).url()}
                  alt={obrero.nombre}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
              )}
              <h3 className="text-xl font-semibold">{obrero.nombre}</h3>
              <p className="text-gray-600">{obrero.rol}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
