import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

export async function scanTargetDirs(): Promise<string[]> {
  try {
    const entries = fs.readdirSync(process.cwd(), { withFileTypes: true });
    const dirs = entries
      .filter(
        (entry) =>
          entry.isDirectory() &&
          fs.existsSync(path.join(process.cwd(), entry.name, 'package.json'))
      )
      .map((entry) => entry.name);

    if (dirs.length === 0) {
      console.log(chalk.yellow('⚠️  No directories with package.json found'));
      return [];
    }

    console.log(chalk.blue('📁 Found the following potential target directories:'));
    dirs.forEach((dir) => console.log(chalk.gray(`   - ${dir}`)));

    return dirs;
  } catch (error) {
    console.error(chalk.red('Error scanning directories:'), error);
    return [];
  }
}
