import PropTypes from 'prop-types';



import { IconsProps } from '../types';

export const FileIcon = ({ height = 100, width = 100, color = '#000000' }: IconsProps) => {
  


  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 19 18" fill="none">
      <g id="Icon / Outlined / File">
        <path
          id="Vector"
          d="M15.5223 5.07305L11.7395 1.29023C11.634 1.18477 11.4916 1.125 11.3422 1.125H3.875C3.56387 1.125 3.3125 1.37637 3.3125 1.6875V16.3125C3.3125 16.6236 3.56387 16.875 3.875 16.875H15.125C15.4361 16.875 15.6875 16.6236 15.6875 16.3125V5.47207C15.6875 5.32266 15.6277 5.17852 15.5223 5.07305ZM14.3902 5.73047H11.082V2.42227L14.3902 5.73047ZM14.4219 15.6094H4.57812V2.39062H9.88672V6.1875C9.88672 6.3833 9.9645 6.57109 10.103 6.70954C10.2414 6.848 10.4292 6.92578 10.625 6.92578H14.4219V15.6094Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

FileIcon.propTypes = {
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
