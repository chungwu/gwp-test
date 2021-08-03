// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OngoingLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OngoingLineIcon(props: OngoingLineIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 58 1"}
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
        d={"M1 .1h56.768"}
        stroke={"currentColor"}
        strokeWidth={".202"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default OngoingLineIcon;
/* prettier-ignore-end */
