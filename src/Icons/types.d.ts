export type IconsProps = {
    readonly height?: number;
    readonly width?: number;
    readonly color?: string;
};
export type SwitchableProps = Partial<IconsProps> & {
    readonly off?: boolean;
    readonly outline?: boolean;
};
export type DarkProps = Partial<IconsProps> & {
    readonly dark?: boolean;
};
export type ArrowProps = IconsProps & {
    readonly direction?: 'left' | 'right' | 'up' | 'down';
};
