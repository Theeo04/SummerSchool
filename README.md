# Workshop 1

## Link to Hosted Project
[https://sapphire-rainy-flea.app.genez.io/](https://sapphire-rainy-flea.app.genez.io/)

## Prerequisites
To work with this project, ensure you have the following tools installed:

- Node.js (version >= 18.0.0)
- npm
- Genezio

### Install Node.js and npm
Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

### Install Genezio
```bash
npm install -g genezio
Project Structure
client/
dist/
node_modules/
src/
App.css
App.tsx
FileUpload.tsx
index.css
main.tsx
vite-env.d.ts
.eslintrc.cjs
.gitignore
index.html
package.json
package-lock.json
README.md
tsconfig.json
tsconfig.node.json
vite.config.ts
server/
node_modules/ (library root)
.gitignore
backend.ts
index.mjs
package.json
package-lock.json
.genezioignore
genezio.yaml
Deploy Your Project
Start a Local Server
bash
Copy code
genezio local
Commands
All commands are run from the root of the project, from a terminal:

Command	Action
npm install -g genezio	Installs genezio globally
genezio login	Logs in to genezio
genezio local	Starts a local server
genezio deploy	Deploys a production project
genezio --help	Get help using genezio
vbnet
Copy code

### Notes:
- Replace `<node_version>` with the actual Node.js version you intend to use.
- Adjust paths and file names as per your project's actual structure.
- Ensure all commands are executed from the root directory of your project.

This README.md provides a concise overview of your Workshop 1 project, including prerequisite
