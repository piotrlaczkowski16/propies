function MovieCard({ movie }) {
    return (
        <div className="card">
            <img src={movie.image} alt={movie.title} />

            <h3>{movie.title}</h3>

            <p>genres: {movie.genre}</p>

            <p>year: {movie.year}</p>
        </div>
        
    );
}

export default MovieCard;