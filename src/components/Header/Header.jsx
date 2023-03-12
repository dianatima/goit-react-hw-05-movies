import { Suspense } from 'react';
import { Outlet } from "react-router-dom"
import { HeaderWrap, NavItem } from './Header.styled';
import { LoadingView as Loading } from '../LoadingView/LoadingView';

export const Header = () => {

    return (
    <>
        <HeaderWrap>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='movies'>Movies</NavItem>
        </HeaderWrap>
        <Suspense fallback={<Loading />}>
            <Outlet />
        </Suspense>
    </>   

    )
}