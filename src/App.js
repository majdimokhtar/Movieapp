import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./Components/MovieCard";
import MovieListe from "./Components/MovieListe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieListe />
      </header>
    </div>
  );
}

export default App;
