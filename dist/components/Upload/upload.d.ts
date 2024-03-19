import { FC, ReactNode } from "react";
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
    headers?: {
        [key: string]: any;
    };
    /** 上传的文件字段名 */
    name?: string;
    /** 上传时附带的额外参数 */
    data?: {
        [key: string]: any;
    };
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
export declare const Upload: FC<UploadProps>;
export default Upload;
