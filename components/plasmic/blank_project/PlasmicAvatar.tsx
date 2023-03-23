// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: srLNpwS495U56VP6wX97Sc
// Component: Nyf0fcpCBO

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: srLNpwS495U56VP6wX97Sc/projectcss
import sty from "./PlasmicAvatar.module.css"; // plasmic-import: Nyf0fcpCBO/css

export type PlasmicAvatar__VariantMembers = {
  size: "small" | "_default" | "large";
  border: "border";
  badge: "badge";
  position: "bottomRight" | "topRight";
};

export type PlasmicAvatar__VariantsArgs = {
  size?: SingleChoiceArg<"small" | "_default" | "large">;
  border?: SingleBooleanChoiceArg<"border">;
  badge?: SingleBooleanChoiceArg<"badge">;
  position?: SingleChoiceArg<"bottomRight" | "topRight">;
};

type VariantPropType = keyof PlasmicAvatar__VariantsArgs;
export const PlasmicAvatar__VariantProps = new Array<VariantPropType>(
  "size",
  "border",
  "badge",
  "position"
);

export type PlasmicAvatar__ArgsType = {
  image?: React.ComponentProps<typeof p.PlasmicImg>["src"];
};

type ArgPropType = keyof PlasmicAvatar__ArgsType;
export const PlasmicAvatar__ArgProps = new Array<ArgPropType>("image");

export type PlasmicAvatar__OverridesType = {
  root?: p.Flex<"div">;
  badge?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  ring?: p.Flex<"div">;
};

export interface DefaultAvatarProps {
  image?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  size?: SingleChoiceArg<"small" | "_default" | "large">;
  border?: SingleBooleanChoiceArg<"border">;
  badge?: SingleBooleanChoiceArg<"badge">;
  position?: SingleChoiceArg<"bottomRight" | "topRight">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAvatar__RenderFunc(props: {
  variants: PlasmicAvatar__VariantsArgs;
  args: PlasmicAvatar__ArgsType;
  overrides: PlasmicAvatar__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          image:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/avatar-neytiri-1557258721.jpg" as const
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.size
          : undefined
      },

      {
        path: "border",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.border
          : undefined
      },

      {
        path: "badge",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.badge
          : undefined
      },

      {
        path: "position",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.position
          : undefined
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        undefined,
        {
          [sty.rootbadge]: hasVariant($state, "badge", "badge"),
          [sty.rootborder]: hasVariant($state, "border", "border"),
          [sty.rootposition_bottomRight]: hasVariant(
            $state,
            "position",
            "bottomRight"
          ),
          [sty.rootsize_large]: hasVariant($state, "size", "large"),
          [sty.rootsize_small]: hasVariant($state, "size", "small")
        }
      )}
    >
      {(
        hasVariant($state, "position", "topRight")
          ? true
          : hasVariant($state, "position", "bottomRight")
          ? true
          : hasVariant($state, "badge", "badge")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"badge"}
          data-plasmic-override={overrides.badge}
          className={classNames(projectcss.all, sty.badge, {
            [sty.badgebadge]: hasVariant($state, "badge", "badge"),
            [sty.badgebadge_size_large]:
              hasVariant($state, "badge", "badge") &&
              hasVariant($state, "size", "large"),
            [sty.badgebadge_size_large_position_bottomRight]:
              hasVariant($state, "badge", "badge") &&
              hasVariant($state, "size", "large") &&
              hasVariant($state, "position", "bottomRight"),
            [sty.badgebadge_size_small]:
              hasVariant($state, "badge", "badge") &&
              hasVariant($state, "size", "small"),
            [sty.badgebadge_size_small_position_bottomRight]:
              hasVariant($state, "badge", "badge") &&
              hasVariant($state, "size", "small") &&
              hasVariant($state, "position", "bottomRight"),
            [sty.badgeposition_bottomRight]: hasVariant(
              $state,
              "position",
              "bottomRight"
            ),
            [sty.badgeposition_topRight]: hasVariant(
              $state,
              "position",
              "topRight"
            ),
            [sty.badgeposition_topRight_badge_size_large]:
              hasVariant($state, "badge", "badge") &&
              hasVariant($state, "size", "large") &&
              hasVariant($state, "position", "topRight"),
            [sty.badgeposition_topRight_badge_size_small]:
              hasVariant($state, "size", "small") &&
              hasVariant($state, "position", "topRight") &&
              hasVariant($state, "badge", "badge")
          })}
        />
      ) : null}
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img, {
          [sty.imgbadge]: hasVariant($state, "badge", "badge"),
          [sty.imgbadge_size_large]:
            hasVariant($state, "badge", "badge") &&
            hasVariant($state, "size", "large"),
          [sty.imgbadge_size_large_position_bottomRight]:
            hasVariant($state, "badge", "badge") &&
            hasVariant($state, "size", "large") &&
            hasVariant($state, "position", "bottomRight"),
          [sty.imgbadge_size_small]:
            hasVariant($state, "badge", "badge") &&
            hasVariant($state, "size", "small"),
          [sty.imgbadge_size_small_position_bottomRight]:
            hasVariant($state, "badge", "badge") &&
            hasVariant($state, "size", "small") &&
            hasVariant($state, "position", "bottomRight"),
          [sty.imgborder]: hasVariant($state, "border", "border"),
          [sty.imgposition_bottomRight]: hasVariant(
            $state,
            "position",
            "bottomRight"
          ),
          [sty.imgposition_topRight]: hasVariant(
            $state,
            "position",
            "topRight"
          ),
          [sty.imgsize_large]: hasVariant($state, "size", "large")
        })}
        displayHeight={"100%" as const}
        displayMaxHeight={"none" as const}
        displayMaxWidth={"100%" as const}
        displayMinHeight={"0" as const}
        displayMinWidth={"0" as const}
        displayWidth={"100%" as const}
        loading={"lazy" as const}
        src={args.image}
      />

      {(hasVariant($state, "border", "border") ? true : true) ? (
        <div
          data-plasmic-name={"ring"}
          data-plasmic-override={overrides.ring}
          className={classNames(projectcss.all, sty.ring, {
            [sty.ringborder]: hasVariant($state, "border", "border")
          })}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "badge", "img", "ring"],
  badge: ["badge"],
  img: ["img"],
  ring: ["ring"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  badge: "div";
  img: typeof p.PlasmicImg;
  ring: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAvatar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAvatar__VariantsArgs;
    args?: PlasmicAvatar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAvatar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAvatar__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAvatar__ArgProps,
          internalVariantPropNames: PlasmicAvatar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAvatar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAvatar";
  } else {
    func.displayName = `PlasmicAvatar.${nodeName}`;
  }
  return func;
}

export const PlasmicAvatar = Object.assign(
  // Top-level PlasmicAvatar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    badge: makeNodeComponent("badge"),
    img: makeNodeComponent("img"),
    ring: makeNodeComponent("ring"),

    // Metadata about props expected for PlasmicAvatar
    internalVariantProps: PlasmicAvatar__VariantProps,
    internalArgProps: PlasmicAvatar__ArgProps
  }
);

export default PlasmicAvatar;
/* prettier-ignore-end */
