import PropTypes from 'prop-types';



import { IconsProps } from '../types';

export const DoorIcon = ({ height = 100, width = 100, color = '#000000' }: IconsProps) => {
  


  return <svg width={width} height={height} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1766_1143)">
      <path d="M9.63824 8.26802C9.63824 7.93029 9.91194 7.65616 10.25 7.65616C10.588 7.65616 10.8617 7.93029 10.8617 8.26802V10.4818C10.8617 10.8195 10.588 11.0937 10.25 11.0937C9.91194 11.0937 9.63824 10.8195 9.63824 10.4818V8.26802Z" fill={color} />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.10541 0.749878C6.74596 0.749878 6.40123 0.892592 6.14702 1.1467C5.89285 1.40078 5.75 1.74543 5.75 2.10482V14.009C5.75 14.3684 5.89287 14.713 6.14702 14.967C6.40118 15.2211 6.74589 15.3639 7.10541 15.3639L7.29985 15.3639V15.5655C7.29983 15.8882 7.34966 16.3161 7.63071 16.6827C7.93349 17.0776 8.58052 17.385 9.30135 17.1893C9.78683 17.0575 15.3891 15.499 15.6915 15.4084C16.0123 15.3122 16.3867 15.1713 16.669 14.8031C16.9497 14.437 16.9999 14.0145 16.9999 13.6859V2.10486C16.9999 1.74554 16.8571 1.40087 16.6029 1.14674C16.3487 0.892614 16.0039 0.749921 15.6445 0.749921L7.10541 0.749878ZM15.2863 2.02618C15.4939 1.97131 15.5865 2.00176 15.6196 2.01604C15.6618 2.03423 15.7041 2.06905 15.7611 2.14346C15.7867 2.17677 15.8095 2.22308 15.8264 2.28732C15.8452 2.35867 15.856 2.44987 15.856 2.56496V13.6859C15.856 13.9153 15.8166 14.0351 15.7611 14.1074C15.7075 14.1774 15.6307 14.2328 15.3631 14.313C15.0773 14.3986 9.48949 15.9533 9.00155 16.0858C8.87606 16.1198 8.76879 16.1067 8.68763 16.0783C8.60319 16.0489 8.5525 16.0052 8.53859 15.9871C8.48355 15.9153 8.44371 15.7911 8.44372 15.5656V4.4446C8.44372 4.21713 8.48336 4.09512 8.53859 4.02309C8.56152 3.99318 8.60311 3.95886 8.67193 3.92235C8.74004 3.88622 8.82941 3.85077 8.94178 3.81596C9.16839 3.74575 14.6729 2.18835 15.2863 2.02618Z" fill={color} />
      <path d="M2.21877 5.28952L4.56985 7.97647C4.70684 8.13303 4.70684 8.36679 4.56985 8.52335L2.21877 11.2103L1.35791 10.4571L2.78872 8.82185H0.5V7.67797H2.78872L1.35791 6.04277L2.21877 5.28952Z" fill={color} />
    </g>
    <defs>
      <clipPath id="clip0_1766_1143">
        <rect width="18" height="18" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>;
};

DoorIcon.propTypes = {
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
