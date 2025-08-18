// src/app/components/Anuncios.jsx
import { client, urlFor } from "@/lib/sanity";

export default async function Anuncios() {
  const anuncios = await client.fetch(
    `*[_type == "anuncio" && enabled == true] | order(priority desc, startDate desc) {
      _id,
      title,
      subtitle,
      description,
      image,
      link,
      startDate,
      endDate,
      priority
    }`
  );

  return (
<section className="py-16 px-4 bg-gray-50 text-center">
  <h2 className="text-3xl font-bold mb-10">Anuncios Importantes</h2>
  <div className="flex flex-wrap justify-center gap-8">
    {anuncios.map(anuncio => (
      <div
        key={anuncio._id}
        className="bg-white p-6 w-80 shadow-md rounded-xl text-left"
      >
        <h3 className="text-xl font-semibold mb-2">{anuncio.title}</h3>
        {anuncio.image && (
          <img
          src={urlFor(anuncio.image).width(300).url()}
          alt={anuncio.title}
          className="w-full rounded-md mb-4"
          />
        )}
        {anuncio.subtitle && (
          <h4 className="text-gray-600 mb-2">{anuncio.subtitle}</h4>
        )}
        <p className="text-gray-700 mb-4">{anuncio.description}</p>
        {anuncio.link && (
          <a
            href={anuncio.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Consultar
          </a>
        )}
      </div>
    ))}
  </div>
</section>

  );
}
