import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex justify-center p-4">
      <Header
        title={"Ini adalah halaman untuk berita"}
        desc={"ini adalah halaman berita RA Sabilul Khoirort"}
      />
    </div>
  );
};

export default page;
