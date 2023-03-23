// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SvgIcon(props: SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.354 4.646L10 0l.707.707-4.646 4.647L10.707 10l-.707.707-4.646-4.646-4.647 4.646L0 10l4.646-4.646L0 .707.707 0l4.647 4.646z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SvgIcon;
/* prettier-ignore-end */
