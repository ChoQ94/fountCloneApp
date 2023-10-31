import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme';

const Splash = (props: any) => {
  const {onAnimationFinish} = props;
  const fadeAnim = useRef(new Animated.Value(0)).current; // 기존에는 useState

  useEffect(() => {
    if (onAnimationFinish) {
      Animated.timing(fadeAnim, {
        useNativeDriver: false,
        toValue: 1,
        duration: 1000,
      }).start(onAnimationFinish);
    }
  });

  return (
    <View
      style={[
        styles.splashContainer,
        !onAnimationFinish && styles.inactiveContainer,
      ]}>
      <View>
        <Animated.View>
          <Text>ㅁㄴ</Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 999,
  },
});

export default Splash;
