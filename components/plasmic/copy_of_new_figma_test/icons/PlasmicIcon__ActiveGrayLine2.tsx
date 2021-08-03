// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ActiveGrayLine2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ActiveGrayLine2Icon(props: ActiveGrayLine2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 50"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M.53 49.044V.182"}
        stroke={"currentColor"}
        strokeWidth={".365"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default ActiveGrayLine2Icon;
/* prettier-ignore-end */
