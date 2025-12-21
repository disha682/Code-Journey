/*import "./Greeting.css";

function Greeting(props) {
  function handleClick() {
    alert(`Welcome ${props.name}! 🚀`);
  }

  return (
    <div className="greeting-card">
      <h3>Hello, {props.name}!</h3>
      <p>You are learning {props.topic} today.</p>
      <button onClick={handleClick}>Say Hi</button>
    </div>
  );
}

export default Greeting;*/
function Greeting(props) {
  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h3>Hello, {props.name}!</h3>
      <p>You are learning {props.topic} today.</p>
    </div>
  );
}

export default Greeting;

