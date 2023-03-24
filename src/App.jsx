import './App.css';
import BankReducer from "./useReducerCode/BankReducer";
import AttendanceReducer from "./useReducerCode/AttendanceReducer";

function App() {
  return (
    <div>
      <h2>useReducer 실습 코드</h2>
      <BankReducer />
      <AttendanceReducer />
    </div>
  );
}

export default App;
