import PropTypes from 'prop-types';



import { IconsProps } from '../types';

export const ClockOutlineIcon = ({ height = 100, width = 100, color = '#000000' }: IconsProps) => {
  


  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z" fill={color} />
      <path d="M16.0945 14.9672L12.7523 12.5508V6.75C12.7523 6.64687 12.668 6.5625 12.5648 6.5625H11.4375C11.3344 6.5625 11.25 6.64687 11.25 6.75V13.2047C11.25 13.2656 11.2781 13.3219 11.3273 13.357L15.2039 16.1836C15.2883 16.2445 15.4055 16.2258 15.4664 16.1437L16.1367 15.2297C16.1976 15.1429 16.1789 15.0258 16.0945 14.9672Z" fill={color} />
    </svg>
  );
};

ClockOutlineIcon.propTypes = {
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
