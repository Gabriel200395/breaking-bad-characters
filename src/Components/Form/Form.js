import "../../Styles/toEdit.css";
import Navbar from "../Navbar/Navbar";
export default function () {
  return (
    <section>
      <Navbar />
      <div className="to-edit">
        <h1>To Edit Carachater</h1>
        <div className="to-edit-container">
          <form>
            <input />
            <input />
            <input />
            <input />
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
