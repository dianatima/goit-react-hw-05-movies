import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from "react";
import { Header } from 'components';


const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));
// const ErrorPage = lazy(() => import("../pages/ErrorPage"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />} >
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId/' element={<MovieDetails />} >
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
  );
};
