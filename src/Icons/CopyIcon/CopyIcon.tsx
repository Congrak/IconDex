import PropTypes from "prop-types";
import { IconsProps } from "../types";
import React from "react";

export const CopyIcon = ({
  height = 100,
  width = 100,
  color = "#000000",
}: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.5 1.50012H6.9375C6.83437 1.50012 6.75 1.5845 6.75 1.68762V3.00012C6.75 3.10325 6.83437 3.18762 6.9375 3.18762H18.5625V19.3126C18.5625 19.4157 18.6469 19.5001 18.75 19.5001H20.0625C20.1656 19.5001 20.25 19.4157 20.25 19.3126V2.25012C20.25 1.83528 19.9148 1.50012 19.5 1.50012ZM16.5 4.50012H4.5C4.08516 4.50012 3.75 4.83528 3.75 5.25012V17.6884C3.75 17.8876 3.82969 18.0775 3.97031 18.2181L8.03203 22.2798C8.08359 22.3314 8.14219 22.3736 8.20547 22.4087V22.4532H8.30391C8.38594 22.4837 8.47266 22.5001 8.56172 22.5001H16.5C16.9148 22.5001 17.25 22.165 17.25 21.7501V5.25012C17.25 4.83528 16.9148 4.50012 16.5 4.50012ZM8.20312 20.0673L6.18516 18.047H8.20312V20.0673ZM15.5625 20.8126H9.70312V17.4845C9.70312 16.9665 9.28359 16.547 8.76562 16.547H5.4375V6.18762H15.5625V20.8126Z"
        fill={color}
      />
    </svg>
  );
};

CopyIcon.propTypes = {
  /**
   * How height should the icon be?
   */
  height: PropTypes.number,
  /**
   * How width should the icon be?
   */
  width: PropTypes.number,
  /**
   * What color should the icon be?
   */
  color: PropTypes.string,
};
