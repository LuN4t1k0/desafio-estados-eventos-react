import { useState } from "react";
import Boton from "./Boton";

const Formulario = ({ password, setPassword, nombre, setNombre }) => {
  return (
    <form action="https://pranx.com/hacker/simulador/">
      <div className={ password === "252525" ? "hidden" : "form-group"}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className={ password === "252525" ? "hidden" : "form-group"}>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {password === "252525" ? (
        <div>
          <h1>Bienvenido {nombre}</h1> <Boton />{" "}
        </div>
      ) : (
        <p>ingresa una contraseña</p>
      )}
    </form>
  );
};

export default Formulario;
