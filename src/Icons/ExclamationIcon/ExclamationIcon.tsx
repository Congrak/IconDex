import PropTypes from "prop-types";
import { SwitchableProps } from "../types";
import React from "react";

export const ExclamationIcon = ({
  height = 100,
  width = 100,
  color = "#000000",
  outline = false,
}: SwitchableProps) => {
  return outline ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z"
        fill={color}
      />
      <path
        d="M10.875 16.125C10.875 16.4234 10.9935 16.7095 11.2045 16.9205C11.4155 17.1315 11.7016 17.25 12 17.25C12.2984 17.25 12.5845 17.1315 12.7955 16.9205C13.0065 16.7095 13.125 16.4234 13.125 16.125C13.125 15.8266 13.0065 15.5405 12.7955 15.3295C12.5845 15.1185 12.2984 15 12 15C11.7016 15 11.4155 15.1185 11.2045 15.3295C10.9935 15.5405 10.875 15.8266 10.875 16.125ZM11.1875 13.5H12.8125C12.9156 13.5 13 13.4156 13 13.3125V6.9375C13 6.83437 12.9156 6.75 12.8125 6.75H11.1875C11.0844 6.75 11 6.83437 11 6.9375V13.3125C11 13.4156 11.0844 13.5 11.1875 13.5Z"
        fill={color}
      />
    </svg>
  ) : (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.5 15.7598C12.366 15.7598 15.5 12.6258 15.5 8.75977C15.5 4.89377 12.366 1.75977 8.5 1.75977C4.63401 1.75977 1.5 4.89377 1.5 8.75977C1.5 12.6258 4.63401 15.7598 8.5 15.7598ZM9.40002 4.75977V9.75977H7.60002L7.60002 4.75977L9.40002 4.75977ZM9.5 11.7598C9.5 12.3121 9.05229 12.7598 8.5 12.7598C7.94772 12.7598 7.5 12.312 7.5 11.7598C7.5 11.2075 7.94772 10.7598 8.5 10.7598C9.05229 10.7598 9.5 11.2075 9.5 11.7598Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationIcon.propTypes = {
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
   * Alternate fill and no fill
   */
  outline: PropTypes.bool,
};
