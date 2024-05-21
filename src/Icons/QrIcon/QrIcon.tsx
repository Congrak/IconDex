import PropTypes from 'prop-types';



import { IconsProps } from '../types';

export const QrIcon = ({ height = 100, width = 100, color = '#000000' }: IconsProps) => {
  

  return <svg width={width} height={height} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M7.3125 2.02588H2.5C2.22344 2.02588 2 2.24932 2 2.52588V7.33838C2 7.40713 2.05625 7.46338 2.125 7.46338H7.3125C7.38125 7.46338 7.4375 7.40713 7.4375 7.33838V2.15088C7.4375 2.08213 7.38125 2.02588 7.3125 2.02588ZM6.4375 6.46338H3V3.02588H6.4375V6.46338ZM4.28125 5.30713H5.15625C5.225 5.30713 5.28125 5.25088 5.28125 5.18213V4.30713C5.28125 4.23838 5.225 4.18213 5.15625 4.18213H4.28125C4.2125 4.18213 4.15625 4.23838 4.15625 4.30713V5.18213C4.15625 5.25088 4.2125 5.30713 4.28125 5.30713ZM7.3125 8.58838H2.125C2.05625 8.58838 2 8.64463 2 8.71338V13.5259C2 13.8024 2.22344 14.0259 2.5 14.0259H7.3125C7.38125 14.0259 7.4375 13.9696 7.4375 13.9009V8.71338C7.4375 8.64463 7.38125 8.58838 7.3125 8.58838ZM6.4375 13.0259H3V9.58838H6.4375V13.0259ZM4.28125 11.8696H5.15625C5.225 11.8696 5.28125 11.8134 5.28125 11.7446V10.8696C5.28125 10.8009 5.225 10.7446 5.15625 10.7446H4.28125C4.2125 10.7446 4.15625 10.8009 4.15625 10.8696V11.7446C4.15625 11.8134 4.2125 11.8696 4.28125 11.8696ZM13.5 2.02588H8.6875C8.61875 2.02588 8.5625 2.08213 8.5625 2.15088V7.33838C8.5625 7.40713 8.61875 7.46338 8.6875 7.46338H13.875C13.9438 7.46338 14 7.40713 14 7.33838V2.52588C14 2.24932 13.7766 2.02588 13.5 2.02588ZM13 6.46338H9.5625V3.02588H13V6.46338ZM10.8438 5.30713H11.7188C11.7875 5.30713 11.8438 5.25088 11.8438 5.18213V4.30713C11.8438 4.23838 11.7875 4.18213 11.7188 4.18213H10.8438C10.775 4.18213 10.7188 4.23838 10.7188 4.30713V5.18213C10.7188 5.25088 10.775 5.30713 10.8438 5.30713ZM13.875 8.58838H13.125C13.0562 8.58838 13 8.64463 13 8.71338V10.8071H11.7812V8.71338C11.7812 8.64463 11.725 8.58838 11.6562 8.58838H8.6875C8.61875 8.58838 8.5625 8.64463 8.5625 8.71338V13.9009C8.5625 13.9696 8.61875 14.0259 8.6875 14.0259H9.4375C9.50625 14.0259 9.5625 13.9696 9.5625 13.9009V10.0884H10.7812V11.6821C10.7812 11.7509 10.8375 11.8071 10.9062 11.8071H13.875C13.9438 11.8071 14 11.7509 14 11.6821V8.71338C14 8.64463 13.9438 8.58838 13.875 8.58838ZM11.6562 13.0259H10.9062C10.8375 13.0259 10.7812 13.0821 10.7812 13.1509V13.9009C10.7812 13.9696 10.8375 14.0259 10.9062 14.0259H11.6562C11.725 14.0259 11.7812 13.9696 11.7812 13.9009V13.1509C11.7812 13.0821 11.725 13.0259 11.6562 13.0259ZM13.875 13.0259H13.125C13.0562 13.0259 13 13.0821 13 13.1509V13.9009C13 13.9696 13.0562 14.0259 13.125 14.0259H13.875C13.9438 14.0259 14 13.9696 14 13.9009V13.1509C14 13.0821 13.9438 13.0259 13.875 13.0259Z' fill={color} />
  </svg>;
};

QrIcon.propTypes = {
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