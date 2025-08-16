export default function Footer() {
  return (
    <footer style={{ padding: '40px 20px', textAlign: 'center', background: '#333', color: '#fff' }}>
      <p>&copy; {new Date().getFullYear()} Iglesia Ejemplo. Todos los derechos reservados.</p>
      <p>Contacto: contacto@iglesiaejemplo.com | Tel: +54 123 456 789</p>
    </footer>
  );
}
