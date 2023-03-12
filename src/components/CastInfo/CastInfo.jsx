import { CastInfoWrap, CastInfoItem, CastInfoImg, CastInfoTitle, CastInfoSubTitle } from './CastInfo.styled';
import defaultImage from './default_author_img.png';

export const CastInfo = ({ castData: { cast } }) => {
    return (
        <CastInfoWrap>
            {cast.map(({id, name, profile_path, character})=>  (
                <CastInfoItem key={id}>
                    {<CastInfoImg src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultImage} alt="profile" /> }   
                <CastInfoTitle>{name}</CastInfoTitle>
                <CastInfoSubTitle>{character}</CastInfoSubTitle>
                </CastInfoItem>
            )
            )}
        </CastInfoWrap>
                )
            }