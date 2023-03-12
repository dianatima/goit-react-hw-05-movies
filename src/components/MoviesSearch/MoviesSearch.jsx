import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MoviesSearchWrap, MoviesSearchForm } from './MoviesSearch.styled';

export const MoviesSearch = ({onSubmit}) => {
    const [query, setQuery] = useState('');

    const handleChange = evt => {
        setQuery(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        if (query.trim() === "") {
            toast.warn("🦄 Please enter something");
            return;
        }
        
        onSubmit(query.toLocaleLowerCase());                      
        reset();
    };

    const reset = () => {
        setQuery('');
      };

    return (
        <MoviesSearchWrap>  
            <MoviesSearchForm onSubmit={handleSubmit}>
                <input
                type="text"
                value={query}
                placeholder="Search movies"
                onChange={handleChange}
                ></input>
                <button type="submit">Search</button>
            </MoviesSearchForm>
            <ToastContainer autoClose={3000} />
        </MoviesSearchWrap>
    )
}
