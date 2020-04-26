import React from "react";
import "./styles.css";

function SubComponent(props) {
  return (
    <div className="subcomponent">
      Hello {props.value}
      <button className="close" onClick={props.remove}>
        X
      </button>
    </div>
  );
}

export default function App() {
  const [items, setItems] = React.useState([1, 2, 3]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {items.map(i => (
        <SubComponent
          key={i}
          value={i}
          remove={() => setItems(items.filter(x => x !== i))}
        />
      ))}

      <button
        onClick={() => {
          setItems([...items, Math.max.apply(Math, items) + 1]);
        }}
      >
        Add
      </button>
    </div>
  );
}
