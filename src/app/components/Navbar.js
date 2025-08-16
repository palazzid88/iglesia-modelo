export default function Navbar() {
  return (
    <nav style={{ padding: '20px', background: '#333', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Iglesia Ejemplo</div>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <li>Inicio</li>
        <li>Quiénes somos</li>
        <li>Ministerios</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}
