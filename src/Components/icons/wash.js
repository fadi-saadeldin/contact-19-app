import * as React from 'react';
import Svg, {Defs, G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 66.9 78.6" {...props}>
      <Defs></Defs>
      <G id="prefix__Layer_2" data-name="Layer 2">
        <G id="prefix__Layer_1-2" data-name="Layer 1">
          <G id="prefix__outline">
            <Path
              className="prefix__cls-1"
              d="M1.14 60.12l9.66 3.22 3.84 3.84A10.47 10.47 0 0019.69 70a2.45 2.45 0 00.38 0v3.57a5 5 0 009.24 2.69A5 5 0 0036 74.61a5 5 0 006.69-1.67A5 5 0 0049.52 71a4.09 4.09 0 00.36-.8h2a5 5 0 004.67-6.86A5 5 0 0060 57.22a4.72 4.72 0 00-.18-.53 5 5 0 002.45-8.15 11.71 11.71 0 00-14.22-18.6A12 12 0 0046 32a8.29 8.29 0 00-4.18-1.12h-.25a1.42 1.42 0 00-.08-.18 5.75 5.75 0 00-6.73-3 29.89 29.89 0 00-13.24 7.87L2.25 28.53a1.68 1.68 0 00-2.15 1 2 2 0 00-.1.58v28.42a1.68 1.68 0 001.14 1.59zm25.62 13.47a1.68 1.68 0 01-3.35 0v-8.37a1.68 1.68 0 013.35 0zm6.69-1.68a1.68 1.68 0 11-3.35 0v-8.36a1.68 1.68 0 013.35 0zm6.69-1.67a1.68 1.68 0 01-3.35 0v-8.36a1.68 1.68 0 013.35 0zm5 0a1.67 1.67 0 01-1.67-1.67v-6.69a1.68 1.68 0 013.35 0v6.69a1.68 1.68 0 01-1.67 1.67zm6.69-3.34h-1.66v-3.35h1.67a1.68 1.68 0 110 3.35zM41.79 35.11a5.15 5.15 0 00.22-.88 5 5 0 013.25 1.37 1.67 1.67 0 002.36-.07 1.42 1.42 0 00.25-.34A8.37 8.37 0 1160.13 46a5 5 0 00-4.07-5.77 5.1 5.1 0 00-.87-.07H36.6a8.38 8.38 0 012.3-1.7 5.7 5.7 0 002.89-3.35zM35.66 31a2.42 2.42 0 011.75 4.48 11.92 11.92 0 00-5.3 5.3l-.16.31a1.68 1.68 0 00.75 2.25 1.75 1.75 0 00.75.17h21.74a1.68 1.68 0 010 3.35H43.48a1.67 1.67 0 100 3.34h15.05a1.68 1.68 0 110 3.35H43.48a1.67 1.67 0 100 3.34h11.71a1.68 1.68 0 010 3.35h-5.31a5 5 0 00-8.07-2.07 5 5 0 00-7.07.38 5.21 5.21 0 00-.5.66 5 5 0 00-6.69 1.67 5 5 0 00-7.48 4.37v1.4A7.17 7.17 0 0117 64.81l-4.11-4.11a1.6 1.6 0 00-.65-.41l-8.9-3V40.51l14.73 2.94a1.67 1.67 0 001.61-.57l2.74-3.29A26.7 26.7 0 0135.66 31zm-16.53 7.32L17.75 40 3.34 37.09V32.5zM52.2 13.39a5.39 5.39 0 007.61-7.26L56.62.81a1.66 1.66 0 00-2.29-.57 1.76 1.76 0 00-.58.57l-3.19 5.32a5.39 5.39 0 001.64 7.26zm1.23-5.54l1.76-2.93L57 7.85a2.05 2.05 0 11-3.52 0zM41.81 25.09a5 5 0 10-5-5 5 5 0 005 5zm0-6.69a1.67 1.67 0 11-1.67 1.67 1.67 1.67 0 011.67-1.67zM26.76 16.72A6.69 6.69 0 1020.07 10a6.69 6.69 0 006.69 6.72zm0-10A3.35 3.35 0 1123.41 10a3.34 3.34 0 013.35-3.31z"
            />
            <Path
              className="prefix__cls-1"
              d="M53 36.75a3.34 3.34 0 015.38 1.37A1.67 1.67 0 0061.5 37a6.69 6.69 0 00-10.77-2.76A1.68 1.68 0 0053 36.75z"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;