import { Meta, StoryFn } from "@storybook/react/types-6-0";
import Button, { CustomButtonProps } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
  },
} as Meta;

const Template: StoryFn<CustomButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Secondary Button",
};
