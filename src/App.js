import "./App.css";
import Home from "./pages/Home";
import ReactGA from "react-ga"
const Tracking_id="G-RR30Y16SLS";

ReactGA.initialize(Tracking_id);
function App() {

  return (
      <Home />
  );
}

export default App;
