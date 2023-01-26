import logo from "./logo.svg";
import "./App.css";
import Users from "./users/users";
import Counter from "./Counter";
const users = ["obaid", "Arslan", "zubair", "ammad"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>lets start testing</h1>
        <Users users={users} />
        <Counter />
      </header>
    </div>
  );
}

export default App;
