import React from "react";
import Etudiant1 from "/assets/images/etudiant6.jpg";
import Etudiant2 from "/assets/images/etudiant8.jpg";
import Etudiant3 from "/assets/images/etudiant7.jpg";

export default function HeroImage() {
  return (
    <div>
      <img
        src={Etudiant1}
        alt=""
        className="rounded-4xl w-full h-60 object-cover object-center"
      />
      <div className="grid grid-cols-2 mt-4 gap-6">
        <img src={Etudiant3} alt="" className="rounded-4xl" />
        <img
          src={Etudiant2}
          alt=""
          className="rounded-bl-4xl h-full object-cover rounded-tr-4xl"
        />
      </div>
    </div>
  );
}
