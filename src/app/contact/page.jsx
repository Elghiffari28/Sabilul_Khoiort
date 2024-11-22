import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <div className="p-4">
      <Header
        title={"Hubungi Kami"}
        desc={"Ra Sabilul Khoirot Heuleut - Leuwimunding - Majalengka"}
      />
      <div className="flex flex-col md:flex-row gap-4 w-full mt-4">
        <div className="flex-1 overflow-hidden">
          <h3 className="font-semibold text-2xl text-center mb-2">Map</h3>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.197844163126!2d108.33163837483377!3d-6.745707593250671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f21bc96e49cf5%3A0xc3e45289a4080f2c!2sRA%20SABILUL%20KHOIROT!5e0!3m2!1sen!2sid!4v1732092365819!5m2!1sen!2sid"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full aspect-video"
            ></iframe>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-center font-bold text-2xl md:text-3xl mb-2">
            Mantap
          </h3>
        </div>
      </div>
    </div>
  );
};

export default page;
