import PropTypes from "prop-types";
import { IconsProps } from "../types";
import React from "react";

export const MovieCameraIcon = ({
  height = 100,
  width = 100,
  color = "#000000",
}: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
    >
      <g id="Icon / Outlined / VideoCamera">
        <path
          id="Vector"
          d="M16.0312 5.31387L13.7812 6.60938V3.9375C13.7812 3.31699 13.2768 2.8125 12.6562 2.8125H2.25C1.62949 2.8125 1.125 3.31699 1.125 3.9375V14.0625C1.125 14.683 1.62949 15.1875 2.25 15.1875H12.6562C13.2768 15.1875 13.7812 14.683 13.7812 14.0625V11.3906L16.0312 12.6861C16.4057 12.9023 16.875 12.6316 16.875 12.201V5.80078C16.875 5.36836 16.4057 5.09766 16.0312 5.31387ZM12.5156 13.9219H2.39062V4.07812H12.5156V13.9219ZM15.6094 10.9863L13.7812 9.93516V8.0666L15.6094 7.01367V10.9863ZM3.65625 6.32812H5.625C5.70234 6.32812 5.76562 6.26484 5.76562 6.1875V5.34375C5.76562 5.26641 5.70234 5.20312 5.625 5.20312H3.65625C3.57891 5.20312 3.51562 5.26641 3.51562 5.34375V6.1875C3.51562 6.26484 3.57891 6.32812 3.65625 6.32812Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

MovieCameraIcon.propTypes = {
  /**
   * How height should the icon be?
   */
  height: PropTypes.number,
  /**
   * How width should the icon be?
   */
  width: PropTypes.number,
  /**
   * Alternate white and dark mode
   */
  color: PropTypes.string,
};
