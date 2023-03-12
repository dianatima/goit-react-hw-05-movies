import { Link, useLocation } from 'react-router-dom';
import { MoviesListWrap, MoviesListItem, MoviesListImg, MoviesListTitle } from './MoviesList.styled';
import defaultPoster from './no_image.png';

export const MoviesList = ({ movies }) => {
const location = useLocation();

    return (
        <>
            <MoviesListWrap>
            {movies.map(({ id, title, name, poster_path }) => (
                    <MoviesListItem key={id}>
                    <Link to={`/movies/${id}`} state={{from: location}}>
                        <MoviesListImg>
                            <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultPoster} alt="poster" />
                        </MoviesListImg>
                    </Link>
                    <MoviesListTitle>{title || name}</MoviesListTitle>
                    </MoviesListItem>
            ))}
            </MoviesListWrap>
        </>
    )
}

export default MoviesList