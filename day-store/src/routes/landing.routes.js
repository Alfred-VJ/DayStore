import {Route, Routes} from 'react-router-dom';
import LandingPage from '../components/landing/LandingPge';

export const LandingRoute = () => {
  return <Routes>
    <Route path='/' element={<LandingPage />} />
  </Routes>
}
