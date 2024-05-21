import PropTypes from 'prop-types';



import { IconsProps } from '../types';

export const HomeIcon = ({ height = 100, width = 100, color = '#000000' }: IconsProps) => {
  


  return (
    <svg width={width} height={height} fill={color} viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
      <g id="Icon / Two Tone / Home">
        <path id="Vector" opacity="0.1" d="M10.4897 3.37146L3.26318 10.5922H5.13818V16.9535H8.14404V12.5004C8.14404 12.0687 8.49365 11.7191 8.92529 11.7191H12.0503C12.4819 11.7191 12.8315 12.0687 12.8315 12.5004V16.9535H15.8374V10.5922H17.7144L10.9409 3.82263L10.4897 3.37146ZM18.9761 11.6312C18.8589 11.7484 18.7202 11.8422 18.5698 11.9027C18.7202 11.8402 18.8589 11.7484 18.9761 11.6312ZM1.65186 10.9535C1.74951 11.5453 2.26514 11.9984 2.88428 11.9984H2.90186C2.27881 11.9984 1.75146 11.5492 1.65186 10.9535ZM1.63428 10.7484V10.7113V10.7484ZM1.63623 10.6976C1.63818 10.6371 1.646 10.5785 1.65576 10.5199C1.64404 10.5765 1.63818 10.6371 1.63623 10.6976Z" />
        <path id="Vector_2" d="M19.0625 9.9605C19.0625 9.95854 19.0605 9.95854 19.0605 9.95659L19.0254 9.91558C19.0234 9.91362 19.0215 9.90972 19.0176 9.90776C19.0039 9.89214 18.9883 9.87651 18.9746 9.86089L11.4277 2.31987L10.9219 1.81401C10.8066 1.69952 10.6507 1.63525 10.4883 1.63525C10.3258 1.63525 10.1699 1.69952 10.0547 1.81401L2.00195 9.86284C1.85648 10.0076 1.74911 10.186 1.68945 10.3824L1.67773 10.4234L1.67187 10.4449L1.66602 10.4683C1.66211 10.482 1.66016 10.4957 1.6582 10.5093C1.6582 10.5113 1.6582 10.5152 1.65625 10.5171C1.64453 10.5757 1.63867 10.6343 1.63672 10.6949V10.7593C1.63672 10.7691 1.63672 10.7789 1.63867 10.7886C1.63867 10.7984 1.63867 10.8062 1.64063 10.816C1.64063 10.8257 1.64258 10.8355 1.64258 10.8453C1.64258 10.857 1.64453 10.8687 1.64648 10.8804C1.64648 10.8863 1.64844 10.8921 1.64844 10.898L1.6543 10.9468V10.9488C1.75391 11.5445 2.2832 11.9937 2.9043 11.9937H3.73438V18.3589H17.2441V11.9976H18.0918C18.2598 11.9976 18.4219 11.9644 18.5703 11.9019C18.7188 11.8394 18.8574 11.7476 18.9766 11.6304C19.0929 11.5144 19.1851 11.3765 19.2478 11.2246C19.3105 11.0728 19.3425 10.91 19.3418 10.7457C19.3418 10.4585 19.2441 10.1832 19.0625 9.9605ZM11.582 16.9527H9.39453V12.9683H11.582V16.9527ZM15.8379 10.5914V16.9527H12.832V12.4996C12.832 12.0679 12.4824 11.7183 12.0508 11.7183H8.92578C8.49414 11.7183 8.14453 12.0679 8.14453 12.4996V16.9527H5.13867V10.5914H3.26367L10.4902 3.37065L10.9414 3.82183L17.7148 10.5914H15.8379Z" />
      </g>
    </svg>
  );
};

HomeIcon.propTypes = {
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
