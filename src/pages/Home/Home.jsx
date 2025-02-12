import { useEffect, useState } from 'react';
import LandingPage from '../../components/Home/LandingPage';
import SplashScreen from '../../components/Loader/SplashScreen';

const Home = () => {
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
    <div>
      <LandingPage />
    </div>
  );
};

export default Home;
