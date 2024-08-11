import PropTypes from "prop-types";
import { ArrowProps } from "../types";
import React from "react";

export const ArrowIcon = ({
  height = 100,
  width = 100,
  color = "#000000",
  direction,
}: ArrowProps) => {
  let transformationStyle: string = "";

  switch (direction) {
    case "right":
      transformationStyle = "rotate(180deg)";
      break;
    case "up":
      transformationStyle = "rotate(90deg)";
      break;
    case "down":
      transformationStyle = "rotate(270deg)";
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: transformationStyle }}
    >
      <path
        d="M20.4366 11.1095H6.72331L14.9311 3.9845C15.0624 3.86965 14.9827 3.65637 14.8092 3.65637H12.735C12.6436 3.65637 12.5569 3.68918 12.4889 3.74778L3.6319 11.4329C3.55078 11.5033 3.48573 11.5902 3.44114 11.6878C3.39655 11.7855 3.37347 11.8916 3.37347 11.999C3.37347 12.1063 3.39655 12.2124 3.44114 12.3101C3.48573 12.4077 3.55078 12.4946 3.6319 12.565L12.5405 20.297C12.5757 20.3275 12.6178 20.3439 12.6624 20.3439H14.8069C14.9803 20.3439 15.06 20.1282 14.9288 20.0157L6.72331 12.8907H20.4366C20.5397 12.8907 20.6241 12.8064 20.6241 12.7032V11.297C20.6241 11.1939 20.5397 11.1095 20.4366 11.1095Z"
        fill={color}
      />
    </svg>
  );
};

ArrowIcon.propTypes = {
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
  /**
   * Alternate direction of arrow
   */
  direction: PropTypes.oneOf(["left", "right", "up", "down"]),
};
