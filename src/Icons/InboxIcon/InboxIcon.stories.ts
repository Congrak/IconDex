import { InboxIcon } from "./InboxIcon";

export default {
  title: "Icons/Inbox",
  component: InboxIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Default = {
  args: {
    width: 60,
    height: 43,
    color: "#3E3E3E",
  },
};
