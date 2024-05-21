import PropTypes from 'prop-types';



import { IconsProps } from '../types';

export const CreditCardIcon = ({ height = 100, width = 100, color = '#000000' }: IconsProps) => {
  


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.75 3.75H2.25C1.83516 3.75 1.5 4.08516 1.5 4.5V19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V4.5C22.5 4.08516 22.1648 3.75 21.75 3.75ZM3.1875 5.4375H20.8125V8.25H3.1875V5.4375ZM20.8125 18.5625H3.1875V10.3125H20.8125V18.5625ZM15.2578 17.0625H19.125C19.2281 17.0625 19.3125 16.9781 19.3125 16.875V15.1875C19.3125 15.0844 19.2281 15 19.125 15H15.2578C15.1547 15 15.0703 15.0844 15.0703 15.1875V16.875C15.0703 16.9781 15.1547 17.0625 15.2578 17.0625Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardIcon.propTypes = {
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
