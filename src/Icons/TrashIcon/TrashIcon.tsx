import PropTypes from "prop-types";
import { IconsProps } from "../types";
import React from "react";

export const TrashIcon = ({
  height = 100,
  width = 100,
  color = "#000000",
}: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 19 18"
      fill={color}
    >
      <path
        d="M6.82812 3.23438H6.6875C6.76484 3.23438 6.82812 3.17109 6.82812 3.09375V3.23438H12.1719V3.09375C12.1719 3.17109 12.2352 3.23438 12.3125 3.23438H12.1719V4.5H13.4375V3.09375C13.4375 2.47324 12.933 1.96875 12.3125 1.96875H6.6875C6.06699 1.96875 5.5625 2.47324 5.5625 3.09375V4.5H6.82812V3.23438ZM15.6875 4.5H3.3125C3.00137 4.5 2.75 4.75137 2.75 5.0625V5.625C2.75 5.70234 2.81328 5.76562 2.89062 5.76562H3.95234L4.38652 14.959C4.41465 15.5584 4.91035 16.0312 5.50977 16.0312H13.4902C14.0914 16.0312 14.5854 15.5602 14.6135 14.959L15.0477 5.76562H16.1094C16.1867 5.76562 16.25 5.70234 16.25 5.625V5.0625C16.25 4.75137 15.9986 4.5 15.6875 4.5ZM13.3549 14.7656H5.64512L5.21973 5.76562H13.7803L13.3549 14.7656Z"
        fill={color}
      />
    </svg>
  );
};

TrashIcon.propTypes = {
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
