echo "================================================================"
echo "                    Workspace Bootstrap Script                  "
echo "================================================================"
echo ""

# installs the three extensions required for code formatting
echo ""
echo "Installing Required VS Code Extensions"
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension rvest.vs-code-prettier-eslint
code --install-extension CoenraadS.bracket-pair-colorizer-2
code --install-extension VisualStudioExptTeam.vscodeintellicode
code --install-extension eamodio.gitlens

clear
# installs npm modules for prettier, eslint, and eslint configs
echo "Installing npm modules for ESLint"
npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks

echo "Done!"