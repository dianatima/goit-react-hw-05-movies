import { MovieCard } from 'components';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovie } from 'service/movie-service';
import {  Outlet } from 'react-router-dom';
import { AdditionalInfo, LinkWrap } from './MovieDetails.styled';
import { LoadingView as Loading } from '../components/LoadingView/LoadingView';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    
    const location = useLocation();
    console.log('location', location.state);

    useEffect(() => {
        fetchMovie(movieId).then(setMovie);
          }, [movieId]);
    
    return (
        <>
            <Suspense fallback={<Loading />}>
            <MovieCard movie={movie} />
            <LinkWrap>
                <AdditionalInfo to={`cast`} state={{ from: location.state?.from ?? '/' }}>Cast</AdditionalInfo>
                <AdditionalInfo to={`reviews`} state={{ from: location.state?.from ?? '/' }}>Reviews</AdditionalInfo>
                </LinkWrap>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>

    )
}

export default MovieDetails