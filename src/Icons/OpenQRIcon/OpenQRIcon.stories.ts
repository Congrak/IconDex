import { OpenQRIcon } from "./OpenQRIcon";

export default {
  title: "Icons/Open QR",
  component: OpenQRIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {
  args: {
    height: 100,
    width: 100,
  },
};
