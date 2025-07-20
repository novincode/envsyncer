import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const ENV_FILES = ['.env', '.env.local', '.env.development', '.env.production'];

export async function syncEnvToTargets(targetDirs: string[]) {
  const rootEnvFiles = ENV_FILES.filter((file) =>
    fs.existsSync(path.join(process.cwd(), file))
  );

  if (rootEnvFiles.length === 0) {
    console.log(chalk.red('❌ No .env files found in root directory.'));
    console.log(
      chalk.gray('Looked for:', ENV_FILES.join(', '))
    );
    return;
  }

  console.log(chalk.blue('\n📄 Found env files:'), rootEnvFiles.join(', '));

  for (const envFile of rootEnvFiles) {
    const rootEnvPath = path.join(process.cwd(), envFile);
    const envContent = fs.readFileSync(rootEnvPath, 'utf-8');

    for (const dir of targetDirs) {
      const targetPath = path.join(process.cwd(), dir, envFile);
      
      try {
        fs.writeFileSync(targetPath, envContent);
        console.log(
          chalk.green(`✅ Synced ${envFile} to`),
          chalk.gray(`${dir}/${envFile}`)
        );
      } catch (error) {
        console.error(
          chalk.red(`❌ Failed to sync ${envFile} to ${dir}:`),
          error
        );
      }
    }
  }
}
