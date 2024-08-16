import React from "react";

const Card = ({estudiante}) => {
  return (
    <>
      <>
        <h4> Hola "{estudiante.name}" has sido ingresado con éxito, también tu animal favorito "
          {estudiante.animalFavorito}".
        </h4>
      </>
    </>
  );
};

export default Card;