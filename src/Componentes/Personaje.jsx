import React from "react";
export function Personaje({ name, image, origin, species, status }) {
  return (
    
    <div className="text-center p-5 " >
      <h3>{name}</h3>
      <img src={image} alt={name} className="img-fluid rounded-pill" />
      <p>{`Origin: ${origin && origin.name}`}</p>
      <p>{`species: ${species ? species : 'Unknown'}`}</p>
      <p>{`status: ${status ? status:'UnKnown' }`}</p>

    </div>
  );
}
export default Personaje;