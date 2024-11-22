import React from "react";
import Link from "next/link";
import Image from "next/image";
import StarRating from "./StarRating";

const KaryaList = ({ api }) => {
  return (
    <div className="text-color-dark grid grid-cols-4 gap-4 px-4">
      {api.payload.map((karya) => {
        return (
          <div key={karya.id} className="border-2 border-color-dark h-56">
            <Image
              src={`${process.env.BASE_URL_IMAGES}/karya/${karya.foto}`}
              alt={`Karya : ${karya.nama_anak}`}
              width={350}
              height={350}
              placeholder="blur"
              blurDataURL="https://placehold.co/600x400.png"
              className="h-full w-full object-fill"
            />

            <p className="">"{karya.deskripsi}"</p>
            <h3 className="">
              Karya : <span className="font-bold">{karya.nama_anak}</span>
            </h3>
            <div className="flex justify-center">
              <StarRating rate={karya.bintang} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KaryaList;
