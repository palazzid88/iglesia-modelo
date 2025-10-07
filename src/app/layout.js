import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
title: 'Iglesia iEAD',
  description:
    'Sitio web oficial de la Iglesia Evangélica Apostólica de Dios (iEAD) en Posadas - Misiones, Argentina.'

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
