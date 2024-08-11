import PropTypes from "prop-types";
import { IconsProps } from "../types";
import React from "react";

export const PasswordIcon = ({
  height = 100,
  width = 100,
  color = "#000000",
}: IconsProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.99956 9.99964C10.319 9.99302 10.6332 10.0817 10.902 10.2543C11.1708 10.427 11.3822 10.6758 11.509 10.969C11.6359 11.2623 11.6725 11.5867 11.6143 11.9008C11.556 12.215 11.4055 12.5046 11.182 12.7329C10.9585 12.9612 10.672 13.1177 10.3591 13.1825C10.0463 13.2473 9.72119 13.2175 9.42536 13.0968C9.12953 12.9761 8.87635 12.77 8.6981 12.5049C8.51986 12.2397 8.42463 11.9275 8.42456 11.608C8.42144 11.1862 8.58532 10.7804 8.88041 10.479C9.1755 10.1777 9.57784 10.0054 9.99956 9.99964ZM9.99956 5.17464C9.57784 5.18035 9.1755 5.35269 8.88041 5.65403C8.58532 5.95537 8.42144 6.36122 8.42456 6.78297H11.5746C11.5775 6.36136 11.4135 5.95572 11.1184 5.65457C10.8233 5.35341 10.4211 5.18035 9.99956 5.17464ZM13.9379 16.4321H6.0604C5.63882 16.4264 5.23661 16.2542 4.94154 15.953C4.64647 15.6519 4.4825 15.2462 4.4854 14.8246V8.39214C4.48227 7.97039 4.64615 7.56453 4.94124 7.2632C5.23634 6.96186 5.63867 6.78952 6.0604 6.78381H6.8479C6.84166 5.94002 7.16964 5.12806 7.76019 4.52534C8.35073 3.92261 9.15582 3.57813 9.99956 3.56714C10.8434 3.57791 11.6488 3.9223 12.2395 4.52505C12.8302 5.12779 13.1583 5.93988 13.1521 6.78381H13.9396C14.3613 6.78952 14.7636 6.96186 15.0587 7.2632C15.3538 7.56453 15.5177 7.97039 15.5146 8.39214V14.8246C15.5177 15.2467 15.3536 15.6528 15.0581 15.9542C14.7627 16.2555 14.3599 16.4277 13.9379 16.433V16.4321Z"
        fill={color}
      />
    </svg>
  );
};

PasswordIcon.propTypes = {
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
