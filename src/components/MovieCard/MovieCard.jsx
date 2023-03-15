import { MovieWrap, MovieImg, MovieTitle, MovieInfo, Movietext, BackLink } from './MovieCard.styled';
import { useLocation } from 'react-router-dom';
import defaultPoster from '../MoviesList/no_image.png';

export const MovieCard = ({
    movie: {
      poster_path,
      title,
      popularity,
      release_date,
      genres,
      overview,
    },
}) => {
  const location = useLocation();
    
    return (
      <>
            <BackLink to={location?.state?.from ?? '/'}>  &#171; Go Back</BackLink>
            <MovieTitle>{title}({release_date ? release_date.slice(0, 4) : 'No release date'})</MovieTitle>
            <MovieWrap>
          <MovieImg src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultPoster} alt="poster" />
            <MovieInfo>
               {genres && <Movietext>{genres.map(el => el.name).join(', ')} </Movietext>}
                <Movietext>User score:  {popularity ? popularity.toFixed(0) : '0'}%</Movietext>
                <Movietext>Overview:</Movietext>
                <p>{overview}</p>
            </MovieInfo>
            </MovieWrap>
        </>
    )
  };

