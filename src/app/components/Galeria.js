export default function Galeria() {
  // Fotos de ejemplo (colocá las imágenes en /public/images/)
  const fotos = [
    '/images/foto1.jpg',
    '/images/foto2.jpg',
    '/images/foto3.jpg',
    '/images/foto4.jpg',
  ];

  return (
    <section style={{ padding: '80px 20px', background: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>Galería de Fotos</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {fotos.map((foto, index) => (
          <img
            key={index}
            src={foto}
            alt={`Foto ${index + 1}`}
            style={{ width: '250px', height: '180px', objectFit: 'cover', borderRadius: '8px' }}
          />
        ))}
      </div>
    </section>
  );
}
