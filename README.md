# TAP MASTER

*An Addictive Clicker Game Built with React & Vite*

![last-commit](https://img.shields.io/github/last-commit/BigDevYaya/tap-master?style=flat&logo=git&logoColor=white&color=0080ff)
![repo-top-language](https://img.shields.io/github/languages/top/BigDevYaya/tap-master?style=flat&color=0080ff)
![repo-language-count](https://img.shields.io/github/languages/count/BigDevYaya/tap-master?style=flat&color=0080ff)

**Built with the tools and technologies:**

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white)

---

## 🎮 How to Play

1. **Start Tapping**: Click or tap the main button to earn your first points
2. **Buy Upgrades**: Use your points to purchase upgrades that increase your earning rate

**Pro Tips:**
- Don't spend all your points at once - save some for bigger upgrades
- Check back regularly to maximize your idle earnings

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How to Play](#how-to-play)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Overview

Tap Master is an engaging clicker/idle game built with React and Vite. Players tap to earn points, unlock upgrades, and build their virtual empire through strategic clicking and investment mechanics. The game features smooth animations, progressive unlocks, and addictive gameplay that keeps players coming back for more.

though the project development has been stopped

**What makes Tap Master special?**

This isn't just another clicker game - it incorporates economic simulation elements where players can make strategic decisions about investments and upgrades. The "Ponzi Scheme" mechanic adds an interesting twist to traditional clicker gameplay, challenging players to balance risk and reward as they build their tapping empire.

---

## ✨ Features

- 🎯 **Addictive Clicker Gameplay**: Simple tap mechanics with satisfying feedback
- ⚡ **Smooth Performance**: Built with Vite for 60fps gameplay experience
- 🎨 **Responsive Design**: Play seamlessly on desktop and mobile devices
- 💾 **Progress Saving**: Your game progress is automatically saved
- 🔄 **Idle Mechanics**: Continue earning even when not actively playing

---

## 🚀 Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BigDevYaya/tap-master.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd tap-master
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

### Usage

To start playing the game:

```bash
npm run dev
```

The game will be available at `http://localhost:5173` (or the port shown in your terminal). Start tapping and building your empire!

To build for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

### Testing

Run the linter to check code quality:

```bash
npm run lint
```

---

## 📁 Project Structure

```
tap-master/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## 🔧 Available Scripts

In the project directory, you can run:

### Development
- `npm run dev` - Starts the development server with hot reload
- `npm run build` - Creates an optimized production build
- `npm run preview` - Serves the production build locally

### Code Quality
- `npm run lint` - Runs ESLint to check for code quality issues

---

## 🛠️ Development Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) and add `plugin:react-hooks/recommended` to the `extends` list

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**[⬆ Back to Top](#tap-master)**

Made with ❤️ by [BigDevYaya](https://github.com/BigDevYaya)