import { CastInfo } from 'components';
import { useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchCast } from 'service/movie-service';
import { LoadingView as Loading } from '../components/LoadingView/LoadingView';

export const Cast =  () => {
    const { movieId } = useParams();
    const [castData, setCastData] = useState([]);

     useEffect(() => {
         fetchCast(movieId).then(setCastData).catch((error) => {
            console.log(error);
          })
          }, [movieId]);
       
          if (castData.length === 0) { 
            return null;
        }

    return (
        <Suspense fallback={<Loading />}>
            <CastInfo castData={castData} />
        </Suspense>
    )
}

export default Cast