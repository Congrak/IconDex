import PropTypes from "prop-types";
import { IconsProps } from "../types";
import React from "react";

export const LoginIcon = ({
  height = 100,
  width = 120,
  color = "#000000",
}: IconsProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_87_4636)">
        <path
          d="M20.6699 18.8463C20.557 18.8767 20.4415 18.8969 20.3249 18.9069C16.3369 18.9069
12.3489 18.9069 8.36091 18.9069C8.28691 18.9069 8.21391 18.8952 8.09991 18.8864V16.4532H
18.0669V4.19735H17.5669C14.5669 4.19735 11.5669 4.19051 8.56091 4.20516C8.17791 4.20516
8.03091 4.12705 8.05291 3.72575C8.08891 3.07448 8.06291 2.42127 8.06291 1.70947H8.58891C
12.4556 1.70947 16.3239 1.70947 20.1939 1.70947C20.3551 1.71927 20.5155 1.7395
20.6739 1.77001L20.6699 18.8463Z"
          fill={color}
        />

        <path
          d="M0.5 9.12813C0.692 9.11055 0.883 9.07834 1.075 9.07834C4.047 9.07834 7.019 9.07834
9.991 9.07834H10.555V6.6051L15.626 10.3154L10.588 14.0062V11.5652H10.028C7.028 11.5652
4.02633 11.5652 1.023 11.5652C0.847085 11.5506 0.672366 11.5245 0.5 11.4871L0.5
9.12813Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_87_4636">
          <rect
            width="20"
            height="20"
            fill={color}
            transform="translate(0.5 0.121582)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

LoginIcon.propTypes = {
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
