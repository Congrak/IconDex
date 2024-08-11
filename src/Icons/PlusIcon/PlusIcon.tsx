import PropTypes from "prop-types";
import { IconsProps } from "../types";
import React from "react";

export const PlusIcon = ({
  height = 100,
  width = 100,
  color = "#000000",
}: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill={color}
    >
      <path
        d="M9.91406 2.96875H11.0859C11.1901 2.96875 11.2422 3.02083 11.2422 3.125V16.875C11.2422 16.9792 11.1901 17.0312 11.0859 17.0312H9.91406C9.8099 17.0312 9.75781 16.9792 9.75781 16.875V3.125C9.75781 3.02083 9.8099 2.96875 9.91406 2.96875Z"
        fill={color}
      />
      <path
        d="M3.9375 9.25781H17.0625C17.1667 9.25781 17.2188 9.3099 17.2188 9.41406V10.5859C17.2188 10.6901 17.1667 10.7422 17.0625 10.7422H3.9375C3.83333 10.7422 3.78125 10.6901 3.78125 10.5859V9.41406C3.78125 9.3099 3.83333 9.25781 3.9375 9.25781Z"
        fill={color}
      />
    </svg>
  );
};

PlusIcon.propTypes = {
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
