import { useEffect, useState } from "react";
import Axios from "axios";
import "../Styles/Landing.css";
import "../Styles/Detalhes.css";
import "../Styles/Global.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Detalhes() {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    function buscaPensonages() {
      Axios.get(`https://www.breakingbadapi.com/api/characters/${id}`).then(
        (response) => {
          setCharacter(response.data);
        }
      );
    }
    buscaPensonages();
  }, [id]);

  return (
    <section className="characters-navbar">
      <div className="characters-navbar-container">
        <Link to="/" className="logo">
          Breaking Bad Characters
        </Link>
      </div>
      <div className="character-container">
        {character.map((characte) => (
          <div className="character-cards" key={characte.char_id}>
            <h1>{characte.name}</h1>
            <img src={characte.img} alt={characte} />
            <p> categoria: {characte.category}</p>
            <p>ocupação: {characte.occupation}</p>
            <p>retratada: {characte.portrayed}</p>
            <p>status: {characte.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
