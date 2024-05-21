import { PasswordIcon } from "./PasswordIcon";

export default {
  title: "Icons/Password",
  component: PasswordIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Default = {
  args: {
    height: 100,
    width: 100,
    color: "#FF1D82",
  },
};

export const Disabled = {
  args: {
    height: 100,
    width: 100,
    color: "#BFBFBF",
  },
};
