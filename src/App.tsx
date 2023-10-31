import React, {useEffect, useRef, useState} from 'react';
import {AppState, AppStateStatus, SafeAreaView, Text, View} from 'react-native';
const App = () => {
  // 현재 앱 상태 확인 로직
  const appState = useRef(AppState.currentState);
  const [, setAppStateVisible] = useState(appState.current);
  const appStateUpdater = (nextAppState: AppStateStatus) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      /// Foreground 상태로 돌아온 경우 Health Check 구동
    }
    console.log(nextAppState);
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  };
  useEffect(() => {
    AppState.addEventListener('change', appStateUpdater);
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Text>g222333</Text>
      </View>
    </SafeAreaView>
  );
};
export default App;
