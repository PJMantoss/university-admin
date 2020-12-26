import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const initialData = [
  { id: 0, value: "Hey there", label: "First item" },
  { id: 1, value: "Hey there", label: "Second item" },
  { id: 2, value: "Hey there", label: "Third item" }
];

const ListItem = ({ value, label, id, onRemoveClick }) => (
  <div>
    {label} - {value}
    <span> </span>
    <button onClick={() => onRemoveClick(id)}>x</button>
  </div>
);

const ListExample = () => {
  const [list, updateList] = useState(initialData);
  const [newLabel, setLabel] = useState("Label");
  const [newValue, setValue] = useState("Added");

  const addItem = () => {
    const newList = [
      ...list,
      { id: list.length, value: newValue, label: newLabel }
    ];
    updateList(newList);
  };
  const removeItem = id => {
    updateList(list.filter(item => item.id !== id));
  };

  return (
    <div>
      <label>
        Label
        <input
          type="text"
          value={newLabel}
          onChange={e => setLabel(e.currentTarget.value)}
        />
      </label>
      <label>
        Value
        <input
          type="text"
          value={newValue}
          onChange={e => setValue(e.currentTarget.value)}
        />
      </label>
      <button onClick={addItem}>Add</button>
      {list.map(item => (
        <ListItem key={item.id} {...item} onRemoveClick={removeItem} />
      ))}

      <h2>Debugging</h2>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ListExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
