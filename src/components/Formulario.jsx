import Boton from "./Boton";

const Formulario = ({ password, setPassword, nombre, setNombre }) => {
  return (
    <form
      className="mt- space-y-6"
      action="https://pranx.com/hacker/simulador/"
    >
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div className={password === "252525" ? "hidden" : "form-group"}>
          <label htmlFor="nombre" className="sr-only">
            nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Ingresa tu nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className={password === "252525" ? "hidden" : "form-group"}>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
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
