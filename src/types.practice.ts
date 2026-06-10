
import {useState} from "react";


const [Usuario, setUsuarios] = useState<Usuario[]>([]);


type Usuario = {
  nombre: string;
  edad: number;
  email: string;
  activo: boolean;
  rol: "admin" | "user";
};

const usuario: Usuario = {
  nombre: "Ana",
  edad: 25,
  email: "ana@email.com",
  activo: true,
  rol: "admin",
};


const usuarios: Usuario[] = [
    {
        nombre: "Carlos",
        edad: 30,
        email: "jacin@gmail.com",
        activo: true,
        rol: "user"
    },
    {
        nombre: "Lucia",
        edad: 28,
        email: "lucia@email.com",
        activo: false,
        rol: "admin"
    },
    {
        nombre: "Pepe",
        edad: 22,
        email: "pepe@gmail.com",
        activo: false,
        rol: "user"
    }
]