// src/app/components/Eventos.jsx
import { client } from "@/lib/sanity";

export default async function Eventos() {
  const eventos = await client.fetch(`
    *[_type == "evento"] {
      _id,
      tipo,
      dia,
      horaInicio,
      horaFin,
      suspendido
    }
  `);

  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-12">Agenda Semanal</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {eventos.map((evento) => (
          <div
            key={evento._id}
            className="relative bg-white p-6 w-72 shadow-md rounded-lg flex flex-col items-center"
          >
            {evento.suspendido && (
              <span className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                SUSPENDIDO
              </span>
            )}
            <h3 className="text-xl font-semibold mb-2">{evento.tipo}</h3>
            <p className="text-gray-600 mb-1">
              <strong>Día:</strong> {evento.dia}
            </p>
            <p className="text-gray-600">
              <strong>Horario:</strong> {evento.horaInicio} - {evento.horaFin}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
