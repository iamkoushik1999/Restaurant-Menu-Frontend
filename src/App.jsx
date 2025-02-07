import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
// React Hot Toast
import { Toaster } from 'react-hot-toast';
// Pages
import Restaurant from './pages/Restaurants/Restaurant';
import RestaurantForm from './pages/Restaurants/RestaurantForm';
import Home from './pages/Home/Home';
import AboutUsPage from './pages/About/AboutUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicy/PrivacyPolicyPage';
import TermsPage from './pages/Terms/TermsPage';
import ContactUsPage from './pages/ContactUs/ContactUsPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

const App = () => {
  return (
    <Router>
      <div>
        {/* React Hot Toast Toaster */}
        <Toaster
          position='top-center'
          duration={3000}
          toastOptions={{
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />

        {/* Application Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='/terms-conditions' element={<TermsPage />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
          {/* <Route path='/not-found' element={<NotFoundPage />} /> */}
          <Route path='/restaurant' element={<Restaurant />} />
          <Route path='/add' element={<RestaurantForm />} />
          <Route path='/edit/:id' element={<RestaurantForm />} />
          {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
