import React from "react";
/**
 * 进度条。
 *
 * ### 引用方法
 * ~~~js
 * import { Progress } from 'yinyin-ui-ts'
 * ~~~
 */
export var Progress = function (props) {
    var percent = props.percent, strokeHeight = props.strokeHeight, showText = props.showText, styles = props.styles, theme = props.theme;
    return (React.createElement("div", { className: "yinyin-progress-bar", style: styles },
        React.createElement("div", { className: "yinyin-progress-bar-outer", style: { height: "".concat(strokeHeight, "px") } },
            React.createElement("div", { className: "yinyin-progress-bar-inner color-".concat(theme), style: { width: "".concat(percent, "%") } }, showText && (React.createElement("span", { className: "yinyin-progress-bar-inner-text" }, "".concat(percent, "%")))))));
};
Progress.defaultProps = {
    strokeHeight: 15,
    showText: true,
    theme: "primary",
};
export default Progress;
