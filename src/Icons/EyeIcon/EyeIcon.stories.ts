import { EyeIcon } from "./EyeIcon";

export default {
  title: "Icons/Eye",
  component: EyeIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const On = {
  args: {
    height: 100,
    width: 100,
    color: "#000000",
  },
};

export const Off = {
  args: {
    height: 100,
    width: 100,
    color: "#000000",
    off: true,
  },
};
