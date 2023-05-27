import { createRoot } from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import * as Test from "react-final-form-toolkit";
import AppProvider from "./AppProvider";
console.log(Test);
const App = () => {
  return (
    <AppProvider>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </AppProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
