import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

function findPackageJsonDirs(dir: string, results: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  // Check if current directory has a package.json
  if (fs.existsSync(path.join(dir, 'package.json'))) {
    // Only add if it's not the root package.json
    if (dir !== process.cwd()) {
      results.push(path.relative(process.cwd(), dir));
    }
  }

  // Look in subdirectories
  for (const entry of entries) {
    if (entry.isDirectory()) {
      // Skip node_modules and hidden folders
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) {
        continue;
      }
      
      const fullPath = path.join(dir, entry.name);
      findPackageJsonDirs(fullPath, results);
    }
  }

  return results;
}

export async function scanTargetDirs(): Promise<string[]> {
  try {
    console.log(chalk.blue('🔍 Scanning for projects in monorepo...'));
    
    const dirs = findPackageJsonDirs(process.cwd());

    if (dirs.length === 0) {
      console.log(chalk.yellow('⚠️  No projects found in the monorepo'));
      return [];
    }

    console.log(chalk.blue('\n📁 Found the following projects:'));
    dirs.forEach((dir) => console.log(chalk.gray(`   - ${dir}`)));

    return dirs;
  } catch (error) {
    console.error(chalk.red('Error scanning directories:'), error);
    return [];
  }
}
