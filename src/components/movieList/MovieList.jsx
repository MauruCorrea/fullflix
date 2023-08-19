import MovieItem from "../movieItem/MovieItem"
export default function MovieList(){
    return(
        <div>
            <h1>Lista de filmes</h1>
            <ul>
                <MovieItem/>
            </ul>
        </div>
    )
}