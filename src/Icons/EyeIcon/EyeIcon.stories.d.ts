/// <reference types="react" />
declare const _default: {
    title: string;
    component: {
        ({ height, width, color, off, }: import("../types").SwitchableProps): import("react").JSX.Element;
        propTypes: {
            height: import("prop-types").Requireable<number>;
            width: import("prop-types").Requireable<number>;
            color: import("prop-types").Requireable<string>;
            off: import("prop-types").Requireable<boolean>;
        };
    };
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default _default;
export declare const On: {
    args: {
        height: number;
        width: number;
        color: string;
    };
};
export declare const Off: {
    args: {
        height: number;
        width: number;
        color: string;
        off: boolean;
    };
};
