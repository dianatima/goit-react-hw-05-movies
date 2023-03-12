import styled from '@emotion/styled';

export const MoviesSearchWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 70px;
`;

export const MoviesSearchForm = styled.form`

& input {
    height: 40px;
    width: 300px;
    margin-right: 10px;
    border: none;
    box-shadow: 0px 0px 10px #888;
    border-radius: 4px;
    cursor: pointer;

    &: hover {
        // border: 1px solid #ffa726;
        box-shadow: 0px 0px 10px #ffa726;
    }
}

& button {
    height: 40px;
    width: 70px;
    border: none;
    cursor: pointer;
    box-shadow: 0px 0px 10px #888;
    border-radius: 4px;

    &: hover {
       background-color: #ffa726;
       box-shadow: 0px 0px 10px #ffa726;
    }
}






// font-size: 2em;
// font-weight: bold;
// margin: 0 auto;
// display: flex;
// justify-content: center;
// align-items: center;
// height: 70px;
`;


