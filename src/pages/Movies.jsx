import { MoviesSearch } from 'components';
import { useEffect, lazy, Suspense } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from 'service/movie-service';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingView as Loading } from '../components/LoadingView/LoadingView';

const MoviesList = lazy(() => import('../../src/components/MoviesList/MoviesList'));

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    
    const SearchQuery = searchParams.get('query');

    useEffect(() => {
        
        if (!SearchQuery) return;

        fetchMovieSearch(SearchQuery)
            .then(movies => setMovies(movies.results))
            .catch((error) => toast.error(error.message ))

    }, [SearchQuery])

    const onSubmit = query => {
        setSearchParams({ query });
    }  

    return (
        <>
            <MoviesSearch onSubmit={onSubmit} />
            <Suspense fallback={<Loading />}>
                {movies.length !== 0 && <MoviesList movies={movies} />}
            </Suspense>
            <ToastContainer autoClose={3000} />
        </>
    )
}

export default Movies