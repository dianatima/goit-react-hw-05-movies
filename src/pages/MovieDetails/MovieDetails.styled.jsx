import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const AdditionalInfo = styled(NavLink)`
display: inline-block;
  font-size: 25px;
  text-align: center;
  padding: 5px;
  width: 125px;
  color: black;
  font-weight: 500;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: #d0cece;
  margin-right: 20px;
  box-shadow: 1px 3px 10px 2px grey;

  &:hover,
  &:focus {
    background-color: #818181;
    color: #ffa726;
    box-shadow: 1px 3px 6px 4px #ffa7264f;
  }
`;

export const LinkWrap = styled.div`
padding: 20px 0 0 160px;
`;