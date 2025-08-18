export default function Ubicacion() {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">Dónde Estamos</h2>
      <p className="text-base md:text-lg mb-6">Carola Lorenzini 2550, Posadas, Misiones</p>
      
      <div className="w-full max-w-md h-64 md:h-80 mx-auto rounded-xl overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d954.7352087250626!2d-55.894717971494046!3d-27.40050229851633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457befce3b469ad%3A0xcff44e31f3c6e001!2sCarola%20Lorenzini%202550%2C%20Posadas%2C%20Misiones!5e1!3m2!1ses-419!2sar!4v1755553217585!5m2!1ses-419!2sar"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
