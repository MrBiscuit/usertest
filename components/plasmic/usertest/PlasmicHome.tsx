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
import sty from "./PlasmicHome.module.css"; // plasmic-import: EiqWor0wKzy/css

export type PlasmicHome__VariantMembers = {};

export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
  task1?: p.Flex<typeof Task1>;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultHomeProps {}

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

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
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
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },

      {
        path: "correctAnswer",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({
          size: "small",
          showBadge: true,
          position: "topRight",
          focusRing: true
        })
      },

      {
        path: "userId",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``
      },

      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      },

      {
        path: "task1.correctAnswer",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },

      {
        path: "task1.userId",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.userId;
            } catch (e) {
              if (e instanceof TypeError) {
                return undefined;
              }
              throw e;
            }
          })()
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
              <Task1
                data-plasmic-name={"task1"}
                data-plasmic-override={overrides.task1}
                className={classNames("__wab_instance", sty.task1)}
                correctAnswer={p.generateStateValueProp($state, [
                  "task1",
                  "correctAnswer"
                ])}
                onCorrectAnswerChange={p.generateStateOnChangeProp($state, [
                  "task1",
                  "correctAnswer"
                ])}
                onUserIdChange={p.generateStateOnChangeProp($state, [
                  "task1",
                  "userId"
                ])}
                userId={p.generateStateValueProp($state, ["task1", "userId"])}
              />

              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                onLoad={async event => {
                  const $steps = {};
                  $steps["setUserId"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariable",
                              interactionUuid: "tWIY8pgSH",
                              componentUuid: "EiqWor0wKzy",
                              argName: "variable"
                            },
                            () => ({
                              objRoot: $state,
                              variablePath: ["userId"]
                            })
                          ),
                          operation: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariable",
                              interactionUuid: "tWIY8pgSH",
                              componentUuid: "EiqWor0wKzy",
                              argName: "operation"
                            },
                            () => 0
                          ),
                          value: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariable",
                              interactionUuid: "tWIY8pgSH",
                              componentUuid: "EiqWor0wKzy",
                              argName: "value"
                            },
                            () =>
                              (() => {
                                function generateRandomUserID(length = 10) {
                                  const characters =
                                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                                  const charactersLength = characters.length;
                                  let result = "";

                                  for (let i = 0; i < length; i++) {
                                    result += characters.charAt(
                                      Math.floor(
                                        Math.random() * charactersLength
                                      )
                                    );
                                  }

                                  return result;
                                }

                                return generateRandomUserID();
                              })()
                          )
                        };

                        return __wrapUserFunction(
                          {
                            type: "InteractionLoc",
                            actionName: "updateVariable",
                            interactionUuid: "tWIY8pgSH",
                            componentUuid: "EiqWor0wKzy"
                          },
                          () =>
                            (({ variable, value, startIndex, deleteCount }) => {
                              const { objRoot, variablePath } = variable;

                              p.set(objRoot, variablePath, value);
                              return value;
                            })?.apply(null, [actionArgs]),
                          actionArgs
                        );
                      })()
                    : undefined;
                  if (
                    typeof $steps["setUserId"] === "object" &&
                    typeof $steps["setUserId"].then === "function"
                  ) {
                    $steps["setUserId"] = await __wrapUserPromise(
                      {
                        type: "InteractionLoc",
                        actionName: "updateVariable",
                        interactionUuid: "tWIY8pgSH",
                        componentUuid: "EiqWor0wKzy"
                      },
                      $steps["setUserId"]
                    );
                  }
                }}
                src={{
                  src: "/plasmic/usertest/images/image2.png",
                  fullWidth: 2,
                  fullHeight: 2,
                  aspectRatio: undefined
                }}
              />
            </p.Stack>
          </div>
        </div>
      </React.Fragment>
    </p.PlasmicPageGuard>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section", "task1", "img"],
  section: ["section", "task1", "img"],
  task1: ["task1"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  task1: typeof Task1;
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHome__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHome__ArgProps,
          internalVariantPropNames: PlasmicHome__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    task1: makeNodeComponent("task1"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
