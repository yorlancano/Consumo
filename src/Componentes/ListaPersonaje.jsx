import { useState, useEffect } from "react";
import { Personaje } from "./Personaje";

function NavPage({ page, setPage }) {
  return (
    <header className="d-flex justify-content-between align-items-center ">
      <p>Pagina: {page}</p>

      <button
        className="btn btn-primary btn-sm"
        onClick={() => setPage(page + 1)}
      >
        Pagina {page + 0}
      </button>
    </header>
  );
}

export function ListaPersonajes() {
  const [Cargando, setLoading] = useState(true);
  const [personajes, setCharacters] = useState([]);
  const [paginas, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const datos = await fetch(
        `https://rickandmortyapi.com/api/character?page=${paginas}`
      );
      const { results } = await datos.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [paginas]);

  return (
    <div className="container">
      <NavPage page={paginas} setPage={setPage} />

      {Cargando ? (
        <div>Cargando...</div>
      ) : (
        <div className="row">
          {personajes.map((personaje) => (
            <div className="col-md-4" key={personaje.id}>
              <Personaje
                key={personaje.id}
                name={personaje.name}
                origin={personaje.origin}
                image={personaje.image}
              />
            </div>
          ))}
        </div>
      )}

      <NavPage page={paginas} setPage={setPage} />
    </div>
  );
}

export default ListaPersonajes;