import PropTypes from "prop-types";
import { SwitchableProps } from "../types";
import React from "react";
export declare const BugIcon: {
    ({ height, width, color, outline, }: SwitchableProps): React.JSX.Element;
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
         * Alternate fill and no fill
         */
        outline: PropTypes.Requireable<boolean>;
    };
};
