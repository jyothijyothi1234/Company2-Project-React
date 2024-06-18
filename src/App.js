import "./App.css";
import Home from "./Component/Home";
import Images from "./Component/Images";
import MiddleData from "./Component/Middle";
import Heading from "./Header/Heading";

function App() {
  return (
    <div className="App">
      <Heading />
      <Home />
      <MiddleData />
      <Images />
    </div>
  );
}

export default App;
