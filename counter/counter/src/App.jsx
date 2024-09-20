import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1>Counter</h1>
      <h2 style={styles.counter}>{count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)} style={styles.button}>+</button>
        <button onClick={() => setCount(0)} style={styles.button}>RESET</button>
        <button onClick={() => setCount(count - 1)} style={styles.button} disabled={count === 0}>-</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    margin: "200px 0",
  },
  counter: {
    fontSize: "37px",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "20px",
    cursor: "pointer",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
};

export default App;
