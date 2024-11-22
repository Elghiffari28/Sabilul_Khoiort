import Image from "next/image";
import React from "react";
import Link from "next/link";

const GuruList = async ({ api }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {api.payload?.map((guru, index) => {
        return (
          <div className="" key={index}>
            <div className="border-2 flex gap-4 text-color-dark ">
              <Image
                src={`${process.env.BASE_URL_IMAGES}/${guru.foto}`}
                alt={guru.nama_guru}
                width={350}
                height={350}
                className="object-cover border-2 border-color-dark"
              />
              <div className="">
                <h3>{guru.nama_guru}</h3>
                <p>{guru.nig}</p>
                <p>{guru.jabatan}</p>
              </div>
              <Link href={`/guru/byid/${guru.id}`}>Lihat detail</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GuruList;
