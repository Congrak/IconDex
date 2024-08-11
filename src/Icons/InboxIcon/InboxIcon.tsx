import PropTypes from "prop-types";
import { IconsProps } from "../types";
import React from "react";

export const InboxIcon = ({
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
      <path
        d="M15.5606 7.84563L15.5571 7.83157L13.5848 2.82004C13.4969 2.53704 13.235 2.34192 12.9379 2.34192H4.94339C4.64457 2.34192 4.37914 2.54055 4.29476 2.82708L2.45082 7.78762L2.44554 7.79993L2.44203 7.81399C2.41917 7.90012 2.41214 7.98801 2.42445 8.07414C2.42269 8.10227 2.42093 8.1304 2.42093 8.15852V14.5904C2.4214 14.8737 2.53415 15.1452 2.73448 15.3456C2.9348 15.5459 3.20638 15.6586 3.48968 15.6591H14.5147C15.1035 15.6591 15.5834 15.1792 15.5852 14.5904V8.15852C15.5852 8.13567 15.5852 8.11282 15.5834 8.09348C15.5905 8.00735 15.5834 7.92473 15.5606 7.84563ZM10.361 7.08977L10.3557 7.36575C10.3416 8.155 9.79671 8.68586 9.00042 8.68586C8.61195 8.68586 8.27796 8.56106 8.03714 8.32375C7.79632 8.08645 7.66449 7.75598 7.65746 7.36575L7.65218 7.08977H4.0346L5.43207 3.69192H12.4493L13.8854 7.08977H10.361ZM3.76917 8.43977H6.53421C6.96136 9.44348 7.87015 10.0359 9.00218 10.0359C9.59456 10.0359 10.1448 9.87063 10.5895 9.55774C10.9797 9.28352 11.2838 8.90032 11.4807 8.43977H14.2317V14.3091H3.76917V8.43977Z"
        fill={color}
      />
    </svg>
  );
};

InboxIcon.propTypes = {
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
