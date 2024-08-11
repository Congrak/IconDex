import PropTypes from "prop-types";
import { SwitchableProps } from "../types";
import React from "react";
export declare const EyeIcon: {
    ({ height, width, color, off, }: SwitchableProps): React.JSX.Element;
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
         * Alternate on and off eye
         */
        off: PropTypes.Requireable<boolean>;
    };
};
