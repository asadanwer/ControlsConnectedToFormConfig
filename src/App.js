import Demo from "./container/Demo/Demo";
import Reducer from "./container/useReducer/Reducer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnotherPractice from "./container/useReducer/AnotherPractice";
import SquareWithReducer from "./container/useReducer/SquareWithReducer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Demo />} />
          <Route path="/reducer" element={<Reducer />} />
          <Route path="/anotherPractice" element={<AnotherPractice />} />
          <Route path="/SquareWithReducer" element={<SquareWithReducer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
