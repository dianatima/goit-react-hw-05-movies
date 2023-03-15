import { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import { getTrendMovies } from 'service/movie-service';
import { HomeTitle } from './Home.styled';
import { LoadingView as Loading } from '../../components/LoadingView/LoadingView';

const MoviesList = lazy(() => import('../../components/MoviesList/MoviesList'));

 const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
     
        const getMovies = async () => {
          await getTrendMovies()
              .then(setMovies)
            .catch((error) => {
              console.log(error);
            });
        };
        getMovies();
      }, []);

    
    return (
      <>
        <HomeTitle> Trending movies</HomeTitle>
        <Suspense fallback={<Loading />}>
          <MoviesList movies={movies} />
        </Suspense>
        </>
    )
}

export default Home