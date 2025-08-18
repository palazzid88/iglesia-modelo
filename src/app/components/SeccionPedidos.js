'use client'

import { useEffect, useRef } from "react";

export default function SeccionPedidos({ pedidos = [] }) {
  const chatRef = useRef(null);

  // Scroll automático al último pedido
  useEffect(() => {
    if(chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [pedidos]);

  // Revertimos el orden para que los más recientes queden abajo
  const pedidosOrdenados = [...pedidos].reverse();

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4">Pedidos de Oración</h3>
      <div 
        ref={chatRef} 
        className="w-full h-96 overflow-y-auto border border-gray-300 rounded-2xl bg-gray-50 shadow-inner p-4 flex flex-col gap-3"
      >
        {pedidosOrdenados.length === 0 ? (
          <p className="text-gray-500 text-center mt-4">No hay pedidos habilitados aún.</p>
        ) : (
          pedidosOrdenados.map((p, idx) => {
            const isEven = idx % 2 === 0;
            const bubbleColor = isEven ? "bg-yellow-100" : "bg-yellow-200";
            const align = isEven ? "self-start" : "self-end";
            return (
              <div 
                key={p._id} 
                className={`${align} ${bubbleColor} rounded-2xl p-3 max-w-[75%] shadow-sm`}
              >
                <p className="font-semibold text-sm">{p.nombre}</p>
                <p className="text-gray-700 text-sm">{p.descripcion}</p>
                <p className="text-xs text-gray-500 mt-1 text-right">
                  {new Date(p.fechaEnvio).toLocaleDateString("es-AR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric"
                  })}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
