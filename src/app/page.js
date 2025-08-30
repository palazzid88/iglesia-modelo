import Hero from './components/Hero';
import Anuncios from './components/Anuncios';
import Versiculo from './components/Versiculo';
import PedidosOracion from './components/PedidosOracion';
import QuienesSomos from './components/QuienesSomos';
import Ministerios from './components/Ministerios';
import Ubicacion from './components/Ubicacion';
import Noticias from './components/Noticias';
import Obreros from './components/Obreros';
import Eventos from './components/Eventos';
import Galeria from './components/Galeria';
import FormPedidos from './components/FormPedidos';
import SeccionPedidos from './components/SeccionPedidos';
import PedidosSection from './components/PedidosSection';
import VersiculoDelDia from './components/VersiculoDelDia';

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="anuncios">
        <Anuncios />
      </section>

      <section id="versiculo">
        <VersiculoDelDia />
      </section>

      <section id="eventos">
        <Eventos />
      </section>

      <section id="noticias">
        <Noticias />
      </section>

      <section id="pedidos">
        <PedidosSection />
      </section>

      <section id="obreross">
        <Obreros />
      </section>

      <section id="quienes-somos">
        <QuienesSomos />
      </section>

      <section id="ministerios">
        <Ministerios />
      </section>

      <section id="galeria">
        <Galeria />
      </section>

      <section id="ubicacion">
        <Ubicacion />
      </section>
    </main>
  );
}
