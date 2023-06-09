// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: srLNpwS495U56VP6wX97Sc
// Component: EiqWor0wKzy

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  usePlasmicDataConfig,
  executePlasmicDataOp,
  useDependencyAwareQuery
} from "@plasmicapp/react-web/lib/data-sources";

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
import Task1 from "../../Task1"; // plasmic-import: RodQ_KOiniY/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: AKnpb8EmFP/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: srLNpwS495U56VP6wX97Sc/projectcss
import sty from "./PlasmicHomepage2.module.css"; // plasmic-import: EiqWor0wKzy/css

export type PlasmicHomepage2__VariantMembers = {};

export type PlasmicHomepage2__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage2__VariantsArgs;
export const PlasmicHomepage2__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage2__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage2__ArgsType;
export const PlasmicHomepage2__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage2__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
  task1?: p.Flex<typeof Task1>;
};

export interface DefaultHomepage2Props {}

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

function PlasmicHomepage2__RenderFunc(props: {
  variants: PlasmicHomepage2__VariantsArgs;
  args: PlasmicHomepage2__ArgsType;
  overrides: PlasmicHomepage2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

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
        path: "result",
        type: "private",
        variableType: "object",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => ({})
          : undefined
      },

      {
        path: "correctAnswer",
        type: "private",
        variableType: "object",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => ({
              size: "small",
              showBadge: true,
              position: "topRight",
              focusRing: true
            })
          : undefined
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  useDependencyAwareQuery({
    name: "remoteData",
    getDataOp: () => ({
      sourceId: "b8UAFEnT6Wj5LorB3qg5zQ",
      opId: "ceebfd80cd6e4f5e1e047538fdd721aeb4e939ea69a57a5748a376a8bf39411a4cd091d3d604d52f80bee232c7163eb96561423cbea4b115ad4cdb2b6bda9680aec774851e611174ce4e9fc2988261399f36949ff686699757c961e098fd73374c989fc191772a1c2dd8c13072dbf610a1360cfed8f8ada85f76bcdca10f3d636bd17107fc6cee8cae3af180e7cf",
      userArgs: {},

      cacheKey: "plasmic.$.v7hTYpqGQcN.$.",
      invalidatedKeys: ["plasmic_refresh_all"]
    }),

    $queries,
    setDollarQueries
  });

  return (
    <p.PlasmicPageGuard
      minRole={null}
      appId={"srLNpwS495U56VP6wX97Sc"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={false}
    >
      <React.Fragment>
        <Head></Head>

        <style>{`
        body {
          margin: 0;
        }
      `}</style>

        <div className={projectcss.plasmic_page_wrapper}>
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
              sty.root
            )}
          >
            <p.Stack
              as={"section"}
              data-plasmic-name={"section"}
              data-plasmic-override={overrides.section}
              hasGap={true}
              className={classNames(projectcss.all, sty.section)}
            >
              {true ? (
                <Task1
                  data-plasmic-name={"task1"}
                  data-plasmic-override={overrides.task1}
                  className={classNames("__wab_instance", sty.task1)}
                />
              ) : null}
            </p.Stack>
          </div>
        </div>
      </React.Fragment>
    </p.PlasmicPageGuard>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section", "task1"],
  section: ["section", "task1"],
  task1: ["task1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  task1: typeof Task1;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage2__VariantsArgs;
    args?: PlasmicHomepage2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage2__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHomepage2__ArgProps,
          internalVariantPropNames: PlasmicHomepage2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage2";
  } else {
    func.displayName = `PlasmicHomepage2.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage2 = Object.assign(
  // Top-level PlasmicHomepage2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    task1: makeNodeComponent("task1"),

    // Metadata about props expected for PlasmicHomepage2
    internalVariantProps: PlasmicHomepage2__VariantProps,
    internalArgProps: PlasmicHomepage2__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage2;
/* prettier-ignore-end */
