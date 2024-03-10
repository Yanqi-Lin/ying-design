import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./index";
<<<<<<< HEAD
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

=======
import { IconProp } from "@fortawesome/fontawesome-svg-core";
>>>>>>> ae7b7aa0b649ec54b577635c64db98616baecd80
const meta: Meta = {
  title: "Component/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
<<<<<<< HEAD
    icon: "check",
=======
    icon: "coffee",
>>>>>>> ae7b7aa0b649ec54b577635c64db98616baecd80
    theme: "primary",
  },
};
