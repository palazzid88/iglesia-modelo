import { client, urlFor } from "@/lib/sanity";

async function getGaleria() {
  const query = `*[_type == "galeria"]{
    imagenes
  }`;
  return await client.fetch(query);
}

export default async function Galeria() {
  const data = await getGaleria();

  // Aplanar todas las imágenes de todos los documentos
  const imagenes = data.flatMap(doc => doc.imagenes || []);

  if (imagenes.length === 0) {
    return <p className="text-center text-gray-500">No hay imágenes cargadas.</p>;
  }

  return (
    <section className="py-16 px-4 bg-white text-center">
      <div className="flex overflow-x-auto gap-4 px-2 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {imagenes.map((img, index) => (
          <img
            key={index}
            src={urlFor(img).width(400).height(300).url()}
            alt={`Foto ${index + 1}`}
            className="w-80 h-56 object-cover rounded-lg flex-shrink-0 shadow-md"
          />
        ))}
      </div>
    </section>
  );
}
