import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Iglesia Ejemplo',
  description: 'Página web de ejemplo para iglesia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <section id="footer">
          <Footer />
        </section>
      </body>
    </html>
  );
}
