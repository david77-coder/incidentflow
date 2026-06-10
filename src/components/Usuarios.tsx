import { useState } from "react";

type Usuario = {

  nombre: string;
  edad: number;
  email: string;
  activo: boolean;
  rol: "admin" | "user";
};

type FormUsuario = {
  nombre: string;
  edad: string;
  email: string;
};

function Usuarios() {
  // Estado de la lista de usuarios
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  // Estado del formulario
  const [form, setForm] = useState<FormUsuario>({
    nombre: "",
    edad: "",
    email: "",
  });

  // Función para añadir usuario
  const agregarUsuario = () => {
    const nuevoUsuario: Usuario = {
      nombre: form.nombre,
      edad: Number(form.edad),
      email: form.email,
      activo: true,
      rol: "user",
    };

    setUsuarios([...usuarios, nuevoUsuario]);

    // limpiar formulario
    setForm({ nombre: "", edad: "", email: "" });
  };

  return (
    <div>
      <h2>Lista de usuarios</h2>

      {/* INPUTS */}
      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={form.nombre}
          onChange={(e) =>
            setForm({ ...form, nombre: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Edad"
          value={form.edad}
          onChange={(e) =>
            setForm({ ...form, edad: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
      </div>

      {/* BOTÓN */}
      <button onClick={agregarUsuario}>
        Añadir usuario
      </button>

      {/* LISTA */}
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            {usuario.nombre} - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;