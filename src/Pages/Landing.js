import { useEffect, useState } from "react";
import Axios from "axios";
import "../Styles/Landing.css";
import "../Styles/Global.css";
import { Link } from "react-router-dom";
export default function Landing() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    function buscaPensonages() {
      Axios.get(
        "https://www.breakingbadapi.com/api/characters?limit=12&offset=12"
      ).then((response) => {
        setCharacters(response.data);
      });
    }
    buscaPensonages();
  }, []);

  return (
    <section className="characters-navbar">
      <div className="characters-navbar-container">
        <Link to="/" className="logo">
          Breaking Bad Characters
        </Link>
      </div>
      <div className="characters-container">
        {characters.map((character) => (
          <div className="characters-cards" key={character.char_id}>
            <img src={character.img} alt={character} />
            <div className="characters-buttons">
              <Link to={"detalhes-characters/" + character.char_id}>
                Detalhes
              </Link>
              <Link to="">editar</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
