import PropTypes from "prop-types";
import { ArrowProps } from "../types";
import React from "react";
export declare const ReturnArrowIcon: {
    ({ height, width, color, direction, }: ArrowProps): React.JSX.Element;
    propTypes: {
        /**
         * How height should the icon be?
         */
        height: PropTypes.Requireable<number>;
        /**
         * How width should the icon be?
         */
        width: PropTypes.Requireable<number>;
        /**
         * Alternate white and dark mode
         */
        color: PropTypes.Requireable<string>;
        /**
         * Alternate direction of arrow
         */
        direction: PropTypes.Requireable<string>;
    };
};
