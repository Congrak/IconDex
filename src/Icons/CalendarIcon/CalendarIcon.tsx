import PropTypes from "prop-types";
import { IconsProps } from "../types";
import React from "react";

export const CalendarIcon = ({
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
      <g id="Icon / Outlined / Calendar">
        <path
          id="Vector"
          d="M15.4688 3.23438H12.5156V2.10938C12.5156 2.03203 12.4523 1.96875 12.375 1.96875H11.3906C11.3133 1.96875 11.25 2.03203 11.25 2.10938V3.23438H6.75V2.10938C6.75 2.03203 6.68672 1.96875 6.60938 1.96875H5.625C5.54766 1.96875 5.48438 2.03203 5.48438 2.10938V3.23438H2.53125C2.22012 3.23438 1.96875 3.48574 1.96875 3.79688V15.4688C1.96875 15.7799 2.22012 16.0312 2.53125 16.0312H15.4688C15.7799 16.0312 16.0312 15.7799 16.0312 15.4688V3.79688C16.0312 3.48574 15.7799 3.23438 15.4688 3.23438ZM14.7656 14.7656H3.23438V8.08594H14.7656V14.7656ZM3.23438 6.89062V4.5H5.48438V5.34375C5.48438 5.42109 5.54766 5.48438 5.625 5.48438H6.60938C6.68672 5.48438 6.75 5.42109 6.75 5.34375V4.5H11.25V5.34375C11.25 5.42109 11.3133 5.48438 11.3906 5.48438H12.375C12.4523 5.48438 12.5156 5.42109 12.5156 5.34375V4.5H14.7656V6.89062H3.23438Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

CalendarIcon.propTypes = {
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
