import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "51992870423"; // Reemplaza con tu número de WhatsApp

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center text-4xl w-16 h-16 z-50"
      style={{
        backgroundColor: "#25D366", // Verde WhatsApp
        color: "white",
        border: "2px solid white", // Asegura visibilidad
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;

