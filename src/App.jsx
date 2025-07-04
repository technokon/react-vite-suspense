import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NameInput } from "./components/NameInput.jsx";
import { Weather } from "./components/Weather.jsx";
import { Suspense } from "react";
import { Loader } from "./components/Loader.jsx";
import { useTheme } from "./theming/Theme.jsx";

function App() {
  const { theme, toggle } = useTheme();
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={toggle}>{theme}</button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p
        className="read-the-docs"
        style={{ color: theme === "dark" ? "white" : null }}
      >
        Click on the Vite and React logos to learn more
      </p>
      <NameInput></NameInput>
      <Suspense fallback={<Loader />}>
        <Weather />
      </Suspense>
    </div>
  );
}

export default App;
