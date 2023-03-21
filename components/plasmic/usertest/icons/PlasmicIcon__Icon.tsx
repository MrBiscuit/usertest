// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 8"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#-f3oiDJIQa)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M1.5 2.824l1.883 1.882L7.148.941l1.176 1.177-4.94 4.941L.323 4 1.5 2.824z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"-f3oiDJIQa"}>
          <path
            fill={"currentColor"}
            transform={"translate(.324)"}
            d={"M0 0h8v8H0z"}
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
