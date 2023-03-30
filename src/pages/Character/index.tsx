import { useState, useEffect } from "react";
import { ICharacter } from "../../interfaces/character.interface";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CharacterCard from "../../components/CharacterCard";
import api from "../../services/api";
import "./styles.scss";

const Character = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [amountPages, setAmountPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.get(`/character?page=${page}`).then((res) => {
      setCharacters(res.data.results);
      setAmountPages(res.data.info.pages);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, [page]);

  return (
    <>
      <Header />
      <div className="main-home">
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin}
            location={char.location}
            image={char.image}
            episode={char.episode}
            url={char.url}
            created={char.created}
          />
        ))}
      </div>
      <div className="buttons">
        <button
          type="button"
          onClick={() => setPage(page - 1)}
          disabled={page <= 1 ? true : false}
        >
          <GrFormPrevious className="btn" />
        </button>
        <p>Page: {page}</p>
        <button
          type="button"
          onClick={() => setPage(page + 1)}
          disabled={page >= amountPages ? true : false}
        >
          <GrFormNext className="btn" />
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Character;
