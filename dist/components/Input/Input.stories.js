import Input from "./index";
var meta = {
    title: "Component/Input",
    component: Input,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
};
export default meta;
export var Default = {
    args: {
        placeholder: "请输入......",
    },
};
export var Icon = {
    args: {
        placeholder: "请输入......",
        icon: "magnifying-glass",
    },
};
export var prepend = {
    args: {
        placeholder: "请输入......",
        prepend: "Http://",
    },
};
export var append = {
    args: {
        placeholder: "请输入......",
        append: ".com",
    },
};
