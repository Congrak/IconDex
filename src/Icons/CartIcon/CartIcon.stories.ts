import { CartIcon } from "./CartIcon";

export default {
  title: "Icons/Cart",
  component: CartIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const White = {
  args: {
    height: 20,
    width: 20,
    color: "#000000",
  },
};
