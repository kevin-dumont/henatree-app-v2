import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

const AnimatedG = Animated.createAnimatedComponent(G) as any;

const AnimatedLogo = () => {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, []);

  const leafTranslateX = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const textTranslateX = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 0],
  });

  const textOpacity = anim.interpolate({
    inputRange: [0, 0.4, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <Svg width="230" height="40" viewBox="0 0 230 40" fill="none">
      <AnimatedG style={{ transform: [{ translateX: leafTranslateX }] }}>
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M31.9978 22.3721C33.3544 31.446 28.3493 38.3164 19.494 39.5242C19.8363 38.1328 20.3682 33.3637 20.2846 31.4832C22.7777 30.7352 27.0951 29.7897 28.5545 24.5643C25.1493 26.9329 22.1696 27.3069 20.2846 27.4939C20.1021 21.5723 18.4603 13.3339 16.5752 8.59657C17.5482 23.2553 16.028 31.2339 16.028 31.2339C11.3457 31.4832 6.18785 28.1173 5.08241 27.4939C6.29859 30.4859 10.7376 34.8492 15.3591 35.4102C15.0716 37.2931 14.7969 39.1838 14.485 39.9182C7.7352 39.389 1.35256 33.6571 0.315719 25.6694C-0.584974 18.7306 4.37762 11.5157 7.7352 8.59657C11.0928 5.67742 13.6564 4.05675 13.6564 0.0674502C19.0076 2.31144 30.1355 9.91605 31.9978 22.3721ZM10.4039 25.1085C11.8815 25.1085 13.0794 23.8805 13.0794 22.3658C13.0794 20.8511 11.8815 19.6232 10.4039 19.6232C8.92619 19.6232 7.72829 20.8511 7.72829 22.3658C7.72829 23.8805 8.92619 25.1085 10.4039 25.1085ZM24.9108 21.3853C26.3885 21.3853 27.5864 20.1574 27.5864 18.6426C27.5864 17.1279 26.3885 15.9 24.9108 15.9C23.4331 15.9 22.2352 17.1279 22.2352 18.6426C22.2352 20.1574 23.4331 21.3853 24.9108 21.3853Z"
          fill="#1A2A6C"
        />
      </AnimatedG>
      <AnimatedG
        style={{
          opacity: textOpacity,
          transform: [{ translateX: textTranslateX }],
        }}>
        <Path
          d="M47.6818 35.2207V5.03095L53.5183 4.06744V14.1842C53.91 14.0504 54.4061 13.93 55.0068 13.8229C55.6335 13.6891 56.2341 13.6222 56.8086 13.6222C58.4799 13.6222 59.864 13.8631 60.9608 14.3448C62.0837 14.7998 62.9716 15.4555 63.6244 16.312C64.3034 17.1684 64.7734 18.1854 65.0346 19.3631C65.3218 20.5407 65.4654 21.8521 65.4654 23.2974V35.2207H59.629V24.02C59.629 22.093 59.3809 20.728 58.8847 19.9251C58.4146 19.1222 57.5268 18.7207 56.2211 18.7207C55.6988 18.7207 55.2026 18.7743 54.7326 18.8813C54.2886 18.9616 53.8839 19.0553 53.5183 19.1623V35.2207H47.6818Z"
          fill="#1A2A6C"
        />
        <Path
          d="M69.7691 24.8229C69.7691 22.9494 70.0433 21.3168 70.5917 19.9251C71.1662 18.5066 71.9104 17.329 72.8244 16.3923C73.7384 15.4555 74.783 14.7463 75.9581 14.2645C77.1593 13.7828 78.3867 13.5419 79.6402 13.5419C82.565 13.5419 84.876 14.4653 86.5735 16.312C88.2709 18.1319 89.1196 20.8217 89.1196 24.3813C89.1196 24.7292 89.1065 25.1173 89.0804 25.5455C89.0543 25.947 89.0282 26.3083 89.0021 26.6295H75.7622C75.8928 27.8606 76.4543 28.8375 77.4466 29.5601C78.4389 30.2828 79.7708 30.6441 81.4421 30.6441C82.5127 30.6441 83.5573 30.5504 84.5757 30.3631C85.6203 30.149 86.469 29.8947 87.1219 29.6003L87.9053 34.458C87.5919 34.6185 87.1741 34.7791 86.6518 34.9397C86.1295 35.1003 85.542 35.2341 84.8891 35.3412C84.2624 35.475 83.5834 35.582 82.8522 35.6623C82.121 35.7426 81.3898 35.7828 80.6586 35.7828C78.8045 35.7828 77.1855 35.5018 75.8014 34.9397C74.4435 34.3777 73.3075 33.6149 72.3935 32.6514C71.5056 31.6611 70.8397 30.4969 70.3958 29.1587C69.978 27.8205 69.7691 26.3752 69.7691 24.8229ZM83.4789 22.5346C83.4528 22.0261 83.3614 21.5309 83.2048 21.0492C83.0742 20.5674 82.8522 20.1392 82.5388 19.7645C82.2516 19.3898 81.8729 19.082 81.4029 18.8412C80.9589 18.6003 80.3975 18.4799 79.7185 18.4799C79.0657 18.4799 78.5042 18.6003 78.0342 18.8412C77.5641 19.0553 77.1724 19.3497 76.859 19.7244C76.5457 20.0991 76.2976 20.5407 76.1148 21.0492C75.9581 21.5309 75.8406 22.0261 75.7622 22.5346H83.4789Z"
          fill="#1A2A6C"
        />
        <Path
          d="M93.6237 14.8266C94.616 14.5322 95.8956 14.2645 97.4624 14.0236C99.0293 13.756 100.674 13.6222 102.398 13.6222C104.148 13.6222 105.597 13.8631 106.746 14.3448C107.921 14.7998 108.848 15.4555 109.527 16.312C110.206 17.1684 110.689 18.1854 110.976 19.3631C111.264 20.5407 111.407 21.8521 111.407 23.2974V35.2207H105.571V24.02C105.571 22.093 105.323 20.728 104.827 19.9251C104.33 19.1222 103.403 18.7207 102.045 18.7207C101.628 18.7207 101.184 18.7475 100.714 18.801C100.244 18.8278 99.8257 18.8679 99.4601 18.9215V35.2207H93.6237V14.8266Z"
          fill="#1A2A6C"
        />
        <Path
          d="M124.564 31.0455C125.138 31.0455 125.687 31.0322 126.209 31.0054C126.731 30.9786 127.149 30.9385 127.462 30.885V26.3485C127.227 26.2949 126.875 26.2414 126.405 26.1879C125.935 26.1344 125.504 26.1076 125.112 26.1076C124.564 26.1076 124.041 26.1477 123.545 26.228C123.075 26.2816 122.657 26.402 122.292 26.5893C121.926 26.7767 121.639 27.0309 121.43 27.3521C121.221 27.6733 121.117 28.0747 121.117 28.5565C121.117 29.4932 121.417 30.149 122.018 30.5236C122.644 30.8716 123.493 31.0455 124.564 31.0455ZM124.094 13.5419C125.817 13.5419 127.253 13.7426 128.402 14.1441C129.551 14.5455 130.465 15.121 131.144 15.8704C131.849 16.6198 132.346 17.5297 132.633 18.6003C132.92 19.6708 133.064 20.8618 133.064 22.1733V34.6185C132.228 34.8059 131.066 35.02 129.578 35.2609C128.089 35.5285 126.287 35.6623 124.172 35.6623C122.84 35.6623 121.626 35.5419 120.529 35.301C119.458 35.0601 118.531 34.6721 117.748 34.1368C116.964 33.5747 116.364 32.8521 115.946 31.9689C115.528 31.0857 115.319 30.0018 115.319 28.7171C115.319 27.4859 115.554 26.4421 116.024 25.5857C116.52 24.7292 117.173 24.0468 117.983 23.5382C118.792 23.0297 119.719 22.6684 120.764 22.4543C121.809 22.2134 122.892 22.093 124.015 22.093C124.773 22.093 125.438 22.1331 126.013 22.2134C126.614 22.267 127.097 22.3472 127.462 22.4543V21.8923C127.462 20.8752 127.162 20.0589 126.561 19.4434C125.961 18.8278 124.916 18.52 123.428 18.52C122.435 18.52 121.456 18.6003 120.49 18.7609C119.524 18.8947 118.688 19.0954 117.983 19.3631L117.239 14.5455C117.578 14.4385 117.996 14.3314 118.492 14.2244C119.014 14.0906 119.576 13.9835 120.176 13.9032C120.777 13.7962 121.404 13.7159 122.057 13.6623C122.736 13.582 123.415 13.5419 124.094 13.5419Z"
          fill="#1A2A6C"
        />
        <Path
          d="M138.146 8.84482L143.982 7.88131V14.1039H150.994V19.082H143.982V26.5091C143.982 27.767 144.191 28.7706 144.609 29.52C145.053 30.2694 145.928 30.6441 147.233 30.6441C147.86 30.6441 148.5 30.5906 149.153 30.4835C149.832 30.3497 150.445 30.1757 150.994 29.9616L151.816 34.6185C151.111 34.9129 150.328 35.1672 149.466 35.3813C148.604 35.5954 147.547 35.7025 146.293 35.7025C144.7 35.7025 143.381 35.4884 142.337 35.0601C141.292 34.6052 140.457 33.9896 139.83 33.2134C139.203 32.4105 138.759 31.447 138.498 30.3229C138.263 29.1988 138.146 27.9543 138.146 26.5893V8.84482Z"
          fill="#1A2A6C"
        />
        <Path
          d="M168.164 19.4032C167.642 19.2694 167.028 19.1356 166.323 19.0017C165.618 18.8412 164.86 18.7609 164.051 18.7609C163.685 18.7609 163.241 18.801 162.719 18.8813C162.223 18.9348 161.844 19.0017 161.583 19.082V35.2207H155.747V15.228C156.791 14.8533 158.018 14.5054 159.429 14.1842C160.865 13.8363 162.458 13.6623 164.208 13.6623C164.521 13.6623 164.9 13.6891 165.343 13.7426C165.787 13.7694 166.231 13.8229 166.675 13.9032C167.119 13.9567 167.563 14.037 168.007 14.1441C168.451 14.2244 168.83 14.3314 169.143 14.4653L168.164 19.4032Z"
          fill="#1A2A6C"
        />
        <Path
          d="M170.91 24.8229C170.91 22.9494 171.184 21.3168 171.733 19.9251C172.307 18.5066 173.051 17.329 173.965 16.3923C174.879 15.4555 175.924 14.7463 177.099 14.2645C178.3 13.7828 179.528 13.5419 180.781 13.5419C183.706 13.5419 186.017 14.4653 187.714 16.312C189.412 18.1319 190.261 20.8217 190.261 24.3813C190.261 24.7292 190.248 25.1173 190.221 25.5455C190.195 25.947 190.169 26.3083 190.143 26.6295H176.903C177.034 27.8606 177.595 28.8375 178.588 29.5601C179.58 30.2828 180.912 30.6441 182.583 30.6441C183.654 30.6441 184.698 30.5504 185.717 30.3631C186.761 30.149 187.61 29.8947 188.263 29.6003L189.046 34.458C188.733 34.6185 188.315 34.7791 187.793 34.9397C187.271 35.1003 186.683 35.2341 186.03 35.3412C185.403 35.475 184.724 35.582 183.993 35.6623C183.262 35.7426 182.531 35.7828 181.8 35.7828C179.946 35.7828 178.326 35.5018 176.942 34.9397C175.584 34.3777 174.449 33.6149 173.535 32.6514C172.647 31.6611 171.981 30.4969 171.537 29.1587C171.119 27.8205 170.91 26.3752 170.91 24.8229ZM184.62 22.5346C184.594 22.0261 184.502 21.5309 184.346 21.0492C184.215 20.5674 183.993 20.1392 183.68 19.7645C183.393 19.3898 183.014 19.082 182.544 18.8412C182.1 18.6003 181.538 18.4799 180.86 18.4799C180.207 18.4799 179.645 18.6003 179.175 18.8412C178.705 19.0553 178.313 19.3497 178 19.7244C177.687 20.0991 177.439 20.5407 177.256 21.0492C177.099 21.5309 176.982 22.0261 176.903 22.5346H184.62Z"
          fill="#1A2A6C"
        />
        <Path
          d="M193.785 24.8229C193.785 22.9494 194.06 21.3168 194.608 19.9251C195.182 18.5066 195.927 17.329 196.841 16.3923C197.755 15.4555 198.799 14.7463 199.974 14.2645C201.176 13.7828 202.403 13.5419 203.657 13.5419C206.581 13.5419 208.892 14.4653 210.59 16.312C212.287 18.1319 213.136 20.8217 213.136 24.3813C213.136 24.7292 213.123 25.1173 213.097 25.5455C213.071 25.947 213.045 26.3083 213.018 26.6295H199.779C199.909 27.8606 200.471 28.8375 201.463 29.5601C202.455 30.2828 203.787 30.6441 205.458 30.6441C206.529 30.6441 207.574 30.5504 208.592 30.3631C209.637 30.149 210.485 29.8947 211.138 29.6003L211.922 34.458C211.608 34.6185 211.19 34.7791 210.668 34.9397C210.146 35.1003 209.558 35.2341 208.905 35.3412C208.279 35.475 207.6 35.582 206.869 35.6623C206.137 35.7426 205.406 35.7828 204.675 35.7828C202.821 35.7828 201.202 35.5018 199.818 34.9397C198.46 34.3777 197.324 33.6149 196.41 32.6514C195.522 31.6611 194.856 30.4969 194.412 29.1587C193.994 27.8205 193.785 26.3752 193.785 24.8229ZM207.495 22.5346C207.469 22.0261 207.378 21.5309 207.221 21.0492C207.09 20.5674 206.869 20.1392 206.555 19.7645C206.268 19.3898 205.889 19.082 205.419 18.8412C204.975 18.6003 204.414 18.4799 203.735 18.4799C203.082 18.4799 202.521 18.6003 202.05 18.8412C201.58 19.0553 201.189 19.3497 200.875 19.7244C200.562 20.0991 200.314 20.5407 200.131 21.0492C199.974 21.5309 199.857 22.0261 199.779 22.5346H207.495Z"
          fill="#1A2A6C"
        />
      </AnimatedG>
    </Svg>
  );
};

export default AnimatedLogo;
