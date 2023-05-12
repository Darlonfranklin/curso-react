import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, Login } from '../pages';

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/pagina-inicial" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}