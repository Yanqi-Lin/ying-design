import { CSSProperties, FC } from "react";
import { ThemeProps } from "../Icon/icon";
export interface ProgressProps {
    /** 展现当前进度 */
    percent: number;
    /** 设置进度条高度 */
    strokeHeight?: number;
    /** 是否显示数字 */
    showText?: boolean;
    /** 自定义样式 */
    styles?: CSSProperties;
    /** 自定义主题 */
    theme?: ThemeProps;
}
/**
 * 进度条。
 *
 * ### 引用方法
 * ~~~js
 * import { Progress } from 'yinyin-ui-ts'
 * ~~~
 */
export declare const Progress: FC<ProgressProps>;
export default Progress;
