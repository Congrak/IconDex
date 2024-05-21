import { PaypalCardIcon } from "./PaypalCardIcon";

export default {
  title: "Icons/PaypalCard",
  component: PaypalCardIcon,
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
    width: 60,
    height: 43,
  },
};
