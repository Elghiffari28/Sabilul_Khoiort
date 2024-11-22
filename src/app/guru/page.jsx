import GuruList from "@/components/GuruList";
import Header from "@/components/Header";
import { getResponse } from "@/libs/api-libs";
import React from "react";

const Page = async () => {
  const guru = await getResponse("guru/all");
  return (
    <div className="px-4  ">
      <Header
        title={"Keluarga RA Sabilul Khoirot"}
        desc={"Biodata Guru dan Staf RA Sabilul Khoirot"}
      />
      <div className="mt-4">
        <GuruList api={guru} />
      </div>
    </div>
  );
};

export default Page;
