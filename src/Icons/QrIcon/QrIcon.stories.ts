import { QrIcon } from "./QrIcon";

export default {
  title: "Icons/Qr",
  component: QrIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Black = {
  args: {
    height: 100,
    width: 100,
    color: "#000000",
  },
};
