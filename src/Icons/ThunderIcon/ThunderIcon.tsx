import PropTypes from "prop-types";
import { IconsProps } from "../types";
import React from "react";

export const ThunderIcon = ({
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
      <g id="Icon / Outlined / Thunderbolt">
        <path
          id="Vector"
          d="M9.10956 3.85967H6.74305L8.87108 1.1709C8.91512 1.11396 8.87538 1.03125 8.8034 1.03125H4.68378C4.6537 1.03125 4.62469 1.04736 4.60965 1.07422L1.82635 5.88135C1.79305 5.93828 1.83387 6.01025 1.90047 6.01025H3.77391L2.81356 9.85166C2.79315 9.93545 2.89413 9.99453 2.95643 9.93437L9.16864 4.00684C9.2245 3.9542 9.1869 3.85967 9.10956 3.85967ZM4.06288 7.86865L4.71063 5.27979H3.01981L5.05653 1.76279H7.46922L5.23163 4.59121H7.49823L4.06288 7.86865Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

ThunderIcon.propTypes = {
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
