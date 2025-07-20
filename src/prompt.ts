import inquirer from 'inquirer';
import chalk from 'chalk';

export async function promptTargetDirs(dirs: string[]): Promise<string[]> {
  if (dirs.length === 0) return [];

  const { selected } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'selected',
      message: 'Select folders to sync .env into:',
      choices: dirs.map((dir) => ({
        name: dir,
        checked: true,
        value: dir,
      })),
      validate: (answer) =>
        answer.length > 0 || 'You must choose at least one directory!',
    },
  ]);

  console.log(
    chalk.blue('\n🎯 Selected directories:'),
    selected.map((dir: string) => chalk.gray(dir)).join(', ')
  );

  return selected;
}
