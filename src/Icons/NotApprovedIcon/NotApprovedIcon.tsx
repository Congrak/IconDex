import PropTypes from 'prop-types';



import { SwitchableProps } from '../types';

export const NotApprovedIcon = ({ height = 100, width = 100, color = '#000000', outline = false }: SwitchableProps) => {
  


  return outline ?
    (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0644 8.31497C16.0644 8.21185 15.98 8.12747 15.8769 8.12747L14.3301 8.1345L12.0004 10.9118L9.67304 8.13685L8.12382 8.12982C8.0207 8.12982 7.93633 8.21185 7.93633 8.31732C7.93633 8.36185 7.95273 8.40404 7.98086 8.43919L11.0301 12.072L7.98086 15.7025C7.95254 15.7368 7.93682 15.7798 7.93633 15.8243C7.93633 15.9275 8.0207 16.0118 8.12382 16.0118L9.67304 16.0048L12.0004 13.2275L14.3277 16.0025L15.8746 16.0095C15.9777 16.0095 16.0621 15.9275 16.0621 15.822C16.0621 15.7775 16.0457 15.7353 16.0175 15.7001L12.973 12.0697L16.0222 8.43685C16.0504 8.40403 16.0644 8.3595 16.0644 8.31497Z" fill={color} />
      <path d="M12 1.52356C6.20156 1.52356 1.5 6.22512 1.5 12.0236C1.5 17.822 6.20156 22.5236 12 22.5236C17.7984 22.5236 22.5 17.822 22.5 12.0236C22.5 6.22512 17.7984 1.52356 12 1.52356ZM12 20.7423C7.18594 20.7423 3.28125 16.8376 3.28125 12.0236C3.28125 7.2095 7.18594 3.30481 12 3.30481C16.8141 3.30481 20.7188 7.2095 20.7188 12.0236C20.7188 16.8376 16.8141 20.7423 12 20.7423Z" fill={color} />
    </svg>) :
    (<svg width={width} height={height} viewBox='0 0 61 61' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_211_13632)'>
        <path
          d='M29.995 1.60068e-05C35.9355 -0.00611655 41.7443 1.75002 46.6865 5.04621C51.6286
8.34239 55.4819 13.0305 57.7589 18.5173C60.0358 24.0041 60.634 30.043 59.4778 35.8699C58.3216
41.6968 55.463 47.0498 51.2636 51.2516C47.0642 55.4533 41.7129 58.315 35.8866 59.4745C30.0604
60.634 24.0211 60.0392 18.533 57.7654C13.0449 55.4915 8.35465 51.6409 5.05566 46.7006C1.75668
41.7603 -0.0027485 35.9525 1.81691e-05 30.012C-0.00432056 26.071 0.768438 22.1678 2.27408
18.5257C3.77973 14.8836 5.98871 11.5742 8.77464 8.78666C11.5606 5.99915 14.8688 3.78829
18.51 2.28059C22.1512 0.77288 26.054 -0.00208973 29.995 1.60068e-05Z' fill={color} />
        <path
          d='M40.9975 44.0427C40.6042 44.0432 40.2147 43.966 39.8514 43.8155C39.4881 43.665
39.1581 43.4442 38.8805 43.1657L16.9305 21.2157C16.6525 20.9378 16.432 20.6078 16.2816
20.2447C16.1311 19.8815 16.0537 19.4923 16.0537 19.0992C16.0537 18.7061 16.1311 18.3169
16.2816 17.9538C16.432 17.5906 16.6525 17.2606 16.9305 16.9827C17.2084 16.7048 17.5384
16.4843 17.9015 16.3338C18.2647 16.1834 18.6539 16.106 19.047 16.106C19.44 16.106 19.8293
16.1834 20.1924 16.3338C20.5556 16.4843 20.8855 16.7048 21.1635 16.9827L43.1135 38.9327C43.5323
39.3513 43.8176 39.8847 43.9332 40.4655C44.0487 41.0462 43.9895 41.6482 43.7628 42.1953C43.5362
42.7423 43.1524 43.2098 42.66 43.5387C42.1675 43.8676 41.5896 44.043 40.9975 44.0427Z' fill='white' />
        <path
          d='M19.0465 44.0427C18.6532 44.0432 18.2638 43.966 17.9005 43.8155C17.5371 43.665
17.2072 43.4442 16.9295 43.1657C16.6515 42.8878 16.431 42.5578 16.2806 42.1947C16.1302
41.8315 16.0527 41.4423 16.0527 41.0492C16.0527 40.6561 16.1302 40.2669 16.2806 39.9038C16.431
39.5406 16.6515 39.2106 16.9295 38.9327L38.8805 16.9827C39.1584 16.7048 39.4884 16.4843
39.8515 16.3338C40.2147 16.1834 40.6039 16.106 40.997 16.106C41.3901 16.106 41.7793 16.1834
42.1425 16.3338C42.5056 16.4843 42.8356 16.7048 43.1135 16.9827C43.3915 17.2606 43.612 17.5906
43.7624 17.9538C43.9128 18.3169 43.9903 18.7061 43.9903 19.0992C43.9903 19.4923 43.9128
19.8815 43.7624 20.2447C43.612 20.6078 43.3915 20.9378 43.1135 21.2157L21.1635 43.1657C20.8858
43.4442 20.5558 43.665 20.1925 43.8155C19.8292 43.966 19.4397 44.0432 19.0465 44.0427Z' fill='white' />

      </g>
      <defs>
        <clipPath id='clip0_211_13632'>
          <rect width='60.045' height='60.052' fill='white' />
        </clipPath>
      </defs>
    </svg>);
};

NotApprovedIcon.propTypes = {
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
  outline: PropTypes.bool,
};
