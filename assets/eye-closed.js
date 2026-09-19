// EyeClosedIcon.js
import React from "react";
import Svg, { Path } from "react-native-svg";

export const EyeClosedIcon = ({ size = 24, color = "#000" }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="m15 18-.722-3.25" />
    <Path d="M2 8a10.645 10.645 0 0 0 20 0" />
    <Path d="m20 15-1.726-2.05" />
    <Path d="m4 15 1.726-2.05" />
    <Path d="m9 18 .722-3.25" />
  </Svg>
);
