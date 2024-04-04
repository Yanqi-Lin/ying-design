import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";

export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps {
  /**自定义类名 */
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /** 控制组件大小 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  /**设置 link button 的跳转链接 */
  href?: string;
}
// 考虑到原生props的类型
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

/** 按钮组件，用于开始一个即时操作。
 * ### 引用方法
 * ```js
 * import { Button } from 'ying-ui'
 * ```
 */
export const Button: FC<ButtonProps> = props => {
  const { btnType, className, disabled, size, children, href, ...restProps } =
    props;
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disable: btnType === "link" && disabled, //a标签不具有disable属性，需要处理
  });

  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: "default",
};

export default Button;
