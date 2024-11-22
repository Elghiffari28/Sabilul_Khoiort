"use client";
import React, { useEffect, useState } from "react";
import { Star } from "@phosphor-icons/react";

const StarRating = ({ rate }) => {
  const [rating, setRating] = useState(0);
  const angka = [1, 2, 3, 4, 5];
  useEffect(() => {
    setRating(rate);
  }, []);
  return (
    <div className="flex">
      {angka.map((index) => {
        return (
          <Star
            key={index}
            size={24} // Ukuran bintang
            weight={index <= rating ? "fill" : "regular"} // Bintang penuh atau kosong
            className={index <= rating ? "text-yellow-300" : "text-gray-300"}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
