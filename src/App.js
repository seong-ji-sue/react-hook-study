import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import MainPage from "./MainPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={MainPage} />
        <Route path={"/useState-code"} exact component={UseState} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
