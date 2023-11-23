import { collection, addDoc } from "firebase/firestore";
import { db } from "@/database/firebase";
import { useRef } from "react";

export default function Home() {
  const nombreRef = useRef(null);
  const edadRef = useRef(null);

  async function subirDatosALaBaseDeDatosFirebase(evento) {
    evento.preventDefault();

    const usuarioSubido = await addDoc(collection(db, "usuarios"), {
      nombre: nombreRef.current.value,
      edad: Number(edadRef.current.value),
    });

    console.log(usuarioSubido);
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <form action="" onSubmit={subirDatosALaBaseDeDatosFirebase}>
        <input
          className="text-black"
          type="text"
          placeholder="Nombre de usuario"
          ref={nombreRef}
        />
        <input
          ref={edadRef}
          className="text-black"
          type="text"
          placeholder="Edad"
        />

        <input type="submit" className="text-white" value="Subir datos" />
      </form>
    </main>
  );
}
