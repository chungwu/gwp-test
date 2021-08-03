// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uKzMYqiY71LewgafZ2KgTy
// Component: GKCLPs_yrNIqA
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_new_figma_test.module.css"; // plasmic-import: uKzMYqiY71LewgafZ2KgTy/projectcss
import * as sty from "./PlasmicMobileControlleft.module.css"; // plasmic-import: GKCLPs_yrNIqA/css

import Vector4Icon from "./icons/PlasmicIcon__Vector4"; // plasmic-import: gt1bOMXAaYRGA8q/icon

export type PlasmicMobileControlleft__VariantMembers = {};

export type PlasmicMobileControlleft__VariantsArgs = {};
type VariantPropType = keyof PlasmicMobileControlleft__VariantsArgs;
export const PlasmicMobileControlleft__VariantProps =
  new Array<VariantPropType>();

export type PlasmicMobileControlleft__ArgsType = {};
type ArgPropType = keyof PlasmicMobileControlleft__ArgsType;
export const PlasmicMobileControlleft__ArgProps = new Array<ArgPropType>();

export type PlasmicMobileControlleft__OverridesType = {
  root?: p.Flex<"div">;
  mobileControlLeft?: p.Flex<"div">;
  rectangle718?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultMobileControlleftProps {
  className?: string;
}

function PlasmicMobileControlleft__RenderFunc(props: {
  variants: PlasmicMobileControlleft__VariantsArgs;
  args: PlasmicMobileControlleft__ArgsType;
  overrides: PlasmicMobileControlleft__OverridesType;
  dataFetches?: PlasmicMobileControlleft__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"mobileControlLeft"}
        data-plasmic-override={overrides.mobileControlLeft}
        className={classNames(defaultcss.all, sty.mobileControlLeft)}
      >
        <div
          data-plasmic-name={"rectangle718"}
          data-plasmic-override={overrides.rectangle718}
          className={classNames(defaultcss.all, sty.rectangle718)}
        />

        <Vector4Icon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(defaultcss.all, sty.svg)}
          role={"img"}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "mobileControlLeft", "rectangle718", "svg"],
  mobileControlLeft: ["mobileControlLeft", "rectangle718", "svg"],
  rectangle718: ["rectangle718"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  mobileControlLeft: "div";
  rectangle718: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMobileControlleft__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMobileControlleft__VariantsArgs;
    args?: PlasmicMobileControlleft__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicMobileControlleft__Fetches;
  } & Omit<PlasmicMobileControlleft__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMobileControlleft__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMobileControlleft__ArgProps,
      internalVariantPropNames: PlasmicMobileControlleft__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicMobileControlleft__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMobileControlleft";
  } else {
    func.displayName = `PlasmicMobileControlleft.${nodeName}`;
  }
  return func;
}

export const PlasmicMobileControlleft = Object.assign(
  // Top-level PlasmicMobileControlleft renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    mobileControlLeft: makeNodeComponent("mobileControlLeft"),
    rectangle718: makeNodeComponent("rectangle718"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicMobileControlleft
    internalVariantProps: PlasmicMobileControlleft__VariantProps,
    internalArgProps: PlasmicMobileControlleft__ArgProps
  }
);

export default PlasmicMobileControlleft;
/* prettier-ignore-end */