import styled from '@emotion/styled';

export const CastInfoWrap = styled.div`
padding: 20px 20px 20px 160px;
display: flex;
flex-wrap: wrap;
justify-content: left;
gap: 20px;
`;

export const CastInfoItem = styled.div`
width: 134px;
box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
border-radius: 10px;
overflow: hidden;
// border: 1px solid red;
`;

export const CastInfoImg = styled.img`
width: 140px;
margin-right: 20px;
display: block;
object-fit: contain;
object-position: 50% 50%;
border-bottom: 1px solid #d0cece;
// box-shadow: 1px 3px 6px 4px #ffa7264f;
`;

export const CastInfoTitle = styled.p`
font-size: 1em;
overflow: hidden;
// text-overflow: ellipsis;
font-weight: bold;
color: #000;
text-align: center;
margin-top: 10px;
`;

export const CastInfoSubTitle = styled.p`
font-size: 0.9em;
overflow: hidden;
text-align: center;
color: rgba(0,0,0,0.5);



`;