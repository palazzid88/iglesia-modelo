import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";

export default async function Noticias() {
  // Traemos las noticias habilitadas de Sanity
  const noticias = await client.fetch(`
    *[_type == "noticia" && enabled == true] | order(_createdAt desc){
      _id,
      titulo,
      descripcion,
      imagen
    }
  `);

  return (
    <section className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Noticias</h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {noticias.map(noticia => (
          <div
            key={noticia._id}
            className="bg-gray-50 p-5 w-72 shadow-lg rounded-lg"
          >
            {noticia.imagen && (
            <Image
                src={urlFor(noticia.imagen).width(300).url()}
                alt={noticia.titulo}
                width={300}
                height={176} // más o menos proporcional a h-44 (11rem)
                className="w-full h-44 object-cover rounded-md mb-4"
              />

            )}
            <h3 className="text-xl font-semibold mb-2">{noticia.titulo}</h3>
            <p className="text-gray-700">{noticia.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
