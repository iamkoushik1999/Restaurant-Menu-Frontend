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
          <Route path='/' element={<Restaurant />} />
          <Route path='/add' element={<RestaurantForm />} />
          <Route path='/edit/:id' element={<RestaurantForm />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
