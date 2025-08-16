// src/app/components/PedidosOracion.js
export default function PedidosOracion() {
  // Pedidos de ejemplo
  const pedidos = [
    { nombre: 'Juan', mensaje: 'Por la salud de mi familia.' },
    { nombre: 'María', mensaje: 'Para encontrar trabajo.' },
    { nombre: 'Carlos', mensaje: 'Por fortaleza espiritual.' },
  ];

  return (
    <section style={{ padding: '80px 20px', background: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>Pedidos de Oración</h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {pedidos.map((pedido, index) => (
          <div
            key={index}
            style={{
              background: '#fff',
              padding: '20px',
              width: '250px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              borderRadius: '8px',
            }}
          >
            <h3 style={{ marginBottom: '10px' }}>{pedido.nombre}</h3>
            <p>{pedido.mensaje}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
