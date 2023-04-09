import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navigation } from './components/navigation'
import { HomePage, PokeDetails, SearchPage } from './pages'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<HomePage />} />
                <Route path="pokemon/:id" element={<PokeDetails />} />
                <Route path="search" element={<SearchPage/>} />
            </Route>
        
        {/* Route to when not found nothing */}
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>

    );
};