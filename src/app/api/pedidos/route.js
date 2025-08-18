// src/app/api/pedidos/route.js
import { serverClient } from '@/lib/sanity'

export async function POST(req) {
  try {
    const body = await req.json()
    console.log('Payload recibido:', body)

    const { nombre, descripcion } = body

    if (!nombre || !descripcion) {
      return new Response(
        JSON.stringify({ message: 'Nombre y descripción son requeridos' }),
        { status: 400 }
      )
    }

    const doc = {
      _type: 'pedidoDeOracion',
      nombre,
      descripcion,
      telefono: body.telefono || '',
      esMiembro: body.esMiembro || false,
      otraIglesia: body.otraIglesia || false,
      ningunaIglesia: body.ningunaIglesia || false,
      fechaEnvio: new Date().toISOString(),
      enabled: false
    }

    const result = await serverClient.create(doc) // 👈 usamos el serverClient
    console.log('Documento creado en Sanity:', result)

    return new Response(
      JSON.stringify({ message: 'Pedido creado', id: result._id }),
      { status: 201 }
    )
  } catch (error) {
    console.error('Error en POST /pedidos:', error)
    return new Response(
      JSON.stringify({ message: 'Error creando el pedido', error: error.message }),
      { status: 500 }
    )
  }
}
