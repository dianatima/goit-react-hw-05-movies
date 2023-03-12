import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
position: absolute; 
color: #ffa726;
padding: 20px;
font-size: 20px;
font-weight: bold;

&:hover, &:focus-visible {
    color: black;
    text-shadow: #ffa726 1px 0 10px;;
}
`;

export const MovieTitle = styled.div`
font-size: 2em;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
height: 70px;
background-color: #fff;
`;

export const MovieWrap = styled.div`
padding: 20px;
padding-left: 160px;
background-color: #d0cece;
display: flex;
justify-content: left;    
align-items: center;
`;

export const MovieImg = styled.img`
height: 400px;
width: 300px;
margin-right: 20px;
display: block;
border-radius: 10px;
box-shadow: 1px 3px 6px 4px #ffa7264f;
`;

export const MovieInfo = styled.div`
width: 800px;
`;

export const Movietext = styled.div`
font-size: 25px;
font-weight: bold;

&:not(:first-of-type) {
    margin-top: 25px;
}
`;

export const MovieAdd = styled.h2`
padding-left: 160px;
`;
