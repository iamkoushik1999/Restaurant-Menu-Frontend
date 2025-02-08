import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// React Hot Toast
import { Toaster } from 'react-hot-toast';
// Pages
import RestaurantListPage from './pages/Restaurants/RestaurantListPage';
import RestaurantFormPage from './pages/Restaurants/RestaurantFormPage';
import Home from './pages/Home/Home';
import AboutUsPage from './pages/About/AboutUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicy/PrivacyPolicyPage';
import TermsPage from './pages/Terms/TermsPage';
import ContactUsPage from './pages/ContactUs/ContactUsPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import CategoryFormPage from './pages/Category/CategoryFormPage';
import CategoryListPage from './pages/Category/CategoryListPage';

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
          {/* Restaurant */}
          <Route path='/restaurant' element={<RestaurantListPage />} />
          <Route path='/restaurant/add' element={<RestaurantFormPage />} />
          <Route path='/restaurant/edit/:id' element={<RestaurantFormPage />} />
          {/* Category */}
          <Route path='/add-category/:id' element={<CategoryFormPage />} />
          <Route path='/categories/:id' element={<CategoryListPage />} />
          {/* 404 */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
