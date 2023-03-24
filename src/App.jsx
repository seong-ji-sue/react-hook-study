import './App.css';
import InputCustomHook from "./customHooks/InputCustomHook";
import FetchCustomHook from "./customHooks/FetchCustomHook";

function App() {
  return (
    <div>
      <h2>custom hooks 실습</h2>
      <InputCustomHook />
      <FetchCustomHook />
    </div>
  );
}

export default App;
