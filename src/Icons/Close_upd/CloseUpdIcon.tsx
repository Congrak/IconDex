import PropTypes from 'prop-types';



import { IconsProps } from '../types';

export const CloseUpdIcon = ({ height = 100, width = 100, color = '#000000' }: IconsProps) => {
  


  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
      <path
        d="M10.0007 11.2178L15.4492 16.6663L16.6673 15.4481L11.2188 9.99968L16.6673 4.55124L15.4492 3.33309L10.0007 8.78153L4.55214 3.33301L3.33398 4.55116L8.78254 9.99967L3.33398 15.4482L4.55214 16.6663L10.0007 11.2178Z"
        fill={color}
      />
    </svg>
  );
};

CloseUpdIcon.propTypes = {
  /**
   * How height should the icon be?
   */
  height: PropTypes.number,
  /**
   * How width should the icon be?
   */
  width: PropTypes.number,

  color: PropTypes.string,
};
