// src/app/components/VersiculoDelDia.jsx
import { client } from "@/lib/sanity"

export default async function VersiculoDelDia() {
  // Definimos los días de la semana según JavaScript (0 = domingo)
  const dias = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
  const today = dias[new Date().getDay()];

  // Query a Sanity para traer solo el versículo habilitado del día de la semana actual
  const query = `*[_type == "versiculo" && diaSemana == $today && habilitado == true][0]{
    texto,
    referencia,
    diaSemana
  }`;

  const versiculo = await client.fetch(query, { today });
  console.log("versiculo", versiculo);
  

  if (!versiculo) {
    return (
      <p className="p-4 text-center text-gray-500">No hay versículo para hoy.</p>
    );
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg text-center max-w-xl mx-auto">
      <p className="text-lg italic mb-2">"{versiculo.texto}</p>
      <p className="font-semibold">{versiculo.referencia}</p>
    </div>
  );
}
