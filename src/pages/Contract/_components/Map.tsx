

interface MapSectionProps {
  locationQuery?: string;
}

const MapSection = ({ locationQuery = "123 Business Blvd, Suite 400 Jacksonville, FL 32202" }: MapSectionProps) => {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(locationQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;


  return (
    <div className="w-full h-60 sm:h-75 relative overflow-hidden group mt-10 sm:mt-15">
      {/* Dynamic Google Map Embed */}
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0 grayscale-[0.2] contrast-[0.9]"
        src={mapEmbedUrl}
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
      ></iframe>

      {/* Overlay to dim the map slightly */}




    </div>
  );
};

export default MapSection;