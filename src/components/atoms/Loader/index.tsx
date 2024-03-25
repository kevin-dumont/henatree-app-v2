import React, { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Loader = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{ transform: [{ rotate: spin }] }}>
      <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <Path
          d="M8 1.33301V3.99967"
          stroke="#FFBC40"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          opacity="0.4"
          d="M8 12V14.6667"
          stroke="#FFBC40"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M3.2868 3.28638L5.17347 5.17304"
          stroke="#FFBC40"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          opacity="0.3"
          d="M10.8265 10.8267L12.7132 12.7133"
          stroke="#FFBC40"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          opacity="0.8"
          d="M1.33325 8H3.99992"
          stroke="#FFBC40"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          opacity="0.2"
          d="M12 8H14.6667"
          stroke="#FFBC40"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          opacity="0.7"
          d="M3.2868 12.7133L5.17347 10.8267"
          stroke="#FFBC40"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          opacity="0.1"
          d="M10.8265 5.17304L12.7132 3.28638"
          stroke="#FFBC40"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </Animated.View>
  );
};

export default Loader;
