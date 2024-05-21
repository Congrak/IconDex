import { EditIcon } from "./EditIcon";

export default {
  title: "Icons/Edit",
  component: EditIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Green = {
  args: {
    width: 60,
    height: 43,
    color: "#09AB47",
  },
};
