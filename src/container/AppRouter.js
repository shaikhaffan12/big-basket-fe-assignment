import NavBar from '../components/NavBar/NavBar';
import LandingPage from './Dashboard/LandingPage';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';

function AppRouter () {
    return (
        <>
        <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
        </BrowserRouter>
        </>
    )
}
export default AppRouter; 