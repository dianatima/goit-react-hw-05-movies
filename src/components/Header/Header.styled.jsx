import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderWrap = styled.div`
position: sticky;
width: 100%;
height: 80px;
display: flex;
align-items: center;
justify-content: center;
background-color: #ffa726;  
font-size: 22px;
font-weight: bold;
`;

export const NavItem = styled(NavLink)`
text-decoration: none;
color: white;
margin-right: 40px;


&.active {   
    color: #4e4949;
}

:hover:not(.active),
:focus-visible:not(.active) {
    color: #e0e0e0;
}
`;