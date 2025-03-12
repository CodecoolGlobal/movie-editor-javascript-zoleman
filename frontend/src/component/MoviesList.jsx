import MovieItem from "./MovieItem"

function MoviesList({moviesProp}){




return (
    <div>
        {moviesProp.map(movie=><MovieItem movieProp={movie}/>)}
    </div>
)

}

export default MoviesList