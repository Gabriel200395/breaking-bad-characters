import { useEffect, useState } from "react";
import Axios from "axios";
import "../Styles/Landing.css";
import "../Styles/Detalhes.css";
import "../Styles/Global.css";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

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
      <Navbar />
      <div className="character-container">
        {character.map((characte) => (
          <div className="character-cards" key={characte.char_id}>
            <h3>{characte.name}</h3>
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
