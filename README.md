# envsyncer

A smart CLI tool to sync `.env` files across your monorepo projects with ease.

[![npm version](https://img.shields.io/npm/v/envsyncer.svg)](https://www.npmjs.com/package/envsyncer)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- Automatically detects all projects in your monorepo
- Syncs multiple env files (`.env`, `.env.local`, `.env.development`, `.env.production`)
- Interactive selection of target projects
- Smart project detection (looks for `package.json` files)
- Beautiful CLI interface with clear feedback
- Safe operation with error handling
- Works with any monorepo structure

## Installation

\`\`\`bash
# Global installation
npm install -g envsyncer

# Or use directly with npx
npx envsyncer
\`\`\`

## Usage

1. Navigate to your monorepo root:
\`\`\`bash
cd your-monorepo
\`\`\`

2. Run envsyncer:
\`\`\`bash
npx envsyncer
\`\`\`

3. Select the projects where you want to sync your env files
4. Done! Your env files are now synced across all selected projects

## Supported Env Files

The following env files are automatically detected and synced:
- `.env`
- `.env.local`
- `.env.development`
- `.env.production`

## Example

A typical monorepo structure where envsyncer works:

\`\`\`
monorepo/
├── .env               # Your root env files
├── .env.local
│
├── apps/
│   ├── web/          # Will sync env files here
│   │   └── package.json
│   └── api/          # And here
│       └── package.json
│
└── packages/
    └── shared/       # And here
        └── package.json
\`\`\`

## Development

\`\`\`bash
# Install dependencies
pnpm install

# Run in development mode
pnpm dev

# Build
pnpm build
\`\`\`

## Contributing

Contributions and feature requests are welcome! Feel free to check the [issues page](https://github.com/novincode/envsyncer/issues).

## License

MIT © [NovinCode](https://github.com/novincode)
