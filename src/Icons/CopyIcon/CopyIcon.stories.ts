import { CopyIcon } from "./CopyIcon";

export default {
  title: "Icons/CopyIcon",
  component: CopyIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/6ZpWZ1PUQ0lHy6R0qevRVc/StageWood-Design-System-1.0?type=design&node-id=351-2051&mode=dev",
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Default = {
  args: {
    height: 100,
    width: 100,
    color: "#A4A4A4",
  },
};
