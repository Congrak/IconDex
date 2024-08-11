/// <reference types="react" />
declare const _default: {
    title: string;
    component: {
        ({ height, width, color, outline, }: import("../types").SwitchableProps): import("react").JSX.Element;
        propTypes: {
            height: import("prop-types").Requireable<number>;
            width: import("prop-types").Requireable<number>;
            color: import("prop-types").Requireable<string>;
            outline: import("prop-types").Requireable<boolean>;
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
        outline: boolean;
    };
};
export declare const Disabled: {
    args: {
        height: number;
        width: number;
        color: string;
    };
};
export declare const Outline: {
    args: {
        height: number;
        width: number;
        color: string;
        outline: boolean;
    };
};
