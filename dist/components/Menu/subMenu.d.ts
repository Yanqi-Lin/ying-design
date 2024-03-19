import React, { FC } from "react";
export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
    children?: React.ReactNode;
}
declare const SubMenu: FC<SubMenuProps>;
export default SubMenu;
