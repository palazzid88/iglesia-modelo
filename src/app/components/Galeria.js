import { client, urlFor } from "@/lib/sanity";

async function getGaleria() {
  const query = `*[_type == "galeria"]{
    titulo,
    imagenes
  }`;
  return await client.fetch(query);
}

export default async function Galeria() {
  const data = await getGaleria();

  console.log("data", data);
  

  if (!data) {
    return <p className="text-center text-gray-500">No hay imágenes cargadas.</p>;
  }

  return (
    <section className="py-16 px-4 bg-white text-center">
      {/* <h2 className="text-3xl font-bold mb-8">{data.titulo || "Galería de Fotos"}</h2> */}

      <div className="flex overflow-x-auto gap-4 px-2 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {data.imagenes?.map((img, index) => (
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
