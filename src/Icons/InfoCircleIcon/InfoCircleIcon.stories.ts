import { InfoCircleIcon } from "./InfoCircleIcon";

export default {
  title: "Icons/InfoCircle",
  component: InfoCircleIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Default = {
  args: {
    height: 160,
    width: 160,
    color: "#09AB47",
  },
};

export const Outlined = {
  args: {
    height: 160,
    width: 160,
    color: "#09AB47",
    outline: true,
  },
};
