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
import React from "react";
import Button from "./components/Button";
// import Menu from "./components/Menu/menu";
// import MenuItem from "./components/Menu/menuItem";
// import SubMenu from "./components/Menu/subMenu";
import TransMenu from "./components/Menu";
import Icon from "./components/Icon";
import AutoComplete from "./components/AutoComplete";
import Progress from "./components/Progress";
var App = function () {
    var handleFetch = function (query) {
        return fetch("https://api.github.com/search/users?q=".concat(query))
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var items = _a.items;
            console.log(items);
            return items
                .slice(0, 10)
                .map(function (item) { return (__assign({ value: item.login }, item)); });
        });
    };
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"),
            React.createElement(TransMenu, { defaultOpenSubMenus: ["2"], onSelect: function (index) { return alert(index); } },
                React.createElement(TransMenu.Item, null,
                    React.createElement(Icon, { icon: "check", theme: "danger" }),
                    "test 1"),
                React.createElement(TransMenu.Item, { disabled: true }, "test 2"),
                React.createElement(TransMenu.SubMenu, { title: "test 3" },
                    React.createElement(TransMenu.Item, null, "test 3-1"),
                    React.createElement(TransMenu.Item, { disabled: true }, "test 3-2"),
                    React.createElement(TransMenu.Item, null,
                        React.createElement(Button, null)))),
            React.createElement(Button, null, " Hello "),
            React.createElement(Button, { btnType: "link", href: "#" }, "World"),
            React.createElement("div", { style: { width: "300px" } },
                React.createElement(AutoComplete, { fetchSuggestions: handleFetch })),
            React.createElement(Progress, { percent: 30, styles: { width: "300px" } }))));
};
export default App;
