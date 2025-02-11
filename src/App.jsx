// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // React Hot Toast
// import { Toaster } from 'react-hot-toast';
// // Pages
// import RestaurantListPage from './pages/Restaurants/RestaurantListPage';
// import RestaurantFormPage from './pages/Restaurants/RestaurantFormPage';
// import Home from './pages/Home/Home';
// import AboutUsPage from './pages/About/AboutUsPage';
// import PrivacyPolicyPage from './pages/PrivacyPolicy/PrivacyPolicyPage';
// import TermsPage from './pages/Terms/TermsPage';
// import ContactUsPage from './pages/ContactUs/ContactUsPage';
// import NotFoundPage from './pages/NotFound/NotFoundPage';
// import CategoryFormPage from './pages/Category/CategoryFormPage';
// import CategoryListPage from './pages/Category/CategoryListPage';

// // Implement Lazy Loading
// // Implement Start Page Flash

// const App = () => {
//   return (
//     <Router>
//       <div>
//         {/* React Hot Toast Toaster */}
//         <Toaster
//           position='top-center'
//           duration={3000}
//           toastOptions={{
//             style: {
//               background: '#333',
//               color: '#fff',
//             },
//           }}
//         />

//         {/* Application Routes */}
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<AboutUsPage />} />
//           <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
//           <Route path='/terms-conditions' element={<TermsPage />} />
//           <Route path='/contact-us' element={<ContactUsPage />} />
//           {/* Restaurant */}
//           <Route path='/restaurant' element={<RestaurantListPage />} />
//           <Route path='/restaurant/add' element={<RestaurantFormPage />} />
//           <Route path='/restaurant/edit/:id' element={<RestaurantFormPage />} />
//           {/* Category */}
//           <Route path='/add-category/:id' element={<CategoryFormPage />} />
//           <Route path='/categories/:id' element={<CategoryListPage />} />
//           {/* 404 */}
//           <Route path='*' element={<NotFoundPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';
// React Hot Toast
import { Toaster } from 'react-hot-toast';
import { Box } from '@mui/material';
import { DotLoader } from 'react-spinners';

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

// Splash Screen Component
const SplashScreen = () => (
  <Box display='flex' justifyContent='center' alignItems='center' height='90vh'>
    <DotLoader
      color='#1976d2'
      margin={2}
      radius={20}
      speedMultiplier={1}
      aria-label='loading'
      data-testid='loader'
      size={100}
    />
  </Box>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <SplashScreen />
  ) : (
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
        <Suspense fallback={<SplashScreen />}>
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
