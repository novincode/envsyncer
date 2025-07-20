#!/usr/bin/env node

import { scanTargetDirs } from './scanner';
import { promptTargetDirs } from './prompt';
import { syncEnvToTargets } from './sync';
import chalk from 'chalk';

async function main() {
  console.log(chalk.green.bold('\n🌱 EnvSync — syncing envs into your monorepo like magic\n'));

  const dirs = await scanTargetDirs();
  const selectedDirs = await promptTargetDirs(dirs);

  if (!selectedDirs.length) {
    console.log(chalk.yellow('No folders selected. Exiting.'));
    process.exit(0);
  }

  await syncEnvToTargets(selectedDirs);

  console.log(chalk.green('\n✅ Done syncing env files!\n'));
}

main().catch((err) => {
  console.error(chalk.red('❌ Something went wrong:'), err);
  process.exit(1);
});
