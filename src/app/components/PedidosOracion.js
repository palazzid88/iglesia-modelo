// src/app/components/PedidosDeOracion.jsx
import { client } from "@/lib/sanity";
import SeccionPedidos from "./SeccionPedidos";

export default async function PedidosDeOracion() {
  // Fetch de pedidos habilitados
  const pedidos = await client.fetch(`
    *[_type == "pedidoDeOracion" && enabled == true] | order(fechaEnvio desc){
      _id,
      nombre,
      descripcion,
      fechaEnvio
    }
  `);
  
  console.log("pedidos", pedidos);
  

  return <SeccionPedidos pedidos={pedidos} />;
}
