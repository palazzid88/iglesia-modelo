'use client'

import { useState } from "react";

export default function FormPedidos() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [esMiembro, setEsMiembro] = useState(false);
  const [otraIglesia, setOtraIglesia] = useState(false);
  const [ningunaIglesia, setNingunaIglesia] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const res = await fetch("/api/pedidos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, descripcion, telefono, esMiembro, otraIglesia, ningunaIglesia })
    });

    if (res.ok) {
      setNombre("");
      setDescripcion("");
      setTelefono("");
      setEsMiembro(false);
      setOtraIglesia(false);
      setNingunaIglesia(false);
      setSuccess(true);
    } else {
      alert("Error al enviar el pedido");
    }

    setLoading(false);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-center">Envía tu Pedido de Oración</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <textarea
          placeholder="Tu pedido de oración"
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
          className="border border-gray-300 p-3 rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="text"
          placeholder="Teléfono (opcional)"
          value={telefono}
          onChange={e => setTelefono(e.target.value)}
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* Sección de checks */}
        <div className="flex flex-col gap-2 mt-2">
          <label className="inline-flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={esMiembro} 
              onChange={e => setEsMiembro(e.target.checked)} 
              className="w-4 h-4 accent-yellow-500"
            />
            Soy miembro de la iglesia
          </label>
          <label className="inline-flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={otraIglesia} 
              onChange={e => setOtraIglesia(e.target.checked)} 
              className="w-4 h-4 accent-yellow-500"
            />
            Me congrego en otra iglesia
          </label>
          <label className="inline-flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={ningunaIglesia} 
              onChange={e => setNingunaIglesia(e.target.checked)} 
              className="w-4 h-4 accent-yellow-500"
            />
            No concurro a ninguna iglesia
          </label>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="bg-yellow-500 text-white p-3 rounded hover:bg-yellow-600 transition font-semibold mt-2"
        >
          {loading ? "Enviando..." : "Enviar Pedido"}
        </button>
        {success && <p className="text-green-600 text-center mt-2">Pedido enviado correctamente!</p>}
      </form>
    </div>
  );
}
