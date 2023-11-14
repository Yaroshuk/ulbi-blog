import { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({ to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps }) => {
  return (
    <Link className={classNames(cls.appLink, {}, [className, cls[theme]])} to={to} {...otherProps}>
      {children}
    </Link>
  );
};
