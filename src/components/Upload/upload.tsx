import React, { FC, useState, useRef, ChangeEvent, ReactNode } from "react";
import axios from "axios";
import { UploadList } from "./uploadList";
import Dragger from "./dragger";
export type UploadFileStatus = "ready" | "uploading" | "success" | "error";
export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadProps {
  /** 上传地址 */
  action: string;
  /** 待上传的文件列表 */
  defaultFileList?: UploadFile[];
  /** 上传文件前的钩子 */
  beforeUpload?: (file: File) => boolean | Promise<File>;
  /** 上传文件时的钩子 */
  onProgress?: (percentage: number, file: File) => void;
  /** 上传文件成功时的钩子 */
  onSuccess?: (data: any, file: File) => void;
  /** 上传文件失败时的钩子 */
  onError?: (err: any, file: File) => void;
  /** 上传状态改变时的钩子 */
  onChange?: (file: File) => void;
  /** 文件列表移除文件时的钩子 */
  onRemove?: (file: UploadFile) => void;
  /** 设置上传的请求头部 */
  headers?: { [key: string]: any };
  /** 上传的文件字段名 */
  name?: string;
  /** 上传时附带的额外参数 */
  data?: { [key: string]: any };
  /** 支持发送 cookie 凭证信息 */
  withCredentials?: boolean;
  /** 可设置接受上传的文件类型 */
  accept?: string;
  /** 可设置是否支持多选文件 */
  multiple?: boolean;
  /** 可设置是否支持拖拽上传 */
  drag?: boolean;
  children?: ReactNode;
}

/**
 * 支持通过选择文件或者拖拽文件进行上传。
 * ### 引用方法
 * ~~~js
 * import { Upload } from ‘yinyin-ui-ts'
 * ~~~
 */
export const Upload: FC<UploadProps> = props => {
  const {
    action,
    defaultFileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    name,
    headers,
    data,
    withCredentials,
    accept,
    multiple,
    children,
    drag,
  } = props;
  const fileInput = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || []);

  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile> //属性全变为可选
  ) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  // 删除待上传列表中的文件
  const handleRemove = (file: UploadFile) => {
    setFileList(prevList => {
      return prevList.filter(item => item.uid !== file.uid);
    });
    if (onRemove) {
      onRemove(file);
    }
  };
  // 上传文件
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    // 上传完成清空输入框的值
    if (fileInput.current) {
      fileInput.current.value = "";
    }
  };
  // 上传前检查
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);
    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile);
          });
        } else if (result !== false) {
          post(file);
        }
      }
    });
  };
  // 实际上传过程
  const post = (file: File) => {
    // 设置初始
    let _file: UploadFile = {
      uid: Date.now() + "upload-file",
      status: "ready",
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    setFileList(prevList => {
      return [_file, ...prevList];
    });

    const formData = new FormData();
    // 自定义name
    formData.append(name || "file", file);
    // 自定义 formData
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
    }
    axios
      .post(action, formData, {
        headers: {
          ...headers,
          "Content-Type": "multipart/form-data",
        },
        // 是否需要携带cookie -withCredentials
        withCredentials,
        onUploadProgress: (e: any) => {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0;
          if (percentage < 100) {
            updateFileList(_file, {
              percent: percentage,
              status: "uploading",
            });
            if (onProgress) {
              onProgress(percentage, file);
            }
          }
        },
      })
      .then(resp => {
        updateFileList(_file, {
          status: "success",
          response: resp.data,
        });
        if (onSuccess) {
          onSuccess(resp.data, file);
        }
        if (onChange) {
          onChange(file);
        }
      })
      .catch(err => {
        updateFileList(_file, {
          status: "error",
          response: err,
        });
        if (onError) {
          onError(err, file);
        }
        if (onChange) {
          onChange(file);
        }
      });
  };
  return (
    <div className="upload-component">
      <div
        className="upload-input"
        style={{ display: "inline-block" }}
        onClick={handleClick}
      >
        {drag ? (
          <Dragger
            onFile={files => {
              uploadFiles(files);
            }}
          >
            {children}
          </Dragger>
        ) : (
          children
        )}
        <input
          className="file-input"
          style={{ display: "none" }}
          ref={fileInput}
          onChange={handleFileChange}
          type="file"
          accept={accept}
          multiple={multiple}
        />
      </div>
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};

Upload.defaultProps = {
  name: "file",
};

export default Upload;
