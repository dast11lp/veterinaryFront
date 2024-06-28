import React from "react";
import injection from "./../assets/img/injection.png";
import appointment from "./../assets/img/vet.png";
import laboratory from "./../assets/img/microscope.png";
import style from "./../assets/img/style.jpg";
import Service from "./Service";

export const Services: React.FC = () => {
  return (
    <div className="services">
      <Service img={injection} nameService="Vacunación" />
      <Service img={appointment} nameService="Consulta general" />
      <Service img={laboratory} nameService="Laboratorio" />
      <Service img={style} nameService="Baño y corte" />
    </div>
  )
}
