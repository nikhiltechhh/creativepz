import React from 'react';

const Location = () => {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244816.59671866894!2d80.32457199453124!3d16.513000700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35effe2dda53d5%3A0x7ef465de69c444a6!2sCreative%20Print%20Zone!5e0!3m2!1sen!2sin!4v1764488679956!5m2!1sen!2sin";

  const locationAddress =
    "29-1-22/a Ground floor & 1st floor, Seshadrisasti Vari Street, Governorpet, Vijayawada-520002 (A.P)";

  const handleMapClick = () => {
    window.open(
      `https://www.google.com/maps/dir//${encodeURIComponent(locationAddress)}`,
      "_blank"
    );
  };

  return (
    <div className="w-full h-80 relative">
      <div
        className="w-full h-full cursor-pointer relative group"
        onClick={handleMapClick}
      >
        <iframe
          src={mapEmbedUrl}
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-transparent group-hover:bg-black group-hover:bg-opacity-5 transition-all duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white px-6 py-3 rounded-full shadow-lg">
            <p className="text-gray-800 font-semibold text-sm">
              Tap to open in Google Maps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
