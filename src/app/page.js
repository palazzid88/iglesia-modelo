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

export default function Home() {
  return (
    <main>
      <Hero />
      <Anuncios />
      <Versiculo />
      < Eventos />
      <Noticias />
      <PedidosOracion />
      < Obreros />
      <QuienesSomos />
      <Ministerios />
      < Galeria />
      <Ubicacion />
    </main>
  );
}
