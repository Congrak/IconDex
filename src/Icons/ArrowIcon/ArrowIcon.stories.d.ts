/// <reference types="react" />
declare const _default: {
    title: string;
    component: {
        ({ height, width, color, direction, }: import("../types").ArrowProps): import("react").JSX.Element;
        propTypes: {
            height: import("prop-types").Requireable<number>;
            width: import("prop-types").Requireable<number>;
            color: import("prop-types").Requireable<string>;
            direction: import("prop-types").Requireable<string>;
        };
    };
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default _default;
export declare const Default: {
    args: {
        height: number;
        width: number;
        color: string;
    };
};
