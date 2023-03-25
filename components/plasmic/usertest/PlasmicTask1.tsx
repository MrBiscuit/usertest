// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: srLNpwS495U56VP6wX97Sc
// Component: RodQ_KOiniY

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
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
import Selectable from "../../Selectable"; // plasmic-import: fmmM3UFhDh/component
import Avatar from "../../Avatar"; // plasmic-import: Nyf0fcpCBO/component
import Field from "../../Field"; // plasmic-import: wzacTm_Aql/component
import Select from "../../Select"; // plasmic-import: CbeSuJTES8a/component
import Switch from "../../Switch"; // plasmic-import: LfL2mcCf-Co/component
import TextInput from "../../TextInput"; // plasmic-import: D5uMvH3-wZG/component
import Button from "../../Button"; // plasmic-import: 206AypIGIrX/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: srLNpwS495U56VP6wX97Sc/projectcss
import sty from "./PlasmicTask1.module.css"; // plasmic-import: RodQ_KOiniY/css

import SvgIcon from "./icons/PlasmicIcon__Svg"; // plasmic-import: ImslAYRPk/icon
import SearchsvgIcon from "../blank_project/icons/PlasmicIcon__Searchsvg"; // plasmic-import: EXEsZQ8P89p/icon
import ChecksvgIcon from "../blank_project/icons/PlasmicIcon__Checksvg"; // plasmic-import: OfZnG_-Zhi2/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: 37rOcoUtm3E/icon

export type PlasmicTask1__VariantMembers = {};

export type PlasmicTask1__VariantsArgs = {};
type VariantPropType = keyof PlasmicTask1__VariantsArgs;
export const PlasmicTask1__VariantProps = new Array<VariantPropType>();

export type PlasmicTask1__ArgsType = {};
type ArgPropType = keyof PlasmicTask1__ArgsType;
export const PlasmicTask1__ArgProps = new Array<ArgPropType>();

export type PlasmicTask1__OverridesType = {
  root?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  selectable?: p.Flex<typeof Selectable>;
  avatar?: p.Flex<typeof Avatar>;
  title?: p.Flex<"div">;
  close?: p.Flex<"div">;
  titleText?: p.Flex<"div">;
  close2?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  size?: p.Flex<typeof Select>;
  showBadge?: p.Flex<typeof Switch>;
  pos?: p.Flex<typeof Select>;
  src?: p.Flex<typeof TextInput>;
  _switch?: p.Flex<typeof Switch>;
  button?: p.Flex<typeof Button>;
};

export interface DefaultTask1Props {
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

function PlasmicTask1__RenderFunc(props: {
  variants: PlasmicTask1__VariantsArgs;
  args: PlasmicTask1__ArgsType;
  overrides: PlasmicTask1__OverridesType;
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
        path: "size.value",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => "default" as const
          : undefined
      },

      {
        path: "_switch.isChecked",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => undefined
          : undefined
      },

      {
        path: "src.value",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) =>
              "https://pyxis.nymag.com/v1/imgs/f85/54d/9494425816f9436f1366315cd8a955ca9e-avatar.1x.rsquare.w1400.jpg" as const
          : undefined
      },

      {
        path: "pos.value",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => "blue" as const
          : undefined
      },

      {
        path: "showBadge.isChecked",
        type: "private",
        variableType: "text",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => undefined
          : undefined
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const { cache, mutate } = usePlasmicDataConfig();

  return (
    true ? (
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
        <h1
          data-plasmic-name={"h1"}
          data-plasmic-override={overrides.h1}
          className={classNames(
            projectcss.all,
            projectcss.h1,
            projectcss.__wab_text,
            sty.h1
          )}
        >
          {"Try adjusting the size of the avatar:"}
        </h1>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__wEhYp
          )}
        >
          {(() => {
            try {
              return undefined;
            } catch (e) {
              if (e instanceof TypeError) {
                return undefined;
              }
              throw e;
            }
          })()}
        </div>
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__n1ME)}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__wIgy8)}>
                <Selectable
                  data-plasmic-name={"selectable"}
                  data-plasmic-override={overrides.selectable}
                  className={classNames("__wab_instance", sty.selectable)}
                  selectable={
                    <Avatar
                      data-plasmic-name={"avatar"}
                      data-plasmic-override={overrides.avatar}
                      className={classNames("__wab_instance", sty.avatar)}
                      image={
                        "https://pyxis.nymag.com/v1/imgs/f85/54d/9494425816f9436f1366315cd8a955ca9e-avatar.1x.rsquare.w1400.jpg" as const
                      }
                    />
                  }
                />
              </div>
            ) : null}
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__mZi5J)}>
                <div className={classNames(projectcss.all, sty.freeBox__fz5N5)}>
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"title"}
                    data-plasmic-override={overrides.title}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.title)}
                  >
                    <div
                      data-plasmic-name={"close"}
                      data-plasmic-override={overrides.close}
                      className={classNames(projectcss.all, sty.close)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__n1IVr
                        )}
                      >
                        {"🌈"}
                      </div>
                    </div>
                    <div
                      data-plasmic-name={"titleText"}
                      data-plasmic-override={overrides.titleText}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.titleText
                      )}
                    >
                      {"Tokens POC"}
                    </div>
                    <div
                      data-plasmic-name={"close2"}
                      data-plasmic-override={overrides.close2}
                      className={classNames(projectcss.all, sty.close2)}
                    >
                      <SvgIcon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(projectcss.all, sty.svg)}
                        role={"img"}
                      />
                    </div>
                  </p.Stack>
                </div>
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__bmA3A)}
                  >
                    {true ? (
                      <Field
                        className={classNames(
                          "__wab_instance",
                          sty.field__azObi
                        )}
                        select={
                          <Select
                            data-plasmic-name={"size"}
                            data-plasmic-override={overrides.size}
                            className={classNames("__wab_instance", sty.size)}
                            onChange={(...eventArgs) => {
                              p.generateStateOnChangeProp($state, [
                                "size",
                                "value"
                              ])(eventArgs[0]);
                            }}
                            options={[
                              { value: "small", label: "Small" },
                              { value: "default", label: "Default" },
                              { value: "large", label: "Large" }
                            ]}
                            value={p.generateStateValueProp($state, [
                              "size",
                              "value"
                            ])}
                          />
                        }
                      >
                        {"Size"}
                      </Field>
                    ) : null}
                    {true ? (
                      <Field
                        className={classNames(
                          "__wab_instance",
                          sty.field__tgCjp
                        )}
                        select={
                          <Switch
                            data-plasmic-name={"showBadge"}
                            data-plasmic-override={overrides.showBadge}
                            children={null}
                            className={classNames(
                              "__wab_instance",
                              sty.showBadge
                            )}
                            isChecked={
                              p.generateStateValueProp($state, [
                                "showBadge",
                                "isChecked"
                              ]) ?? false
                            }
                            onChange={(...eventArgs) => {
                              p.generateStateOnChangeProp($state, [
                                "showBadge",
                                "isChecked"
                              ])(eventArgs[0]);
                            }}
                          />
                        }
                      >
                        {"Show Badge"}
                      </Field>
                    ) : null}
                    {(() => {
                      try {
                        return $state.showBadge.isChecked;
                      } catch (e) {
                        if (e instanceof TypeError) {
                          return true;
                        }
                        throw e;
                      }
                    })() ? (
                      <Field
                        className={classNames(
                          "__wab_instance",
                          sty.field__okJpm
                        )}
                        select={
                          <Select
                            data-plasmic-name={"pos"}
                            data-plasmic-override={overrides.pos}
                            className={classNames("__wab_instance", sty.pos)}
                            onChange={(...eventArgs) => {
                              p.generateStateOnChangeProp($state, [
                                "pos",
                                "value"
                              ])(eventArgs[0]);
                            }}
                            options={[
                              { value: "topRight", label: "Top Right" },
                              { value: "bottomRight", label: "Bottom Right" }
                            ]}
                            value={p.generateStateValueProp($state, [
                              "pos",
                              "value"
                            ])}
                          />
                        }
                      >
                        {"Badge position"}
                      </Field>
                    ) : null}
                    {true ? (
                      <Field
                        className={classNames(
                          "__wab_instance",
                          sty.field__m5MtG
                        )}
                        select={
                          <TextInput
                            data-plasmic-name={"src"}
                            data-plasmic-override={overrides.src}
                            className={classNames("__wab_instance", sty.src)}
                            onChange={(...eventArgs) => {
                              p.generateStateOnChangeProp($state, [
                                "src",
                                "value"
                              ])((e => e.target?.value).apply(null, eventArgs));
                            }}
                            placeholder={"image src" as const}
                            value={p.generateStateValueProp($state, [
                              "src",
                              "value"
                            ])}
                          />
                        }
                      >
                        {"Src"}
                      </Field>
                    ) : null}
                    {true ? (
                      <Field
                        className={classNames(
                          "__wab_instance",
                          sty.field__h1CaH
                        )}
                        select={
                          <Switch
                            data-plasmic-name={"_switch"}
                            data-plasmic-override={overrides._switch}
                            children={null}
                            className={classNames(
                              "__wab_instance",
                              sty._switch
                            )}
                            isChecked={
                              p.generateStateValueProp($state, [
                                "_switch",
                                "isChecked"
                              ]) ?? false
                            }
                            onChange={(...eventArgs) => {
                              p.generateStateOnChangeProp($state, [
                                "_switch",
                                "isChecked"
                              ])(eventArgs[0]);
                            }}
                          />
                        }
                      >
                        {"Focus ring"}
                      </Field>
                    ) : null}
                  </p.Stack>
                ) : null}
              </div>
            ) : null}
          </p.Stack>
        ) : null}
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__t9CDf
          )}
        >
          {"123123"}
        </div>
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button)}
          color={"blue" as const}
          onClick={async event => {
            const $steps = {};
            $steps["dataOperation"] = true
              ? (() => {
                  const actionArgs = {
                    dataOp: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "dataSourceOp",
                        interactionUuid: "mXzh3d8EeuI",
                        componentUuid: "RodQ_KOiniY",
                        argName: "dataOp"
                      },
                      () => ({
                        sourceId: "b8UAFEnT6Wj5LorB3qg5zQ",
                        opId: "c6f24a9354cbee15cc49442a65b670c3b4e939ea69a57a5748a761b99224574c42dec7c2de19c92295aff463df5767e972775e26b9b5b752b554a5553dcc988ab28f30bf0b0d5241fb4c8e9fef911f399138c08deb9d7cd7018e49b9fefd6e020bba9af0d61154042ea5db222087be52b02e0fb590f8adf77735a7dbb64a2059699f4c56f63fbc8cae7df080e1c9e73d29d28b7886aad4c1850574166bf040de67bf4523293681d443b83b6c1677e7172707c94e192c32b6d09f4064600483d0ccbe49f6ca2cad7e3ddc97416b488fef8dd92c7d77922cfc8706b91d2383fa0a5ad15d77f8c44345e2f683f6bb8a2fa3bfb130b8739a42cae0a94333e6eb0d902d1be54c9d4c912d57dfc3f4864d1aa02e2bf24e8b34ae24addaafd9985cf3fbc73f9cced6c36346c588a305967cee39466629f2f060270c14f719c5f82beb9f59a8952b43404f9e08324ea21d718d2e48cabcae5d33130278a117a645a3e86e08fd6b6209660f823dfbc34300de52d2baeff4f5b691ba2983517b97e8a02ce5a791cdcc6681fa8e42c896e0d340e34dfd7d37c1788968b9ba679118d8aef09e5a31fe9490b5f7fd4606432095e674785c7cba1b3a1cbab364d1714187bd029e90846de75755320c22593a2f8e5f197dad98e4bbb8111858c52bd8463c326f16b8a5b452e4aa4b0a222432dde107f4760823ebe59b7681977440231c54189a2d6c987134fc9866dd01dd62890588c9d795d0dd59d4373100763dba243a0f24c7e16cf4c903bbf724dfb47a16b64698ca321eafba5fe157f86e8f83e0621df5b286f2f23e89e03d894fcf98dea9ec8db1818e9906c4260c8acc93c107c776ed461c7fc5f8f05293419fb77b16acc7afa8829905ab6649abb8ec8dc7d1dd3f726813ff3b1c19bf689d7476850e19d7ae0d35998a7f8ed8ca47c51ec12a6e14f3e19e0770defaf4aa160015f1f9e3da94d51eee0d493445a7bbb58992ef61b8f0fa7a82ed2b6d0e6ebcdce0a15fa6e3c3efd75b7ebbaae9db9e3f92e70d2bad92139663cdb70ca557bb7d6af1a3b330c57f54ca6b485ae4b196e5bd1bcbc81a53a91df2080734d498515490eaf0ebbcabe1d6978be31af691e160fd5b2e2ed7a6b61f2ca54999a34a0959036551808f147bfef1677d21b27e424f692ab2ce960516ffd6022ca954d712cb1f29f85564eaef752f",
                        userArgs: {
                          variables: [
                            (() => {
                              try {
                                return undefined;
                              } catch (e) {
                                if (e instanceof TypeError) {
                                  return null;
                                }
                                throw e;
                              }
                            })(),
                            (() => {
                              try {
                                return (() => {
                                  function objectsAreEqual(obj1, obj2) {
                                    // Get the keys of both objects
                                    const keys1 = Object.keys(obj1);
                                    const keys2 = Object.keys(obj2);

                                    // Check if both objects have the same number of keys
                                    if (keys1.length !== keys2.length) {
                                      return false;
                                    }

                                    // Iterate through the keys of the first object and compare values
                                    for (const key of keys1) {
                                      if (obj1[key] !== obj2[key]) {
                                        return false;
                                      }
                                    }

                                    // If all keys and values are equal, return true
                                    return true;
                                  }

                                  if (Object.keys($state.result).length === 0)
                                    return "failed";
                                  return objectsAreEqual(
                                    $state.result,
                                    $state.correctAnswer
                                  )
                                    ? "success"
                                    : JSON.stringify($state.result);
                                })();
                              } catch (e) {
                                if (e instanceof TypeError) {
                                  return null;
                                }
                                throw e;
                              }
                            })()
                          ]
                        },

                        cacheKey: null,
                        invalidatedKeys: ["plasmic_refresh_all"]
                      })
                    )
                  };

                  return __wrapUserFunction(
                    {
                      type: "InteractionLoc",
                      actionName: "dataSourceOp",
                      interactionUuid: "mXzh3d8EeuI",
                      componentUuid: "RodQ_KOiniY"
                    },
                    () =>
                      (async ({ dataOp }) => {
                        const response = await executePlasmicDataOp(dataOp, {
                          userAuthToken: dataSourcesCtx?.userAuthToken
                        });
                        if (
                          dataOp.invalidatedKeys.find(
                            key => key === "plasmic_refresh_all"
                          )
                        ) {
                          Array.from(cache.keys()).forEach(key => {
                            mutate(key);
                          });
                          return response;
                        }
                        dataOp.invalidatedKeys?.forEach(invalidateKey =>
                          Array.from(cache.keys()).forEach(key => {
                            if (
                              typeof key === "string" &&
                              key.includes(`.$.${invalidateKey}.$.`)
                            ) {
                              mutate(key);
                            }
                          })
                        );

                        return response;
                      })?.apply(null, [actionArgs]),
                    actionArgs
                  );
                })()
              : undefined;
            if (
              typeof $steps["dataOperation"] === "object" &&
              typeof $steps["dataOperation"].then === "function"
            ) {
              $steps["dataOperation"] = await __wrapUserPromise(
                {
                  type: "InteractionLoc",
                  actionName: "dataSourceOp",
                  interactionUuid: "mXzh3d8EeuI",
                  componentUuid: "RodQ_KOiniY"
                },
                $steps["dataOperation"]
              );
            }
          }}
        >
          {"Submit and Continue ->"}
        </Button>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "h1",
    "selectable",
    "avatar",
    "title",
    "close",
    "titleText",
    "close2",
    "svg",
    "size",
    "showBadge",
    "pos",
    "src",
    "_switch",
    "button"
  ],
  h1: ["h1"],
  selectable: ["selectable", "avatar"],
  avatar: ["avatar"],
  title: ["title", "close", "titleText", "close2", "svg"],
  close: ["close"],
  titleText: ["titleText"],
  close2: ["close2", "svg"],
  svg: ["svg"],
  size: ["size"],
  showBadge: ["showBadge"],
  pos: ["pos"],
  src: ["src"],
  _switch: ["_switch"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  selectable: typeof Selectable;
  avatar: typeof Avatar;
  title: "div";
  close: "div";
  titleText: "div";
  close2: "div";
  svg: "svg";
  size: typeof Select;
  showBadge: typeof Switch;
  pos: typeof Select;
  src: typeof TextInput;
  _switch: typeof Switch;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTask1__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTask1__VariantsArgs;
    args?: PlasmicTask1__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTask1__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTask1__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTask1__ArgProps,
          internalVariantPropNames: PlasmicTask1__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTask1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTask1";
  } else {
    func.displayName = `PlasmicTask1.${nodeName}`;
  }
  return func;
}

export const PlasmicTask1 = Object.assign(
  // Top-level PlasmicTask1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    selectable: makeNodeComponent("selectable"),
    avatar: makeNodeComponent("avatar"),
    title: makeNodeComponent("title"),
    close: makeNodeComponent("close"),
    titleText: makeNodeComponent("titleText"),
    close2: makeNodeComponent("close2"),
    svg: makeNodeComponent("svg"),
    size: makeNodeComponent("size"),
    showBadge: makeNodeComponent("showBadge"),
    pos: makeNodeComponent("pos"),
    src: makeNodeComponent("src"),
    _switch: makeNodeComponent("_switch"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicTask1
    internalVariantProps: PlasmicTask1__VariantProps,
    internalArgProps: PlasmicTask1__ArgProps
  }
);

export default PlasmicTask1;
/* prettier-ignore-end */