import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo de la agencia */}
       <div className="flex items-center gap-2">
  <span className="font-bold text-sm">desarrollado por</span>
  <a href="https://impulsardigital.com.ar" target="_blank" rel="noopener noreferrer">
    <Image 
      src="/images/impulsar.webp" 
      alt="Impulsar Logo" 
      width={150} 
      height={150} 
      className="rounded cursor-pointer"
    />
  </a>
</div>


        {/* Contacto */}
        <div className="text-center md:text-left">
          <p>Contacto: lachacraiead248@gmail.com</p>
          <p>Cel: +54 376 503 2386</p>
        </div>

        {/* Redes sociales con react-icons */}
       <div className="flex flex-col items-center gap-2 text-xl">
  <span className="font-bold text-sm">Seguínos en nuestras redes</span>
  <div className="flex gap-4">
    <a href="https://www.instagram.com/central.ch32.33?igsh=NjRocDJzbWpqajRl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition">
      <FaInstagram />
    </a>
    <a href="https://www.facebook.com/share/19hhaapMid/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition">
      <FaFacebookF />
    </a>
    <a href="http://tiktok.com/@iead248ch32_33" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-black transition">
      <FaTiktok />
    </a>
    <a href="https://youtube.com/@chacraiead248?si=Kt5aNkVr8p3FcCQ3" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-600 transition">
      <FaYoutube />
    </a>
  </div>
</div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Iglesia Ejemplo. Todos los derechos reservados.
      </p>
    </footer>
  );
}
