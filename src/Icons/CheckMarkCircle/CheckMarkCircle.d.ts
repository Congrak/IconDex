import PropTypes from "prop-types";
import { IconsProps } from "../types";
import React from "react";
export declare const CheckMarkCircleIcon: {
    ({ height, width, color, }: IconsProps): React.JSX.Element;
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
         * What color should the icon be?
         */
        color: PropTypes.Requireable<string>;
    };
};
