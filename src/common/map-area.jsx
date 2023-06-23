import React from "react";

const MapArea = () => {
  return (
    <>
      <div
        className="map-area wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2365320.351149233!2d18.14058179574024!3d51.9194379423253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc7d156f2b65%3A0xfbf8a54b66cfc12d!2sPoland!5e0!3m2!1sen!2sus!4v1654575477504!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapArea;
