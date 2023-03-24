import './App.css';
import NumberCallback from "./useCallbackCode/NumberCallback";
import SizeCallback from "./useCallbackCode/SizeCallback";

function App() {
  return (
    <div>
      <h3>useCallback 실습</h3>
      <NumberCallback />
      <SizeCallback />
    </div>
  );
}

export default App;
