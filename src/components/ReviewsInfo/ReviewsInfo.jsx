import { ReviewsInfoWrap, ReviewsInfoAuthor, ReviewsInfoDate, ReviewsInfoEmpty } from './ReviewsInfo.styled';

export const ReviewsInfo = ({ reviews: { results } }) => {
    return (
        <>  {results.length === 0 ? <ReviewsInfoEmpty>Sorry! There are no reviews yet.</ReviewsInfoEmpty> : (
            results.map(({ id, author, content, updated_at, author_details }) => (
                <ReviewsInfoWrap key={id}>         
                    <ReviewsInfoAuthor>{author}:</ReviewsInfoAuthor>
                    <ReviewsInfoDate>Updated {new Date(updated_at).toLocaleDateString()}</ReviewsInfoDate>
                    <p>{content}</p>
                </ReviewsInfoWrap>)))}
        </>
    )
}
