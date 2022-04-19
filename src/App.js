import "./App.scss";
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Guess Who, Anne?</h1>
      <p className="App-subtitle">
        A Guess Who remake, but with Anne with an E characters!
      </p>
      <Game />
      <small>
        *Anne with an E was created by Moira Walley-Beckett and Guess Who is
        owned by Hasbro. This game is not official; it's just for fun!
      </small>
    </div>
  );
}

export default App;
