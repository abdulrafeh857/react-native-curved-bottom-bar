/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { CurvedBottomBarView } from '../ShadowView';
import { CurvedView } from './model';
import { View } from 'react-native';

export const CurvedViewComponent: CurvedView = (props) => {
  const { style, width, height, bgColor, path, stroke, strokeWidth } = props;

  return (
    <View
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <CurvedBottomBarView style={style}>
        <Svg width={width} height={height}>
          <Path
            fill={bgColor}
            stroke={stroke}
            strokeWidth={strokeWidth}
            {...{ d: path }}
          />
        </Svg>
      </CurvedBottomBarView>
    </View>
  );
};
