import React from "react";
import Message from "./Message";
import { useState } from "react";
import Card from "./Card"

const Form = () => {
  const [estudiante, setEstudiante] = useState({
    name: "",
    animalFavorito: "",
  });
  console.log(estudiante);

  const [show, setShow] = useState(false);

  const [error, setError] = useState(false);

  const handleChangeName = (event) => {
    setEstudiante({ ...estudiante, name: event.target.value });
  };

  const handleChangeAnimalFavorito = (event) => {
    setEstudiante({ ...estudiante, animalFavorito: event.target.value });
  };

  const handleSubmit = () => {
    event.preventDefault();
    if (
      estudiante.name.trim().length >= 3 &&
      estudiante.animalFavorito.trim().length >= 6
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {show ? (
        <Card estudiante={estudiante} />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input
              type="text"
              value={estudiante.name}
              onChange={handleChangeName}
            />
            <label>Animal favorito:</label>
            <input
              type="text"
              value={estudiante.animalFavorito}
              onChange={handleChangeAnimalFavorito}
            />
            <button>Enviar</button>
          </form>
        </>
      )}

      {error ? (
        <Message />
      ) : null}
    </>
  );
};

export default Form;
