// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uKzMYqiY71LewgafZ2KgTy
// Component: gDVPxE-e1MKTCI
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
import RwButton from "../../RwButton"; // plasmic-import: wrPswtlkM40Fk/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 9DfnOHOEtDsgP39/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_new_figma_test.module.css"; // plasmic-import: uKzMYqiY71LewgafZ2KgTy/projectcss
import * as sty from "./PlasmicFeatureSection.module.css"; // plasmic-import: gDVPxE-e1MKTCI/css

import Vector29Icon from "./icons/PlasmicIcon__Vector29"; // plasmic-import: _2HB3MMwGRp4x4f/icon
import PlayIcon from "./icons/PlasmicIcon__Play"; // plasmic-import: ZaCDbQv_aW-cwJ0/icon

export type PlasmicFeatureSection__VariantMembers = {};

export type PlasmicFeatureSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicFeatureSection__VariantsArgs;
export const PlasmicFeatureSection__VariantProps = new Array<VariantPropType>();

export type PlasmicFeatureSection__ArgsType = {};
type ArgPropType = keyof PlasmicFeatureSection__ArgsType;
export const PlasmicFeatureSection__ArgProps = new Array<ArgPropType>();

export type PlasmicFeatureSection__OverridesType = {
  root?: p.Flex<"div">;
  wrapper?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  featureSectionContent?: p.Flex<"div">;
  contentTop?: p.Flex<"div">;
  badge?: p.Flex<"div">;
  small?: p.Flex<"div">;
  label?: p.Flex<"div">;
  eyebrow?: p.Flex<"h4">;
  headline?: p.Flex<"h1">;
  contentMiddle?: p.Flex<"div">;
  bodyContent?: p.Flex<"p">;
  tooltip?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  ctaBlock?: p.Flex<"div">;
  ctaBlockDesktop?: p.Flex<"div">;
  ctaGroup?: p.Flex<"div">;
  rwButton?: p.Flex<typeof RwButton>;
  textCta?: p.Flex<"div">;
  videoLink?: p.Flex<"div">;
  _01Blue?: p.Flex<"div">;
  _02Body0201Blue01Default?: p.Flex<"div">;
  playIcon?: p.Flex<"div">;
  play?: p.Flex<"div">;
  play2?: p.Flex<"div">;
  videoLink2?: p.Flex<"div">;
  body02?: p.Flex<"div">;
  duration?: p.Flex<"div">;
  body022?: p.Flex<"div">;
  image?: p.Flex<"div">;
};

export interface DefaultFeatureSectionProps {
  className?: string;
}

function PlasmicFeatureSection__RenderFunc(props: {
  variants: PlasmicFeatureSection__VariantsArgs;
  args: PlasmicFeatureSection__ArgsType;
  overrides: PlasmicFeatureSection__OverridesType;
  dataFetches?: PlasmicFeatureSection__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"wrapper"}
        data-plasmic-override={overrides.wrapper}
        className={classNames(defaultcss.all, sty.wrapper)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          hasGap={true}
          className={classNames(defaultcss.all, sty.columns)}
        >
          {(hasVariant(globalVariants, "screen", "tablet") ? true : true) ? (
            <div className={classNames(defaultcss.all, sty.column__seVUv)}>
              <p.Stack
                as={"div"}
                data-plasmic-name={"featureSectionContent"}
                data-plasmic-override={overrides.featureSectionContent}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  sty.featureSectionContent
                )}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"contentTop"}
                  data-plasmic-override={overrides.contentTop}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.contentTop)}
                >
                  <div
                    data-plasmic-name={"badge"}
                    data-plasmic-override={overrides.badge}
                    className={classNames(defaultcss.all, sty.badge)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"small"}
                      data-plasmic-override={overrides.small}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.small)}
                    >
                      <div
                        data-plasmic-name={"label"}
                        data-plasmic-override={overrides.label}
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.label
                        )}
                      >
                        {"NEW"}
                      </div>
                    </p.Stack>
                  </div>

                  <h4
                    data-plasmic-name={"eyebrow"}
                    data-plasmic-override={overrides.eyebrow}
                    className={classNames(
                      defaultcss.h4,
                      defaultcss.__wab_text,
                      sty.eyebrow
                    )}
                  >
                    {"EYEBROW PLACEHOLDER"}
                  </h4>

                  <h1
                    data-plasmic-name={"headline"}
                    data-plasmic-override={overrides.headline}
                    className={classNames(
                      defaultcss.h1,
                      defaultcss.__wab_text,
                      sty.headline
                    )}
                  >
                    {"Headline 1 bold example"}
                  </h1>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"contentMiddle"}
                  data-plasmic-override={overrides.contentMiddle}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.contentMiddle)}
                >
                  <p
                    data-plasmic-name={"bodyContent"}
                    data-plasmic-override={overrides.bodyContent}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.bodyContent
                    )}
                  >
                    {
                      "Cras ullamcorper turpis ac rhoncus placerat. Fusce venenatis mauris et lorem. Cras ullamcorper turpis ac rhoncus placerat. Fusce venenatis mauris et."
                    }
                  </p>

                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"tooltip"}
                    data-plasmic-override={overrides.tooltip}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.tooltip)}
                  >
                    <div
                      data-plasmic-name={"freeBox"}
                      data-plasmic-override={overrides.freeBox}
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox
                      )}
                    >
                      {"Lorem ipsum dolar"}
                    </div>

                    <Vector29Icon
                      className={classNames(defaultcss.all, sty.svg__bZek0)}
                      role={"img"}
                    />
                  </p.Stack>
                </p.Stack>

                <div
                  data-plasmic-name={"ctaBlock"}
                  data-plasmic-override={overrides.ctaBlock}
                  className={classNames(defaultcss.all, sty.ctaBlock)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"ctaBlockDesktop"}
                    data-plasmic-override={overrides.ctaBlockDesktop}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.ctaBlockDesktop)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"ctaGroup"}
                      data-plasmic-override={overrides.ctaGroup}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.ctaGroup)}
                    >
                      <RwButton
                        data-plasmic-name={"rwButton"}
                        data-plasmic-override={overrides.rwButton}
                        className={classNames("__wab_instance", sty.rwButton)}
                      />

                      {false ? (
                        <div
                          data-plasmic-name={"textCta"}
                          data-plasmic-override={overrides.textCta}
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.textCta
                          )}
                        >
                          {"Or call xxx-xx-xxxx"}
                        </div>
                      ) : null}
                    </p.Stack>

                    <div
                      data-plasmic-name={"videoLink"}
                      data-plasmic-override={overrides.videoLink}
                      className={classNames(defaultcss.all, sty.videoLink)}
                    >
                      <div
                        data-plasmic-name={"_01Blue"}
                        data-plasmic-override={overrides._01Blue}
                        className={classNames(defaultcss.all, sty._01Blue)}
                      >
                        <p.Stack
                          as={"div"}
                          data-plasmic-name={"_02Body0201Blue01Default"}
                          data-plasmic-override={
                            overrides._02Body0201Blue01Default
                          }
                          hasGap={true}
                          className={classNames(
                            defaultcss.all,
                            sty._02Body0201Blue01Default
                          )}
                        >
                          <div
                            data-plasmic-name={"playIcon"}
                            data-plasmic-override={overrides.playIcon}
                            className={classNames(defaultcss.all, sty.playIcon)}
                          >
                            <div
                              data-plasmic-name={"play"}
                              data-plasmic-override={overrides.play}
                              className={classNames(defaultcss.all, sty.play)}
                            >
                              <div
                                data-plasmic-name={"play2"}
                                data-plasmic-override={overrides.play2}
                                className={classNames(
                                  defaultcss.all,
                                  sty.play2
                                )}
                              >
                                <PlayIcon
                                  className={classNames(
                                    defaultcss.all,
                                    sty.svg__liWbo
                                  )}
                                  role={"img"}
                                />
                              </div>
                            </div>
                          </div>

                          <p.Stack
                            as={"div"}
                            data-plasmic-name={"videoLink2"}
                            data-plasmic-override={overrides.videoLink2}
                            hasGap={true}
                            className={classNames(
                              defaultcss.all,
                              sty.videoLink2
                            )}
                          >
                            <div
                              data-plasmic-name={"body02"}
                              data-plasmic-override={overrides.body02}
                              className={classNames(
                                defaultcss.all,
                                defaultcss.__wab_text,
                                sty.body02
                              )}
                            >
                              {"Lorem ipsum dolar"}
                            </div>
                          </p.Stack>

                          <p.Stack
                            as={"div"}
                            data-plasmic-name={"duration"}
                            data-plasmic-override={overrides.duration}
                            hasGap={true}
                            className={classNames(defaultcss.all, sty.duration)}
                          >
                            <div
                              data-plasmic-name={"body022"}
                              data-plasmic-override={overrides.body022}
                              className={classNames(
                                defaultcss.all,
                                defaultcss.__wab_text,
                                sty.body022
                              )}
                            >
                              {"(59s)"}
                            </div>
                          </p.Stack>
                        </p.Stack>
                      </div>
                    </div>
                  </p.Stack>
                </div>
              </p.Stack>
            </div>
          ) : null}

          <div className={classNames(defaultcss.all, sty.column__nP0Hh)}>
            <div
              data-plasmic-name={"image"}
              data-plasmic-override={overrides.image}
              className={classNames(defaultcss.all, sty.image)}
            >
              {(
                hasVariant(globalVariants, "screen", "tablet") ? true : true
              ) ? (
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__h6VDm)}
                  role={"img"}
                  src={
                    "/plasmic/copy_of_new_figma_test/images/plasmicTestImagejpg.jpeg"
                  }
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "tablet") ? true : true
              ) ? (
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__xgbvF)}
                  role={"img"}
                  src={
                    "/plasmic/copy_of_new_figma_test/images/payBillsDueDatessvg.svg"
                  }
                />
              ) : null}
            </div>
          </div>
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "wrapper",
    "columns",
    "featureSectionContent",
    "contentTop",
    "badge",
    "small",
    "label",
    "eyebrow",
    "headline",
    "contentMiddle",
    "bodyContent",
    "tooltip",
    "freeBox",
    "ctaBlock",
    "ctaBlockDesktop",
    "ctaGroup",
    "rwButton",
    "textCta",
    "videoLink",
    "_01Blue",
    "_02Body0201Blue01Default",
    "playIcon",
    "play",
    "play2",
    "videoLink2",
    "body02",
    "duration",
    "body022",
    "image"
  ],
  wrapper: [
    "wrapper",
    "columns",
    "featureSectionContent",
    "contentTop",
    "badge",
    "small",
    "label",
    "eyebrow",
    "headline",
    "contentMiddle",
    "bodyContent",
    "tooltip",
    "freeBox",
    "ctaBlock",
    "ctaBlockDesktop",
    "ctaGroup",
    "rwButton",
    "textCta",
    "videoLink",
    "_01Blue",
    "_02Body0201Blue01Default",
    "playIcon",
    "play",
    "play2",
    "videoLink2",
    "body02",
    "duration",
    "body022",
    "image"
  ],
  columns: [
    "columns",
    "featureSectionContent",
    "contentTop",
    "badge",
    "small",
    "label",
    "eyebrow",
    "headline",
    "contentMiddle",
    "bodyContent",
    "tooltip",
    "freeBox",
    "ctaBlock",
    "ctaBlockDesktop",
    "ctaGroup",
    "rwButton",
    "textCta",
    "videoLink",
    "_01Blue",
    "_02Body0201Blue01Default",
    "playIcon",
    "play",
    "play2",
    "videoLink2",
    "body02",
    "duration",
    "body022",
    "image"
  ],
  featureSectionContent: [
    "featureSectionContent",
    "contentTop",
    "badge",
    "small",
    "label",
    "eyebrow",
    "headline",
    "contentMiddle",
    "bodyContent",
    "tooltip",
    "freeBox",
    "ctaBlock",
    "ctaBlockDesktop",
    "ctaGroup",
    "rwButton",
    "textCta",
    "videoLink",
    "_01Blue",
    "_02Body0201Blue01Default",
    "playIcon",
    "play",
    "play2",
    "videoLink2",
    "body02",
    "duration",
    "body022"
  ],
  contentTop: ["contentTop", "badge", "small", "label", "eyebrow", "headline"],
  badge: ["badge", "small", "label"],
  small: ["small", "label"],
  label: ["label"],
  eyebrow: ["eyebrow"],
  headline: ["headline"],
  contentMiddle: ["contentMiddle", "bodyContent", "tooltip", "freeBox"],
  bodyContent: ["bodyContent"],
  tooltip: ["tooltip", "freeBox"],
  freeBox: ["freeBox"],
  ctaBlock: [
    "ctaBlock",
    "ctaBlockDesktop",
    "ctaGroup",
    "rwButton",
    "textCta",
    "videoLink",
    "_01Blue",
    "_02Body0201Blue01Default",
    "playIcon",
    "play",
    "play2",
    "videoLink2",
    "body02",
    "duration",
    "body022"
  ],
  ctaBlockDesktop: [
    "ctaBlockDesktop",
    "ctaGroup",
    "rwButton",
    "textCta",
    "videoLink",
    "_01Blue",
    "_02Body0201Blue01Default",
    "playIcon",
    "play",
    "play2",
    "videoLink2",
    "body02",
    "duration",
    "body022"
  ],
  ctaGroup: ["ctaGroup", "rwButton", "textCta"],
  rwButton: ["rwButton"],
  textCta: ["textCta"],
  videoLink: [
    "videoLink",
    "_01Blue",
    "_02Body0201Blue01Default",
    "playIcon",
    "play",
    "play2",
    "videoLink2",
    "body02",
    "duration",
    "body022"
  ],
  _01Blue: [
    "_01Blue",
    "_02Body0201Blue01Default",
    "playIcon",
    "play",
    "play2",
    "videoLink2",
    "body02",
    "duration",
    "body022"
  ],
  _02Body0201Blue01Default: [
    "_02Body0201Blue01Default",
    "playIcon",
    "play",
    "play2",
    "videoLink2",
    "body02",
    "duration",
    "body022"
  ],
  playIcon: ["playIcon", "play", "play2"],
  play: ["play", "play2"],
  play2: ["play2"],
  videoLink2: ["videoLink2", "body02"],
  body02: ["body02"],
  duration: ["duration", "body022"],
  body022: ["body022"],
  image: ["image"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  wrapper: "div";
  columns: "div";
  featureSectionContent: "div";
  contentTop: "div";
  badge: "div";
  small: "div";
  label: "div";
  eyebrow: "h4";
  headline: "h1";
  contentMiddle: "div";
  bodyContent: "p";
  tooltip: "div";
  freeBox: "div";
  ctaBlock: "div";
  ctaBlockDesktop: "div";
  ctaGroup: "div";
  rwButton: typeof RwButton;
  textCta: "div";
  videoLink: "div";
  _01Blue: "div";
  _02Body0201Blue01Default: "div";
  playIcon: "div";
  play: "div";
  play2: "div";
  videoLink2: "div";
  body02: "div";
  duration: "div";
  body022: "div";
  image: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFeatureSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFeatureSection__VariantsArgs;
    args?: PlasmicFeatureSection__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicFeatureSection__Fetches;
  } & Omit<PlasmicFeatureSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFeatureSection__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicFeatureSection__ArgProps,
      internalVariantPropNames: PlasmicFeatureSection__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicFeatureSection__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatureSection";
  } else {
    func.displayName = `PlasmicFeatureSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatureSection = Object.assign(
  // Top-level PlasmicFeatureSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    wrapper: makeNodeComponent("wrapper"),
    columns: makeNodeComponent("columns"),
    featureSectionContent: makeNodeComponent("featureSectionContent"),
    contentTop: makeNodeComponent("contentTop"),
    badge: makeNodeComponent("badge"),
    small: makeNodeComponent("small"),
    label: makeNodeComponent("label"),
    eyebrow: makeNodeComponent("eyebrow"),
    headline: makeNodeComponent("headline"),
    contentMiddle: makeNodeComponent("contentMiddle"),
    bodyContent: makeNodeComponent("bodyContent"),
    tooltip: makeNodeComponent("tooltip"),
    freeBox: makeNodeComponent("freeBox"),
    ctaBlock: makeNodeComponent("ctaBlock"),
    ctaBlockDesktop: makeNodeComponent("ctaBlockDesktop"),
    ctaGroup: makeNodeComponent("ctaGroup"),
    rwButton: makeNodeComponent("rwButton"),
    textCta: makeNodeComponent("textCta"),
    videoLink: makeNodeComponent("videoLink"),
    _01Blue: makeNodeComponent("_01Blue"),
    _02Body0201Blue01Default: makeNodeComponent("_02Body0201Blue01Default"),
    playIcon: makeNodeComponent("playIcon"),
    play: makeNodeComponent("play"),
    play2: makeNodeComponent("play2"),
    videoLink2: makeNodeComponent("videoLink2"),
    body02: makeNodeComponent("body02"),
    duration: makeNodeComponent("duration"),
    body022: makeNodeComponent("body022"),
    image: makeNodeComponent("image"),

    // Metadata about props expected for PlasmicFeatureSection
    internalVariantProps: PlasmicFeatureSection__VariantProps,
    internalArgProps: PlasmicFeatureSection__ArgProps
  }
);

export default PlasmicFeatureSection;
/* prettier-ignore-end */
