import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// React Hot Toast
import { Toaster } from 'react-hot-toast';
// Components
import Loader from './components/Loader/CustomLoader';

// Lazy Loading Pages
const Home = lazy(() => import('./pages/Home/Home'));
const AboutUsPage = lazy(() => import('./pages/About/AboutUsPage'));
const PrivacyPolicyPage = lazy(() =>
  import('./pages/PrivacyPolicy/PrivacyPolicyPage')
);
const TermsPage = lazy(() => import('./pages/Terms/TermsPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUs/ContactUsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'));

// Restaurant Pages
const RestaurantListPage = lazy(() =>
  import('./pages/Restaurants/RestaurantListPage')
);
const RestaurantFormPage = lazy(() =>
  import('./pages/Restaurants/RestaurantFormPage')
);

// Category Pages
const CategoryFormPage = lazy(() =>
  import('./pages/Category/CategoryFormPage')
);
const CategoryListPage = lazy(() =>
  import('./pages/Category/CategoryListPage')
);

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
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUsPage />} />
            <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
            <Route path='/terms-conditions' element={<TermsPage />} />
            <Route path='/contact-us' element={<ContactUsPage />} />
            {/* Restaurant Routes */}
            <Route path='/restaurant' element={<RestaurantListPage />} />
            <Route path='/restaurant/add' element={<RestaurantFormPage />} />
            <Route
              path='/restaurant/edit/:id'
              element={<RestaurantFormPage />}
            />
            {/* Category Routes */}
            <Route path='/add-category/:id' element={<CategoryFormPage />} />
            <Route path='/categories/:id' element={<CategoryListPage />} />
            {/* 404 */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
