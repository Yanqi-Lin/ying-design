var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useEffect, useRef, } from "react";
import classNames from "classnames";
import Input from "../Input/input";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";
import useDebounce from "../../hooks/useDebounce";
import useClickOutside from "../../hooks/useClickOutside";
export var AutoComplete = function (props) {
    var fetchSuggestions = props.fetchSuggestions, onSelect = props.onSelect, value = props.value, renderOption = props.renderOption, restProps = __rest(props, ["fetchSuggestions", "onSelect", "value", "renderOption"]);
    var _a = useState(value), inputValue = _a[0], setInputValue = _a[1];
    var _b = useState([]), suggestions = _b[0], setSuggestions = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var _d = useState(false), showDropdown = _d[0], setShowDropdown = _d[1];
    var _e = useState(-1), highlightIndex = _e[0], setHighlightIndex = _e[1];
    var triggerSearchRef = useRef(false);
    var componentRef = useRef(null);
    var debouncedValue = useDebounce(inputValue, 300);
    // 点击外部收起列表
    useClickOutside(componentRef, function () {
        setShowDropdown(false);
    });
    // 获取推荐搜索内容
    useEffect(function () {
        if (debouncedValue && triggerSearchRef.current) {
            setSuggestions([]);
            var results = fetchSuggestions(debouncedValue);
            if (results instanceof Promise) {
                setLoading(true);
                results.then(function (data) {
                    setLoading(false);
                    setSuggestions(data);
                    if (data.length > 0) {
                        setShowDropdown(true);
                    }
                });
            }
            else {
                setSuggestions(results);
                if (results.length > 0) {
                    setShowDropdown(true);
                }
            }
        }
        else {
            setShowDropdown(false);
        }
        setHighlightIndex(-1);
    }, [debouncedValue, fetchSuggestions]);
    // 处理高亮边界问题
    var highLight = function (index) {
        if (index < 0)
            index = 0;
        if (index >= suggestions.length) {
            index = suggestions.length - 1;
        }
        setHighlightIndex(index);
    };
    // 键盘事件
    var handleKeyDown = function (e) {
        switch (e.key) {
            case "Enter":
                if (suggestions[highlightIndex]) {
                    handleSelect(suggestions[highlightIndex]);
                }
                break;
            case "ArrowUp":
                highLight(highlightIndex - 1);
                break;
            case "ArrowDown":
                highLight(highlightIndex + 1);
                break;
            case "Escape":
                setShowDropdown(false);
                break;
            default:
                break;
        }
    };
    // 处理选中项
    var handleSelect = function (item) {
        setInputValue(item.value);
        setShowDropdown(false);
        if (onSelect) {
            onSelect(item);
        }
        triggerSearchRef.current = false;
    };
    // 处理输入
    var handleChange = function (e) {
        var value = e.target.value.trim();
        setInputValue(value);
        triggerSearchRef.current = true;
    };
    // 渲染模版
    var renderTemplate = function (item) {
        return renderOption ? renderOption(item) : item.value;
    };
    // 展示推荐搜索表单
    var generateDropdown = function () {
        return (React.createElement(Transition, { in: showDropdown || loading, animation: "zoom-in-top", timeout: 300, onExited: function () {
                setSuggestions([]);
            } },
            React.createElement("ul", { className: "yinyin-suggestion-list" },
                loading && (React.createElement("div", { className: "suggestions-loading-icon" },
                    React.createElement(Icon, { icon: "spinner", spin: true }))),
                suggestions.map(function (item, index) {
                    var cnames = classNames("suggestions-item", {
                        "is-active": index === highlightIndex,
                    });
                    return (React.createElement("li", { key: index, className: cnames, onClick: function () { return handleSelect(item); } }, renderTemplate(item)));
                }))));
    };
    return (React.createElement("div", { className: "yinyin-auto-complete", ref: componentRef },
        React.createElement(Input, __assign({ value: inputValue, onChange: handleChange, onKeyDown: handleKeyDown }, restProps)),
        generateDropdown()));
};
export default AutoComplete;
