import PropTypes from "prop-types";
import { IconsProps } from "../types";
import React from "react";

export const MasterCardIcon = ({ height = 100, width = 100 }: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 60 43"
      fill="none"
    >
      <g clip-path="url(#clip0_738_38849)">
        <path
          d="M54.8571 43H5.14286C2.29714 43 0 40.6952 0 37.84V5.16C0 2.3048 2.29714 0 5.14286 0H54.8571C57.7029 0 60 2.3048 60 5.16V37.84C60 40.6952 57.7029 43 54.8571 43Z"
          fill="#F9F9F9"
        />
        <path
          d="M54.8571 1.72C56.7429 1.72 58.2857 3.268 58.2857 5.16V37.84C58.2857 39.732 56.7429 41.28 54.8571 41.28H5.14286C3.25714 41.28 1.71429 39.732 1.71429 37.84V5.16C1.71429 3.268 3.25714 1.72 5.14286 1.72H54.8571ZM54.8571 0H5.14286C2.29714 0 0 2.3048 0 5.16V37.84C0 40.6952 2.29714 43 5.14286 43H54.8571C57.7029 43 60 40.6952 60 37.84V5.16C60 2.3048 57.7029 0 54.8571 0Z"
          fill="#E7E7E7"
        />
        <path
          d="M47.2812 21.5028C47.2812 27.4392 42.4897 32.2467 36.5936 32.2467C30.6975 32.2467 25.9062 27.4394 25.9062 21.5028C25.9062 15.5662 30.698 10.7588 36.5935 10.7588C42.4889 10.7588 47.2812 15.5662 47.2812 21.5028Z"
          fill="#F79F1A"
        />
        <path
          d="M34.0938 21.5029C34.0938 27.4394 29.3021 32.2469 23.4063 32.2469C17.5105 32.2469 12.7188 27.4395 12.7188 21.5029C12.7188 15.5664 17.5102 10.7588 23.4063 10.7588C29.3024 10.7588 34.0938 15.5664 34.0938 21.5029Z"
          fill="#EA001B"
        />
        <path
          d="M29.9897 13.0371C27.4896 15.0019 25.9062 18.0538 25.9062 21.5029C25.9062 24.9521 27.5105 28.0035 29.9897 29.9684C32.4896 28.0035 34.0731 24.9517 34.0731 21.5026C34.0731 18.0535 32.4896 15.0019 29.9897 13.0371Z"
          fill="#FF5F01"
        />
      </g>
      <defs>
        <clipPath id="clip0_738_38849">
          <rect width="60" height="43" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

MasterCardIcon.propTypes = {
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
