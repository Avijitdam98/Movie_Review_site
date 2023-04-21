import "./App.css";
import Headers from "./Components/Headers";
import Movie from "./Components/Movie";
import movies from "./data.json";

function App() {





  return (
    <div className="App">

      <Headers />
      <div className="main">
        {movies.map((elem, i) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Movie
              key={i + 1}
              title={elem.Title}
              year={elem.Year}
              img={elem.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
