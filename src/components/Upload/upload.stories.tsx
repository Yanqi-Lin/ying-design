import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Upload from "./upload";
import Button from "../Button";
import Icon from "../Icon";

// beforeUpload 的第一个功能
// const checkFileSize = (file: File) => {
//     if (Math.round(file.size / 1024) > 50) {
//         alert('file too big');
//         return false;
//     }
//     return true;
// };

// beforeUpload 的第二个功能
// const filePromise = (file: File) => {
//     const newFile = new File([file], 'new_vv_name.docx', { type: file.type });
//     return Promise.resolve(newFile);
// };

const meta: Meta<typeof Upload> = {
  title: "Component/Upload",
  component: Upload,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    Story => (
      <div style={{ marginBottom: "100px" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Upload>;

export const ClickUpload: Story = {
  name: "点击 Select",
  parameters: {
    docs: {
      description: {
        story: "经典款式，用户点击按钮弹出文件选择框。",
      },
    },
  },
  render: args => (
    <Upload
      action="https://jsonplaceholder.typicode.com/posts"
      name="filename_yy"
      data={{ key: "value" }}
      headers={{ "X-Powered-By": "yinyin" }}
      multiple
      // accept=".png"
      // drag
      // beforeUpload={checkFileSize}
      // onProgress={action('progress')}
      // onSuccess={action('success')}
      // onError={action('error')}
    >
      <Button btnType="default">
        <Icon icon={"upload"} />
        <span style={{ marginLeft: "5px" }}>上传文件</span>
      </Button>
    </Upload>
  ),
};

export const DragUpload: Story = {
  name: "拖拽 Select",
  parameters: {
    docs: {
      description: {
        story: "把文件拖入指定区域，完成上传，同样支持点击上传。",
      },
    },
  },
  render: args => (
    <Upload
      action="https://jsonplaceholder.typicode.com/posts"
      onChange={action("changed")}
      onRemove={action("removed")}
      name="filename_yy"
      data={{ key: "value" }}
      headers={{ "X-Powered-By": "yinyin" }}
      multiple
      // accept=".png"
      drag
      // beforeUpload={filePromise}
      // onProgress={action('progress')}
      // onSuccess={action('success')}
      // onError={action('error')}
    />
  ),
};

export const UploadPNGOnly: Story = {
  name: "只上传 png 图片 Select",
  parameters: {
    docs: {
      description: {
        story: "在文件选择框内只显示 png 图片。",
      },
    },
  },
  render: args => (
    <Upload
      action="https://jsonplaceholder.typicode.com/posts"
      onChange={action("changed")}
      onRemove={action("removed")}
      name="filename_yy"
      data={{ key: "value" }}
      headers={{ "X-Powered-By": "yinyin" }}
      multiple
      accept=".png"
      // drag
      // beforeUpload={checkFileSize}
      // onProgress={action('progress')}
      // onSuccess={action('success')}
      // onError={action('error')}
    >
      <Button btnType="default">
        <Icon icon={"plus"} />
        <span style={{ marginLeft: "5px" }}>上传 png 图片</span>
      </Button>
    </Upload>
  ),
};
