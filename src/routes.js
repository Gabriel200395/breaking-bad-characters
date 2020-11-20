import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Pages/Landing";
import Detalhes from "./Pages/Detalhes";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/detalhes-characters/:id" component={Detalhes} />
      </Switch>
    </BrowserRouter>
  );
}
