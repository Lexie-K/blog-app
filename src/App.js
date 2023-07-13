import { Routes, Route, HashRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import DetailsPage from './pages/DetailsPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
