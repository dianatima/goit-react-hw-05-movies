import styled from '@emotion/styled';

export const MoviesListWrap = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
gap: 15px;
padding: 20px;
background-color: #d0cece;
`;

export const MoviesListItem = styled.div`
box-sizing: border-box;
width: 320px;
padding:  20px 20px 0 20px;  
background-color: #fff;
box-shadow: 1px 3px 6px 4px #ffa7264f;
transition-duration: 500ms;
transition-delay: 100ms;

&:hover {
    transform: scale(1.05);
}
`;

export const MoviesListImg = styled.div`
overflow: hidden;
height: 300px;
box-shadow: 3px 3px 6px 4px #888;

& img {
    object-fit: contain;
    object-position: 50% 50%;
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden; 
    }
`;

export const MoviesListTitle = styled.div`
display: flex;
font-size: 20px;
justify-content: center;
align-items: center;
color: black;
padding: 10px 0;
`;