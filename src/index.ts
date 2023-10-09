#!/usr/bin/env node

import { $, argv, chalk, echo } from "zx";
import meta from "../package.json";
import { normalizeArgs, showHelp } from "./utils";

// hide $ command output (true by default)
$.verbose = false;

export interface Arg {
  description: string;
  long: string;
  short?: string;
  fallback?: any;
}

async function main() {
  const options: Array<Arg> = [
    {
      description: "Shows this help message.",
      long: "help",
      short: "h",
    },
    {
      description: "Shows this package version.",
      long: "version",
      short: "v",
    },
  ];
  const args = normalizeArgs(options, argv);

  if (args.version) {
    return echo(chalk.green(meta.version));
  }

  if (args.help) {
    return echo(showHelp([], options));
  }
}

main().catch((err) => console.error(chalk.red(err)));
