import PropTypes from "prop-types";
import { IconsProps } from "../types";
import React from "react";
export declare const FileIcon: {
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
         * Alternate white and dark mode
         */
        color: PropTypes.Requireable<string>;
    };
};
