import React, { useEffect } from 'react';

import MainNavigation from '@blocks/MainNavigation';
import SplashScreen from '@blocks/SplashScreen';
import { useBoolean } from '@hooks/useBoolean';
import OnBoardingNavigation from '@blocks/OnBoardingNavigation';

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
