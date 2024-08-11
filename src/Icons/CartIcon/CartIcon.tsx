import PropTypes from "prop-types";
import { IconsProps } from "../types";
import React from "react";

export const CartIcon = ({
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
        d="M18.5259 13.709H6.89502L7.479 12.5195L17.1821 12.502C17.5103 12.502 17.7915 12.2676 17.8501 11.9434L19.1938 4.42187C19.229 4.22461 19.1763 4.02148 19.0474 3.86719C18.9837 3.79125 18.9042 3.73008 18.8145 3.68792C18.7248 3.64577 18.627 3.62363 18.5278 3.62305L6.18408 3.58203L6.07861 3.08594C6.01221 2.76953 5.72705 2.53906 5.40283 2.53906H2.38525C2.2024 2.53906 2.02703 2.6117 1.89774 2.741C1.76844 2.8703 1.6958 3.04566 1.6958 3.22852C1.6958 3.41137 1.76844 3.58674 1.89774 3.71603C2.02703 3.84533 2.2024 3.91797 2.38525 3.91797H4.84424L5.30518 6.10937L6.43994 11.6035L4.979 13.9883C4.90314 14.0907 4.85744 14.2123 4.84708 14.3393C4.83673 14.4663 4.86213 14.5937 4.92041 14.707C5.0376 14.9395 5.27393 15.0859 5.53564 15.0859H6.76221C6.50072 15.4332 6.35948 15.8563 6.35986 16.291C6.35986 17.3965 7.2583 18.2949 8.36377 18.2949C9.46924 18.2949 10.3677 17.3965 10.3677 16.291C10.3677 15.8555 10.2231 15.4316 9.96533 15.0859H13.1118C12.8503 15.4332 12.7091 15.8563 12.7095 16.291C12.7095 17.3965 13.6079 18.2949 14.7134 18.2949C15.8188 18.2949 16.7173 17.3965 16.7173 16.291C16.7173 15.8555 16.5728 15.4316 16.3149 15.0859H18.5278C18.9067 15.0859 19.2173 14.7773 19.2173 14.3965C19.2161 14.2138 19.1428 14.039 19.0133 13.9102C18.8838 13.7814 18.7085 13.7091 18.5259 13.709ZM6.47119 4.94141L17.7173 4.97852L16.6157 11.1465L7.78174 11.1621L6.47119 4.94141ZM8.36377 16.9082C8.02393 16.9082 7.74658 16.6309 7.74658 16.291C7.74658 15.9512 8.02393 15.6738 8.36377 15.6738C8.70361 15.6738 8.98096 15.9512 8.98096 16.291C8.98096 16.4547 8.91593 16.6117 8.80019 16.7274C8.68444 16.8432 8.52746 16.9082 8.36377 16.9082ZM14.7134 16.9082C14.3735 16.9082 14.0962 16.6309 14.0962 16.291C14.0962 15.9512 14.3735 15.6738 14.7134 15.6738C15.0532 15.6738 15.3306 15.9512 15.3306 16.291C15.3306 16.4547 15.2655 16.6117 15.1498 16.7274C15.034 16.8432 14.8771 16.9082 14.7134 16.9082Z"
        fill={color}
      />
    </svg>
  );
};

CartIcon.propTypes = {
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
