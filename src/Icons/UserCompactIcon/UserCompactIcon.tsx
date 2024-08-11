import PropTypes from 'prop-types';
import { IconsProps } from '../types';
import React from 'react';

export const UserCompactIcon = ({ height = 100, width = 100, color = '#000000' }: IconsProps) => {
  


  return <svg width={width} height={height} viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M10.0007 10.8542C11.8242 10.8542 13.3024 9.37599 13.3024 7.55248C13.3024 5.72898 11.8242 4.25073 10.0007 4.25073C8.17716 4.25073 6.69892 5.72898 6.69892 7.55248C6.69892 9.37599 8.17716 10.8542 10.0007 10.8542Z' fill={color} />
    <path d='M4.30389 13.6667C5.62016 12.3488 6.93651 12.0583 8.55748 11.9942C9.52642 11.9559 10.506 11.9558 11.475 11.9945C13.0914 12.0592 14.4042 12.3509 15.7231 13.6667C16.2611 14.293 16.5642 14.8798 16.6563 15.6889C16.7359 16.3879 16.371 16.6271 15.9446 16.6271H4.07685C3.64949 16.6271 3.2684 16.3299 3.3435 15.6889C3.43825 14.8801 3.76477 14.292 4.30389 13.6667Z' fill={color} />
  </svg>;
};

UserCompactIcon.propTypes = {
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
