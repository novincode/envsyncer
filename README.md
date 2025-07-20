# 🌱 envsyncer

A smart CLI tool to sync `.env` files across your monorepo projects with ease.

[![npm version](https://img.shields.io/npm/v/envsyncer.svg)](https://www.npmjs.com/package/envsyncer)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Features

- 📁 Automatically detects all projects in your monorepo
- 🔄 Syncs multiple `.env` file types (`.env`, `.env.local`, `.env.development`, `.env.production`)
- ✨ Interactive selection of target projects
- 🎯 Smart project detection (looks for `package.json` files)
- 🌈 Beautiful CLI interface with clear feedback
- 🔒 Safe operation with error handling
- 📦 Works with any monorepo structure (apps/packages/etc)

## 📥 Installation

```bash
# Global installation
npm install -g envsyncer

# Or use directly with npx
npx envsyncer
```

## 🎮 Usage

1. Navigate to your monorepo root:
```bash
cd your-monorepo
```

2. Run envsyncer:
```bash
npx envsyncer
```

3. Select the projects where you want to sync your env files
4. Done! Your env files are now synced across all selected projects

## 🗂️ Supported Env Files

The following env files are automatically detected and synced:
- `.env`
- `.env.local`
- `.env.development`
- `.env.production`

## 📁 Project Structure Example

\`\`\`
your-monorepo/
├── .env                  # Root env file
├── .env.local           # Root local env
├── apps/
│   ├── web/
│   │   └── package.json
│   └── api/
│       └── package.json
└── packages/
    ├── ui/
    │   └── package.json
    └── utils/
        └── package.json
\`\`\`

## 🛠️ Development

\`\`\`bash
# Clone the repository
git clone https://github.com/novincode/envsyncer.git

# Install dependencies
pnpm install

# Run in development mode
pnpm dev

# Build
pnpm build

# Run the built version
pnpm start
\`\`\`

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check the [issues page](https://github.com/novincode/envsyncer/issues).

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📝 License

This project is [MIT](./LICENSE) licensed.

## 👤 Author

**NovinCode**

* GitHub: [@novincode](https://github.com/novincode)
* npm: [envsyncer](https://www.npmjs.com/package/envsyncer)

## ⭐️ Show your support

Give a ⭐️ if this project helped you!

## 📄 Changelog

### 1.0.3
- Added support for deep monorepo structures
- Improved project detection
- Better error handling

### 1.0.2
- Initial public release
- Basic env sync functionality
- Interactive project selection
