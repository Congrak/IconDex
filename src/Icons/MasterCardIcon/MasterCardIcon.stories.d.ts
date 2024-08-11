/// <reference types="react" />
declare const _default: {
    title: string;
    component: {
        ({ height, width }: import("../types").IconsProps): import("react").JSX.Element;
        propTypes: {
            height: import("prop-types").Requireable<number>;
            width: import("prop-types").Requireable<number>;
            color: import("prop-types").Requireable<string>;
        };
    };
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        color: {
            table: {
                disable: boolean;
            };
        };
    };
};
export default _default;
export declare const Default: {
    args: {
        width: number;
        height: number;
    };
};