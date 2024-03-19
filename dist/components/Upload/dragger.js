import React, { useState } from "react";
import classNames from "classnames";
import Icon from "./../Icon/icon";
export var Dragger = function (props) {
    var onFile = props.onFile, children = props.children;
    var _a = useState(false), dragOver = _a[0], setDragOver = _a[1];
    var classes = classNames("uploader-dragger", {
        "is-dragover": dragOver,
    });
    var handleDrag = function (e, over) {
        e.preventDefault();
        setDragOver(over);
    };
    var handleDrop = function (e) {
        e.preventDefault();
        setDragOver(false);
        onFile(e.dataTransfer.files);
    };
    return (React.createElement("div", { className: classes, onDragOver: function (e) {
            handleDrag(e, true);
        }, onDragLeave: function (e) {
            handleDrag(e, false);
        }, onDrop: handleDrop },
        React.createElement(Icon, { icon: "upload", size: "3x", color: "gray" }),
        React.createElement("div", null, "\u4E0A\u4F20\u6587\u4EF6(\u70B9\u51FB\u6216\u62D6\u62FD)"),
        children));
};
export default Dragger;
