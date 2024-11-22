import Header from "@/components/Header";
import KaryaList from "@/components/KaryaList";
import { getResponse } from "@/libs/api-libs";
import React from "react";

const page = async () => {
  const karya = await getResponse("karya/all");
  return (
    <div className="p-4">
      <Header title={"Museum Karya Anak"} desc={"RA Sabilul Khoirot"} />
      <div>
        <KaryaList api={karya} />
      </div>
    </div>
  );
};

export default page;
