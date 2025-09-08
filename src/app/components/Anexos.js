
import { getAnexos } from "@/lib/queries";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const iconos = {
  facebook: <FaFacebook className="text-blue-600" />,
  whatsapp: <FaWhatsapp className="text-green-500" />,
  instagram: <FaInstagram className="text-pink-500" />,
  tiktok: <FaTiktok className="text-black" />,
  youtube: <FaYoutube className="text-red-600" />,
};

export default async function Anexos() {
    const anexos = await getAnexos();

  if (!anexos || anexos.length === 0) {
    return <p className="text-center text-gray-500">No hay anexos cargados.</p>;
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Iglesias Anexas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {anexos.map((anexo, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{anexo.nombre}</h3>
            <p className="text-gray-600">{anexo.direccion}</p>
            <p className="text-gray-600">{anexo.ciudad}</p>
            <p className="text-gray-600 font-medium mt-2">📞 {anexo.telefono}</p>

            <div className="flex gap-4 mt-4">
              {anexo.redes?.map((red, i) => (
                <a
                  key={i}
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-110 transition"
                >
                  {iconos[red.tipo]}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
