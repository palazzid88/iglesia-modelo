// src/app/components/Hero.jsx
export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center text-center h-[600px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Overlay semi-transparente para mejorar contraste */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Bienvenidos a la Iglesia
        </h1>
        <p className="text-lg md:text-2xl text-white mb-6 drop-shadow-md">
          Un lugar para crecer en comunidad y fe
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg">
          Ver eventos
        </button>
      </div>
    </section>
  );
}
