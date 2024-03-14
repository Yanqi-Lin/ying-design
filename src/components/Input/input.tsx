import React, {
  FC,
  InputHTMLAttributes,
  ReactElement,
  ChangeEvent,
} from "react";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from "../Icon";

type InputSize = "lg" | "sm";
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  /**是否禁用Input */
  disabled?: boolean;
  /**设置input的大小，支持lg或sm*/
  size?: InputSize;
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp;
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | ReactElement;
  /**添加后缀 用于配置一些固定组合 */
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 *
 * ### 引用方法
 * ~~~js
 * import { Input } from 'yinyin-ui-ts'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */

export const Input: FC<InputProps> = props => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props;
  const classes = classNames("yinyin-input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prepend || append,
    "input-group-append": !!append,
    "input-group-prepend": !!prepend,
  });
  const fixControlledValue = (value: any) => {
    if (typeof value === "undefined" || value === null) {
      return "";
    }
    return value;
  };
  //受控组件(即具有 value 属性)不应该同时也具有 defaultValue 属性
  if ("value" in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }

  return (
    <div className={classes} style={style}>
      {prepend && <div className="yinyin-input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input
        className="yinyin-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="yinyin-input-group-append">{append}</div>}
    </div>
  );
};

export default Input;
