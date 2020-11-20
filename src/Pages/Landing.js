import "../Styles/Landing.css";
import "../Styles/Global.css";
import Navbar from "../Components/Navbar/Navbar";
import Characters from "../Components/Characters/Characters";

export default function Landing() {
  return (
    <section>
      <Navbar />
      <Characters />
    </section>
  );
}
