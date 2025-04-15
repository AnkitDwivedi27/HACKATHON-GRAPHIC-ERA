// App.jsx
import './library/Spacing.css';
import './library/Flexbox.css';
import './library/Typography.css';
import './library/Color.css';
import './library/index.css';
import { useState } from 'react';

import DarkModeToggle from "./Components/DarkModeToggle";
import SearchBar from './Components/Searchbar.jsx';
import { componentsList } from "./Components/Component.js";
export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredComponents = componentsList.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div >
      
      <div className="flex justify-end mb-4">
        <DarkModeToggle />
      </div>

     
      <h1 className="text-xl font-bold text-center leading-tight mb-4 font-light">
        Welcome to My Custom CSS Framework!
      </h1>

      
      <div className="text-center">
        <button className="m-2 p-3 bg-primary text-light rounded">
          Click me
        </button>
      </div>

     
      <div className="flex flex-row justify-center items-center my-4">
        <div className="m-2 p-3 bg-secondary text-light rounded">Item 1</div>
        <div className="m-2 p-3 bg-secondary text-light rounded">Item 2</div>
        <div className="m-2 p-3 bg-secondary text-light rounded">Item 3</div>
      </div>

     
      <div className="bg-primary text-light p-3 m-2 rounded">
        This is a primary background with light text.
      </div>

      <div className="bg-accent text-dark p-3 m-2 rounded">
        Accent background with dark text.
      </div>





      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

{filteredComponents.map(({ name, Component, code }, index) => (
  <div key={index} style={{ marginBottom: "2rem" }}>
    <h2>{name}</h2>
    <div style={{ marginBottom: "1rem" }}>
      <Component />
    </div>
    <h4>Code</h4>
    <pre
      style={{
        backgroundColor: "#f5f5f5",
        padding: "1rem",
        borderRadius: "8px",
        overflowX: "auto",
      }}
    >
      <code>{code.trim()}</code>
    </pre>
  </div>
))}
    </div>
  );
}
