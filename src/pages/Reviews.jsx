import { ReviewsInfo } from 'components';
import { useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchReviews } from 'service/movie-service';
import { LoadingView as Loading } from '../components/LoadingView/LoadingView';

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetchReviews(movieId).then(setReviews)
    }, [movieId]);
    
    if (reviews.length === 0) { 
        return null;
    }
    
    return (
        <Suspense fallback={<Loading />}>
            <ReviewsInfo reviews={reviews} />
        </Suspense>
    )
}

export default Reviews