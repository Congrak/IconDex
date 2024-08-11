import PropTypes from "prop-types";
import { IconsProps } from "../types";
import React from "react";

export const BriefcaseIcon = ({
  height = 100,
  width = 100,
  color = "#000000",
}: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.79165 1.37516V1.8335H9.62498C10.1312 1.8335 10.5416 2.2439 10.5416 2.75016V8.7085C10.5416 9.21476 10.1312 9.62516 9.62498 9.62516H1.37498C0.868718 9.62516 0.458313 9.21476 0.458313 8.7085V2.75016C0.458313 2.2439 0.868719 1.8335 1.37498 1.8335H3.20831V1.37516C3.20831 0.868902 3.61872 0.458496 4.12498 0.458496H6.87498C7.38124 0.458496 7.79165 0.868902 7.79165 1.37516ZM4.12498 1.37516H6.87498V1.8335H4.12498V1.37516ZM1.37498 4.5835C1.37498 5.08976 1.78539 5.50016 2.29165 5.50016H8.70831C9.21457 5.50016 9.62498 5.08976 9.62498 4.5835V2.75016H1.37498V4.5835ZM9.62498 6.17156C9.35532 6.32755 9.04224 6.41683 8.70831 6.41683H8.24998V6.87516C8.24998 7.12829 8.04478 7.3335 7.79165 7.3335C7.53852 7.3335 7.33331 7.12829 7.33331 6.87516V6.41683H3.66665V6.87516C3.66665 7.12829 3.46144 7.3335 3.20831 7.3335C2.95518 7.3335 2.74998 7.12829 2.74998 6.87516V6.41683H2.29165C1.95772 6.41683 1.64464 6.32755 1.37498 6.17156L1.37498 8.7085H9.62498V6.17156Z"
        fill={color}
      />
    </svg>
  );
};

BriefcaseIcon.propTypes = {
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
