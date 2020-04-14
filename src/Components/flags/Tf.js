import * as React from 'react';
import Svg, {Defs, Path, Use} from 'react-native-svg';

function SvgTf(props) {
  return (
    <Svg viewBox="0 0 640 480" {...props}>
      <Defs>
        <Path
          id="tf_svg__a"
          fill="#fff"
          d="M0-21l12.3 38L-20-6.5h40L-12.3 17z"
        />
      </Defs>
      <Path fill="#002395" d="M0 0h640v480H0z" />
      <Path fill="#fff" d="M0 0h292.8v196.8H0z" />
      <Path fill="#002395" d="M0 0h96v192H0z" />
      <Path fill="#ed2939" d="M192 0h96v192h-96z" />
      <Path
        fill="#fff"
        d="M426 219.6l15.4 24.6h44V330l-33-51.6-44.4 70.8h21.6l22.8-40.8 46.8 84 46.8-84 22.8 40.8h21.6L546 278.4 513 330v-47.4h19.8l14.7-23.4H513v-15h44l15.4-24.6H426zm51.6 105h-48v16.8h48zm91.2 0h-48v16.8h48z"
      />
      <Use
        width="100%"
        height="100%"
        x={416}
        y={362}
        transform="scale(1.2)"
        xlinkHref="#tf_svg__a"
      />
      <Use
        width="100%"
        height="100%"
        x={371}
        y={328}
        transform="scale(1.2)"
        xlinkHref="#tf_svg__a"
      />
      <Use
        width="100%"
        height="100%"
        x={461}
        y={328}
        transform="scale(1.2)"
        xlinkHref="#tf_svg__a"
      />
      <Use
        width="100%"
        height="100%"
        x={333}
        y={227}
        transform="scale(1.2)"
        xlinkHref="#tf_svg__a"
      />
      <Use
        width="100%"
        height="100%"
        x={499}
        y={227}
        transform="scale(1.2)"
        xlinkHref="#tf_svg__a"
      />
    </Svg>
  );
}

export default SvgTf;