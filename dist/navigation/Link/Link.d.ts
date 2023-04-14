import React, { PropsWithChildren } from "react";
interface LinkProps {
    to: string;
    id?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    icon?: React.ReactNode;
}
export declare const Link: ({ to, id, target, disabled, children, icon, }: PropsWithChildren<LinkProps>) => JSX.Element;
export {};
