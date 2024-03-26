import React, { useEffect } from 'react';

import { useBoolean } from '@/hooks/useBoolean';
import MainNavigation from '@/components/business/MainNavigation';
import SplashScreen from '@/components/business/SplashScreen';
import OnBoardingNavigation from '@/components/business/OnBoardingNavigation';

const App = () => {
  const [isInit, finishInit] = useBoolean();
  const [isLoggedUser] = useBoolean();

  useEffect(() => {
    const timeout = setTimeout(finishInit, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (!isInit) {
    return <SplashScreen />;
  }

  if (isLoggedUser) {
    return <MainNavigation />;
  }

  return <OnBoardingNavigation />;
};

export default App;
