import { argv } from "zx";
import meta from "../package.json";
import type { Arg } from "./index";

export function showHelp(
  positional: Array<string> = [],
  options: Array<Arg> = []
) {
  return `Usage: ${meta.name} ${meta.version}${positional
    .map((p) => ` <${p}>`)
    .join("")}${
    options.length > 0
      ? ` [options]\n\nOptions:${options.map(
          (o) =>
            `\n  ${o.short ? `-${o.short}` : ""}${
              o?.short && o?.long ? ", " : ""
            }${o.long ? `--${o.long}` : ""}\n\t${o.description}`
        )}`
      : ""
  }`;
}

export function normalizeArgs(schema: Array<Arg>, args: typeof argv) {
  return Object.fromEntries(
    schema.map(({ short, long, fallback }) => [
      long,
      args[short ?? long] ?? fallback,
    ])
  );
}
