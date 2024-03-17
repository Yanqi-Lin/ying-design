import React, { CSSProperties, FC } from "react";
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
export const Progress: FC<ProgressProps> = props => {
  const { percent, strokeHeight, showText, styles, theme } = props;
  return (
    <div className="yinyin-progress-bar" style={styles}>
      <div
        className="yinyin-progress-bar-outer"
        style={{ height: `${strokeHeight}px` }}
      >
        <div
          className={`yinyin-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && (
            <span className="yinyin-progress-bar-inner-text">{`${percent}%`}</span>
          )}
        </div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: "primary",
};

export default Progress;
