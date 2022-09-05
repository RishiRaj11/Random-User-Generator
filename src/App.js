import Login from "./Components/Login";
import "./App.css";
import UserGenerator from "./Components/UserGenerator";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);

  return (
    <div className="Main-Container">
      <h1>Welcome to generate Random Users</h1>
      {status ? (
        <UserGenerator />
      ) : (
        <Login status={status} setStatus={setStatus} />
      )}
    </div>
  );
}

export default App;
