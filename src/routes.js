import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Pages/Landing";
import Detalhes from "./Pages/Detalhes";
import Editar from "./Pages/Editar";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/details-characters/:id" component={Detalhes} />
        <Route path="/to-edit/:id" component={Editar} />
      </Switch>
    </BrowserRouter>
  );
}
