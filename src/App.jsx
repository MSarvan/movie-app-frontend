import { useState } from "react";
import "./App.css";

function App() {
  const [movie, setMovie] = useState([]);

  const showData = () => {
    fetch("https://gv-movieapp-backend.herokuapp.com/movie")
      .then((res) => res.json())
      .then((res) => setMovie(res))
      .catch((err) => console.log(err));
  };

  showData();

  return (
    <div className="App">
      <br />
      <h2>MOVIE APP</h2>
      <button>Add Movies</button>
      <br /><br />
      <div>
        <table>
          <thead>
            <tr>
              <th className="title">Title</th>
              <th className="ratings">Ratings</th>
              <th className="date">Release Date</th>
              <th className="cast">Cast</th>
              <th>Genre</th>
              <th className="modify">Modify</th>
              <th className="modify">Delete</th>
            </tr>
          </thead>
          <tbody>
            {movie.map((e, i) => (
              <tr key={e._id}>
                <th id="title" className="title">{e.title}</th>
                <th className="ratings">{e.ratings}</th>
                <th className="date">{e.release_date}</th>
                <th className="cast">{e.cast}</th>
                <th>{e.genre}</th>
                <td>
                  <button className="btn">Edit</button>
                </td>
                <td>
                  <button className="btn">Delete</button>
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
