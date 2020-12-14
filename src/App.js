//Redux/React Imports
import { Route } from "react-router-dom";

//components
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
