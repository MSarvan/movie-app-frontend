import { useState } from "react";
import "./App.css";

function App() {
  const [movie, setMovie] = useState([]);

  const showData = () => {
    fetch("http://localhost:7890/movie")
      .then((res) => res.json())
      .then((res) => setMovie(res))
      .catch((err) => console.log(err));
  };

  showData();

  return (
    <div className="App">
      <h2>MOVIE APP</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th style={{ width: "100px" }}>Title</th>
              <th>Ratings</th>
              <th>Release Date</th>
              <th>Cast</th>
              <th>Genre</th>
              <th>To Edit</th>
              <th>To Delete</th>
            </tr>
          </thead>
          <tbody>
            {movie.map((e, i) => (
              <tr key={e._id}>
                <th>{e.title}</th>
                <th>{e.ratings}</th>
                <th>{e.release_date}</th>
                <th>{e.cast}</th>
                <th>{e.genre}</th>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
