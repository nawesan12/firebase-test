import { db } from "@/database/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Page() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function traerUsuarios() {
      let usuariosAux = [];

      const datos = await getDocs(collection(db, "usuarios"));

      datos.forEach((documento) => {
        usuariosAux.push(documento.data());
      });

      setUsuarios(usuariosAux);
    }

    traerUsuarios();
  }, []);

  return (
    <>
      {usuarios.map((usuario, index) => (
        <p key={index}>{usuario.nombre}</p>
      ))}
    </>
  );
}
