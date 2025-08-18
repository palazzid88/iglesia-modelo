import FormPedidos from "./FormPedidos";
import PedidosDeOracion from "./PedidosOracion";

export default function PedidosSection() {
  return (
    <section className="flex flex-col md:flex-row gap-6 py-16 px-4 justify-center max-w-6xl mx-auto">
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md h-full flex flex-col">
          <FormPedidos />
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md h-full flex flex-col">
          <PedidosDeOracion />
        </div>
      </div>
    </section>
  );
}
