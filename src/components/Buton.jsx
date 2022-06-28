import React from "react";

const Buton = ({ propCita, propAuthor, propColor }) => {
  return (
    <section className="contenedor-citas" style={{ color: propColor }}>
      <p>{propCita}</p>
      <p>{propAuthor}</p>
      
    </section>
 
    
  );
};

export default Buton;
