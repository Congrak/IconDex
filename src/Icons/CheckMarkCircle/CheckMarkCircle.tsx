import PropTypes from 'prop-types';


import { IconsProps } from '../types';


export const CheckMarkCircleIcon = ({ height = 100, width = 100, color = '#000000' }: IconsProps) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 1.50012C6.20156 1.50012 1.5 6.20168 1.5 12.0001C1.5 17.7986 6.20156 22.5001 12 22.5001C17.7984 22.5001 22.5 17.7986 22.5 12.0001C22.5 6.20168 17.7984 1.50012 12 1.50012ZM16.5352 8.57122L11.5992 15.415C11.5302 15.5113 11.4393 15.5897 11.3339 15.6438C11.2286 15.698 11.1118 15.7262 10.9934 15.7262C10.8749 15.7262 10.7582 15.698 10.6528 15.6438C10.5474 15.5897 10.4565 15.5113 10.3875 15.415L7.46484 11.365C7.37578 11.2407 7.46484 11.0673 7.61719 11.0673H8.71641C8.95547 11.0673 9.18281 11.1822 9.32344 11.379L10.9922 13.6947L14.6766 8.58528C14.8172 8.39075 15.0422 8.27356 15.2836 8.27356H16.3828C16.5352 8.27356 16.6242 8.447 16.5352 8.57122Z"
        fill={color}
      />
    </svg>
  );
};

CheckMarkCircleIcon.propTypes = {
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
