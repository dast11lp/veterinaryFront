import React from "react";
import Service from "./Service";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export const Services: React.FC = () => {

  const services = useSelector((state: RootState)=> state.getServicesSlice.services)


  return (
    <div className="services">
      <h2> Services </h2>
      <div className="services__content">
        {services.map((el, i) => (
          <Link to={`/servicios/${el.id}`} key={i}>
            <Service img={el.img} nameService={el.title} />
          </Link>
        ))}
      </div>
    </div>
  )
}






