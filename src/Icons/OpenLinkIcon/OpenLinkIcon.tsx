import PropTypes from 'prop-types';

import { IconsProps } from '../types';

export const OpenLinkIcon = ({ height = 100, width = 100 }: IconsProps) => {
  return <svg width={width} height={height} viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.4753 21.0605H31.1547C30.8163 21.0516 30.4947 20.9142 30.2586 20.6774C30.0224 20.4405 29.8903 20.123 29.8903 19.7924C29.8903 19.4618 30.0224 19.1443 30.2586 18.9074C30.4947 18.6706 30.8163 18.5331 31.1547 18.5242H32.1761V11.9663H17.0899V18.5242H20.0108C20.3492 18.5331 20.6706 18.6706 20.9068 18.9074C21.1429 19.1443 21.2751 19.4618 21.2751 19.7924C21.2751 20.123 21.1429 20.4405 20.9068 20.6774C20.6706 20.9142 20.3492 21.0516 20.0108 21.0605H15.7885C15.6179 21.0607 15.4489 21.0279 15.2912 20.9642C15.1335 20.9005 14.9902 20.8071 14.8695 20.6893C14.7488 20.5714 14.6531 20.4315 14.5878 20.2776C14.5226 20.1236 14.4891 19.9586 14.4893 19.7919V10.6977C14.4893 10.3612 14.6261 10.0385 14.8697 9.80056C15.1134 9.56264 15.4439 9.42883 15.7885 9.42883H33.4744C33.819 9.42883 34.1495 9.56264 34.3932 9.80056C34.6369 10.0385 34.7738 10.3612 34.7738 10.6977V19.7919C34.7739 19.9585 34.7404 20.1234 34.6752 20.2773C34.61 20.4312 34.5144 20.5712 34.3939 20.689C34.2733 20.8069 34.13 20.9002 33.9724 20.964C33.8148 21.0277 33.6459 21.0605 33.4753 21.0605Z" fill="#E8407C" />
    <path d="M23.3557 43.3028C23.1488 43.4464 22.9985 43.655 22.9299 43.8937C22.8614 44.1324 22.8786 44.3869 22.9788 44.6147C23.1399 44.8419 23.355 45.0274 23.6058 45.1553C23.8566 45.2833 24.1355 45.3498 24.4184 45.3492C24.7014 45.3486 24.9799 45.2808 25.2301 45.1518C25.4803 45.0227 25.6946 44.8361 25.8546 44.6082C25.9542 44.3802 25.9701 44.1256 25.8998 43.8874C25.8294 43.6492 25.6769 43.4421 25.4682 43.301C25.1452 43.1253 24.7815 43.0331 24.4117 43.0334C24.042 43.0338 23.6785 43.1265 23.3557 43.3028Z" fill="#141414" />
    <path d="M47.0575 47.1067C48.0177 46.8537 48.5001 47.151 48.7309 48.0867C49.1361 49.7335 49.5337 51.3818 49.9238 53.0317C49.9845 53.188 50.0083 53.3555 49.9934 53.522C49.9785 53.6886 49.9254 53.8496 49.8379 53.9933C49.7504 54.137 49.6308 54.2597 49.4881 54.352C49.3454 54.4443 49.1832 54.5041 49.0135 54.5267C46.0615 55.2627 43.1057 55.9747 40.1565 56.7052C39.8923 56.7888 39.6068 56.7822 39.347 56.6866C39.0871 56.591 38.8682 56.412 38.7262 56.179C38.5453 55.8974 38.4021 55.9371 38.1759 55.995C37.9127 56.0727 37.6453 56.1366 37.3751 56.1864C36.8973 56.2545 36.5854 56.3961 36.5628 56.973C36.5449 57.4137 36.1567 57.6767 35.7147 57.789C34.895 57.9951 34.0772 58.2058 33.2518 58.3889C33.0996 58.4382 32.9381 58.4545 32.7788 58.437C32.6194 58.4194 32.4657 58.3684 32.3286 58.2872C32.1914 58.206 32.074 58.0967 31.9843 57.9669C31.8946 57.837 31.8349 57.6895 31.8093 57.5349C31.3501 55.8176 30.9065 54.0954 30.4787 52.3682C30.4233 52.2157 30.4037 52.0532 30.4213 51.8923C30.4389 51.7314 30.4934 51.5764 30.5806 51.4388C30.6678 51.3012 30.7855 51.1843 30.9251 51.0971C31.0647 51.0099 31.2226 50.9546 31.3871 50.935C31.9374 50.7887 32.4905 50.6497 33.0417 50.508C36.5883 49.6469 40.131 48.772 43.6842 47.9366L47.0575 47.1067Z" fill="#141414" />
    <path d="M40.2792 25.4415C37.7309 23.9115 34.9943 22.7035 32.1346 21.8461H32.1279C31.5641 20.5153 31.146 19.1301 30.8804 17.7135C30.5035 15.5055 29.7846 14.0777 28.6765 13.361C28.2044 13.0865 27.6782 12.9125 27.1324 12.8507C26.5866 12.7888 26.0336 12.8404 25.5097 13.0021C25.0823 13.1044 24.6819 13.294 24.3348 13.5582C23.9878 13.8224 23.7019 14.1551 23.496 14.5348C22.534 16.2157 22.6999 19.0319 23.9879 22.907C24.1199 23.3035 24.2941 23.7699 24.5043 24.2989C24.3093 24.3234 24.117 24.3647 23.9295 24.4222C23.3143 24.5819 22.7724 24.9398 22.3914 25.4377C22.0104 25.9356 21.8126 26.5443 21.8302 27.1656C21.8641 27.6063 21.948 28.3892 22.0507 29.3506C22.29 31.5816 22.6509 34.9517 22.6829 36.9674C22.7253 39.5618 25.3645 41.988 27.2923 43.759C27.8255 44.2261 28.3316 44.7219 28.8084 45.2439C29.6014 46.2263 30.287 47.287 30.854 48.4086C30.9935 48.6528 31.2225 48.8362 31.495 48.9219C31.7676 49.0075 32.0632 48.9891 32.3223 48.8702C32.5814 48.7514 32.7847 48.541 32.8912 48.2815C32.9976 48.022 32.9993 47.7327 32.8959 47.472C32.254 46.19 31.4727 44.979 30.5657 43.86C30.027 43.2575 29.4508 42.6878 28.8404 42.1543C27.2056 40.652 24.9669 38.5939 24.9405 36.9315C24.9057 34.8154 24.5532 31.5255 24.295 29.1206C24.1961 28.1877 24.1133 27.4279 24.0812 26.9992C24.0699 26.8538 24.2847 26.6228 24.6117 26.5216C24.8063 26.4507 25.0212 26.4542 25.2134 26.5313C25.4055 26.6084 25.5608 26.7533 25.6481 26.9374C26.6846 28.632 27.5637 32.8853 27.672 34.3031C27.7124 34.5805 27.8593 34.8326 28.083 35.0081C28.3066 35.1837 28.5904 35.2695 28.8765 35.2485C29.1627 35.2274 29.4299 35.101 29.624 34.8947C29.8182 34.6884 29.9248 34.4177 29.9222 34.1375C29.8034 32.5947 28.864 27.8988 27.5854 25.8076C27.5172 25.7012 27.4428 25.5987 27.363 25.5003C27.36 25.3564 27.328 25.2146 27.2688 25.0828C26.7486 23.8932 26.3661 22.9309 26.1315 22.2262C24.6531 17.7825 25.1714 16.119 25.4616 15.6094C25.5168 15.4953 25.597 15.3947 25.6964 15.3142C25.7959 15.2338 25.9122 15.1757 26.0373 15.144C26.2601 15.0576 26.499 15.0178 26.7385 15.0272C26.9781 15.0365 27.213 15.0947 27.4281 15.1981C27.7381 15.3977 28.3071 16.0371 28.6529 18.0731C29.1826 20.5631 30.0214 22.9808 31.1508 25.2723C31.6455 26.3902 32.1571 27.5456 32.583 28.6891C32.6254 28.8351 32.6981 28.971 32.7966 29.0883C32.8951 29.2056 33.0173 29.3017 33.1556 29.3708C33.2939 29.44 33.4453 29.4806 33.6004 29.4901C33.7554 29.4996 33.9107 29.4776 34.0568 29.4259C34.2028 29.3741 34.3364 29.2935 34.4491 29.1891C34.5618 29.0847 34.6513 28.9588 34.7119 28.8192C34.7726 28.6795 34.803 28.5291 34.8015 28.3774C34.8 28.2257 34.7665 28.0761 34.7031 27.9376C34.2772 26.794 33.7825 25.6688 33.2991 24.5767C34.2649 24.9309 35.2053 25.3128 36.0797 25.7148V25.7285C36.4615 26.9453 36.7524 28.1875 36.9503 29.4454C36.9755 29.6769 37.0749 29.8948 37.2345 30.0678C37.3941 30.2408 37.6056 30.3602 37.8388 30.4088C37.9536 30.4328 38.0716 30.4391 38.1884 30.4272C38.4858 30.3963 38.7585 30.2516 38.9469 30.0249C39.1354 29.7982 39.2241 29.5077 39.1938 29.2172C39.1041 28.5176 38.9716 27.8241 38.7971 27.14C38.8706 27.1851 38.9545 27.2319 39.0242 27.2779C39.5729 27.6358 40.1013 28.0225 40.6071 28.4362C40.6071 28.4445 40.6071 28.4537 40.6071 28.4629C40.7777 29.1694 40.8582 29.8937 40.8465 30.6194C40.854 30.9286 40.8625 31.2137 40.8832 31.4575C40.9033 31.6937 41.0008 31.9172 41.1612 32.0951C41.3215 32.2731 41.5363 32.396 41.7737 32.4455C41.8804 32.4678 41.9899 32.4746 42.0987 32.4657C42.3974 32.4423 42.6743 32.3041 42.8687 32.0814C43.063 31.8587 43.1588 31.5697 43.1352 31.278C43.1295 31.2062 43.1258 31.1253 43.122 31.0462C44.3222 32.5936 44.9951 34.4695 45.0461 36.4099C44.6893 40.7246 44.0453 45.0119 43.1182 49.2449C43.0749 49.5231 43.1422 49.8069 43.3061 50.0384C43.47 50.2699 43.7182 50.4316 44.0001 50.4903C44.282 50.5491 44.5762 50.5005 44.8226 50.3545C45.069 50.2085 45.2491 49.9761 45.3259 49.7049C46.2834 45.3321 46.9444 40.9024 47.3046 36.4447C47.3319 34.9451 46.889 29.7324 40.2792 25.4415Z" fill="#141414" />
    <path d="M27.2328 46.4363H14.3872C13.8476 46.4361 13.3301 46.2266 12.9486 45.8539C12.5672 45.4813 12.3529 44.9761 12.3529 44.4492C12.3529 33.4864 12.3529 22.5235 12.3529 11.5607C12.3529 9.50911 12.3529 7.45783 12.3529 5.40683C12.3529 3.81521 13.0294 3.28624 14.8102 3.39296C15.2782 3.42233 15.7479 3.4173 16.2152 3.37814C16.5845 3.34594 16.7598 3.43898 16.8691 3.75638C17.0924 4.40039 17.3524 5.03702 17.6012 5.67367C17.9441 6.55503 18.1977 6.73069 19.155 6.73069C22.569 6.73069 25.9834 6.73069 29.398 6.73069C30.7096 6.73069 30.835 6.64888 31.3306 5.45287C31.6133 4.78127 31.7169 3.88873 32.2248 3.50325C32.7637 3.09108 33.6928 3.39114 34.4513 3.38286C35.9297 3.3663 36.5242 3.95236 36.5242 5.38482C36.5242 11.1809 36.5242 15.0677 36.5242 20.8601C36.5241 21.0108 36.5544 21.1601 36.6133 21.2994C36.6723 21.4387 36.7589 21.5654 36.868 21.672C36.9771 21.7787 37.1067 21.8632 37.2493 21.9209C37.3919 21.9786 37.5448 22.0083 37.6991 22.0083C38.011 22.0083 38.3102 21.8874 38.5307 21.672C38.7512 21.4567 38.8751 21.1646 38.8751 20.8601C38.8751 19.0891 38.8751 19.2197 38.8751 17.4478H38.8675C38.8725 13.3599 38.8751 9.27185 38.8751 5.18334C38.8731 4.09506 38.4292 3.0519 37.6407 2.28271C36.8522 1.51352 35.7835 1.08089 34.6689 1.07992C27.8622 1.07378 21.0552 1.07378 14.2478 1.07992C13.1232 1.07992 12.0447 1.51619 11.2496 2.29259C10.4544 3.069 10.0077 4.12195 10.0077 5.21995C10.0014 18.3368 10.0014 31.4536 10.0077 44.5705C9.96786 45.1286 10.0517 45.6886 10.2536 46.2122C10.4555 46.7357 10.7706 47.2105 11.1776 47.6043C11.5845 47.9981 12.0737 48.3017 12.6116 48.4942C13.1496 48.6867 13.7236 48.7635 14.2948 48.7197C17.0942 48.7197 24.4391 48.7197 27.2375 48.7197C27.5478 48.7195 27.8453 48.5991 28.0647 48.3848C28.2842 48.1706 28.4075 47.8801 28.4077 47.5771C28.4075 47.4268 28.3769 47.2781 28.3177 47.1394C28.2585 47.0006 28.1718 46.8747 28.0627 46.7688C27.9535 46.6628 27.824 46.5789 27.6816 46.5219C27.5392 46.4649 27.3867 46.4357 27.2328 46.4363Z" fill="#141414" />
  </svg>;
};

OpenLinkIcon.propTypes = {
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
