import { useState, useEffect } from "react";

export default function App() {
  const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ];

  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    if (selectedGenre === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(movie => movie.genre === selectedGenre);
      setFilteredMovies(filtered);
    }
  }, [selectedGenre]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C8A2C8", // sfondo lilla
        fontFamily: "sans-serif",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundColor: "#6A4F6A", // box lilla scuro
          padding: "40px 60px",
          borderRadius: "0px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          width: "400%",      // più largo
          maxWidth: "700%", // massimo per desktop
          textAlign: "center",
          color: "#F5F5DC",  // testo beige
        }}
      >
        <h1 style={{ marginBottom: "30px" }}>FILM PER TUTTI</h1>



        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          style={{
            padding: "10px",
            marginBottom: "30px",
            borderRadius: "10px",
            border: "none",
            width: "100%",
            fontSize: "16px",
          }}
        >
          <option value="">Tutti i generi</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>

        {/* Lista dei film */}
        <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
          {filteredMovies.map((movie, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#F5F5DC", // box beige
                color: "#6A4F6A",           // testo viola scuro
                padding: "20px",
                borderRadius: "50px",
                marginBottom: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              {movie.title} S- <strong>{movie.genre}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
}
