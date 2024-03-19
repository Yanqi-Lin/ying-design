import React, { FC, CSSProperties } from "react";
type MenuMode = "horizontal" | "vertical";
export interface BaseMenuProps {
    /** index of default active item */
    defaultIndex?: string;
    className?: string;
    /** horizontal or vertical */
    mode?: MenuMode;
    style?: CSSProperties;
    /** menu items callback func */
    onSelect?: (selectedIndex: string) => void;
    /** set menu item default open, only in mode of horizontal */
    defaultOpenSubMenus?: string[];
}
export type MenuProps = Partial<BaseMenuProps & React.HTMLAttributes<HTMLUListElement>>;
/** handle with context **/
interface IMenuContext {
    index: string;
    onSelect?: (selectedIndex: string) => void;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
export declare const Menu: FC<MenuProps>;
export default Menu;
