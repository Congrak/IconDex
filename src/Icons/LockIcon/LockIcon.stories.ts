import { LockIcon } from "./LockIcon";

export default {
  title: "Icons/Lock",
  component: LockIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Default = {
  args: {
    height: 20,
    width: 20,
    color: "#09AB47",
  },
};
