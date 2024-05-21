import PropTypes from 'prop-types';



import { ArrowProps } from '../types';

export const ReturnArrowIcon = ({ height = 100, width = 100, color = '#000000', direction }: ArrowProps) => {
  let transformationStyle: string = '';
  


  switch (direction) {
    case 'right':
      transformationStyle = 'rotate(180deg)';
      break;
    case 'up':
      transformationStyle = 'rotate(90deg)';
      break;
    case 'down':
      transformationStyle = 'rotate(270deg)';
      break;
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 10 12" fill="none" style={{ transform: transformationStyle }}>
      <path
        d="M3.94421 6L9.48821 11.448H6.03221L0.512207 6L6.03221 0.552002H9.48821L3.94421 6Z"
        fill={color}
      />
    </svg>
  );
};

ReturnArrowIcon.propTypes = {
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
  direction: PropTypes.oneOf(['left', 'right', 'up', 'down']),
};
