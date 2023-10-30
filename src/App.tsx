import React, {useRef, useState} from 'react';
import {AppState, AppStateStatus, SafeAreaView} from 'react-native';

const App = () => {
  // 현재 앱 상태 확인 로직
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const stateUpdater = (nextAppState: AppStateStatus) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      /// Foreground 상태로 돌아온 경우 Health Check 구동
      console.log('come back');
    }
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  };
  console.log(typeof appState.current);

  return <SafeAreaView />;
};

export default App;
